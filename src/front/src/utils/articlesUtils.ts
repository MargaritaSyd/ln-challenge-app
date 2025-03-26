import { IArticles, ITags, ITagsGroupedItem } from "@/bff/interfaces/apiIntefaces";

export const tagsGrouped = (data:IArticles[]) => {
  const tagsGroup = data.flatMap((item) => item.taxonomy.tags);
  return tagsGroup;
};

export const countTags = (data:IArticles[]) => {
  const allTags = tagsGrouped(data);
  const map = new Map();  

  allTags.forEach((item:ITags) => {  
      const tagItem = JSON.stringify(item);
      if (map.has(tagItem)) {  
          map.set(tagItem, map.get(tagItem) + 1);  
      } else {  
          map.set(tagItem, 1);  
      }  
  });  

  const result:ITagsGroupedItem[] = [];  
  map.forEach((count, tagItem) => {  
      const item = JSON.parse(tagItem);
      item.count = count;  
      result.push(item);  
  });  
  result.sort((a, b) => b.count - a.count);  
  return result.slice(0,10);  
}  

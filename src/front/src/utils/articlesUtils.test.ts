
import { allArticlesMocks, articlesMocks } from "../services/mocks";
import { countTags, tagsGrouped } from "./articlesUtils";
import { ITags, ITagsGroupedItem } from "@/bff/interfaces/apiIntefaces";


describe('tagsGrouped function test', () => {
  it('should return tags from item subtype: 7', () => {
    const tags:ITags[]  = tagsGrouped(articlesMocks);
    expect(tags).toHaveLength(35);
  });
});



describe('countTag function test', () => {
  it('should return 10 items ordered from highest to lowest', () => {
    const tags:ITagsGroupedItem[]  = countTags(allArticlesMocks);
    expect(tags).toHaveLength(10);
  });
});


import { ITagsGroupedItem } from "@/bff/interfaces/apiIntefaces";
import Tags from "../tags";

interface IGroupTags {
  tags: ITagsGroupedItem[];
}
export default function GroupTags({tags}:IGroupTags) {
  return (
      <div className="mb-5">
      {
        tags.map((tag: ITagsGroupedItem) => (
        <Tags
          key={tag.slug}
          titleTag={tag.text}
          linkTag={`/tema/${tag.slug}`}
        />
      ))
      }
      </div>
  );
}

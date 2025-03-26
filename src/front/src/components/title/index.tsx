import { ITagsGroupedItem } from "@/bff/interfaces/apiIntefaces";
import Tags from "../tags";

interface ITitle {
  text: string;
  tags: ITagsGroupedItem[];
}
export default function Title({text, tags}:ITitle) {
  return (
    <div>
      <h1 className="title text-3xl w-max">
        {text}
      </h1>
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
    </div>
  );
}

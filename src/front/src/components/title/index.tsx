import { ITagsGroupedItem } from "@/bff/interfaces/apiIntefaces";
import GroupTags from "../groupTags";

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
      <GroupTags tags={tags} />
    </div>
  );
}

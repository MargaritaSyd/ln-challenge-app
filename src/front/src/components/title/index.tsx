import Tags from "../tags";

interface ITitle {
  text: string;
}
const tags = ['tag1', 'tag2', 'tag3', 'tag4', 'tag5']
export default function Title({text}:ITitle) {
  return (
    <div>
      <h1 className="title text-3xl w-max">
        {text}
      </h1>
      {
        tags.map((tag: string) => (
        <Tags
          key={tag}
          titleTag={tag}
          linkTag={tag}
        />
      ))
      }
    </div>
  );
}

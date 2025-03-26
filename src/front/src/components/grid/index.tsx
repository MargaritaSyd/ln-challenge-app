import { IArticles } from "@/bff/interfaces/apiIntefaces";
import Card from "../card";

interface IGrid {
  articles: IArticles[]
}
export default function Grid({articles}:IGrid) {

  return (
    <div className="grid_section">
      {
        articles.map((articleItem: IArticles) => {
          const {promo_items, headlines, display_date} =  articleItem
          return (
          <Card
            key={articleItem._id}
            imageSrc={promo_items.basic.url}
            title={headlines.basic}
            date={display_date}
          />
        )})
      }
    </div>
  );
}

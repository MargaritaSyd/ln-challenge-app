import { IArticles } from "@/bff/interfaces/apiIntefaces";
import Card from "../card";
import { useContext } from "react";
import { Context } from "../../context/context";

export default function Grid() {
  const articles =useContext(Context);

  return (
    <div className="grid_section">
      {
        (articles as IArticles[]).map((articleItem: IArticles) => {
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

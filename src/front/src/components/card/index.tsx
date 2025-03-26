import { parseDate, titleWithStrongWord } from "../../utils/articlesUtils";

export interface ICard {
  imageSrc: string;
  title: string;
  date: string;
}

export default function Card({imageSrc, title, date}:ICard) {
const {strongWord, joinTitle} = titleWithStrongWord(title);
  return (
    <div>
      <div className="md:h-60 overflow-hidden content-center">
        <img  
          src={imageSrc} alt={title}
          className="w-full card_image"
        />
      </div>
      <h2 className="card_title"><b>{strongWord}</b>{` ${joinTitle}`}</h2>
      <h4 className="card_date">{parseDate(date)}</h4>
    </div>
  );
}

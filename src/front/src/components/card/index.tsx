import { parseDate, titleWithStrongWord } from "../../utils/articlesUtils";

interface ICard {
  imageSrc: string;
  title: string;
  date: string;
}

export default function Card({imageSrc, title, date}:ICard) {
const {strongWord, joinTitle} = titleWithStrongWord(title);
  return (
    <div>
      <div className="h-50 overflow-hidden">
        <img  
          src={imageSrc} alt={title}
          className="w-full"
        />
      </div>
      <h2 className="card_title"><b>{strongWord}</b>{` ${joinTitle}`}</h2>
      <h4 className="card_date">{parseDate(date)}</h4>
    </div>
  );
}

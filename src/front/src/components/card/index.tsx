interface ICard {
  imageSrc: string;
  title: string;
  date: string;
}

export default function Card({imageSrc, title, date}:ICard) {
  
  return (
    <div>
      <div className="h-50 overflow-hidden">
      <img  
        src={imageSrc} alt={title}
        className="w-full"
      />
      </div>
      <h2>{title}</h2>
      <h4>{date}</h4>
    </div>
  );
}

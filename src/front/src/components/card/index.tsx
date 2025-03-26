// import Image from 'next/image';

interface ICard {
  imageSrc: string;
  title: string;
  date: string;
}

export default function Card({imageSrc, title, date}:ICard) {
  return (
    <div>
      <img  
        src={imageSrc} alt={title}
      />
      <h2>{title}</h2>
      <h4>{date}</h4>
    </div>
  );
}

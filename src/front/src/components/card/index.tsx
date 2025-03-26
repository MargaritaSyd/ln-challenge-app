import Image from 'next/image';

interface ICard {
  imageSrc: string;
  title: string;
  date: string;
}

export default function Card({imageSrc, title, date}:ICard) {
  return (
    <div>
      <Image  
        src={imageSrc} alt="2"
        width={100} height={100}
      />
      <h2>{title}</h2>
      <h4>{date}</h4>
    </div>
  );
}

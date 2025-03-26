"use client"
interface IButton {
  title: string;
}

export default function Button({title}:IButton) {
  return (
    <div className="w-screen text-center mt-10 mb-10">
      <button className="button" onClick={()=>{}}>{title.toUpperCase()}</button>
    </div>
  );
}

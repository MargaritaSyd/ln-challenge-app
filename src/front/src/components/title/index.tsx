"use client";
import GroupTags from "../groupTags";
import { useContext } from "react";
import { Context } from "../../context/context";
import { countTags } from "../../utils/articlesUtils";
import { IArticles } from "@/bff/interfaces/apiIntefaces";

interface ITitle {
  text: string;
}
export default function Title({text}:ITitle) {
  const articles =useContext(Context);
  return (
    <div>
      <h1 className="title text-3xl w-max">
        {text}
      </h1>
      <GroupTags tags={countTags(articles as IArticles[])} />
    </div>
  );
}

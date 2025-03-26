"use client";

import { useContext } from "react";
import { Context } from "@/front/src/context/context";
import Title from "@/front/src/components/title";
import Grid from "@/front/src/components/grid";
import Button from "@/front/src/components/button";
import { IArticles } from "@/bff/interfaces/apiIntefaces";

export default function Home() {

  const articles =useContext(Context);

  return (
    <>
      {
        (articles as IArticles[])?.length !== 0 ? (
          <>
          <Title
            text="Acumulado Grilla"
          />
          <Grid />
          <Button title="más notas de acumulado grilla"/>
          </>
        ) : (
          <h1>LOADING...</h1>
        )
      }
    </>
  );
}

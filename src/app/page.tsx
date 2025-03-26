import Title from "@/front/src/components/title";
import Grid from "@/front/src/components/grid";
import { loadArticles } from "@/bff/services/articles";
import { countTags } from "@/front/src/utils/articlesUtils";
import Button from "@/front/src/components/button";

export default async function Home() {

  const data = await loadArticles();

  return (
    <>
      <Title
        text="Acumulado Grilla"
        tags={countTags(data)}
      />
      <Grid
        articles={data}
      />
      <Button title="más notas de acumulado grilla"/>
    </>
  );
}

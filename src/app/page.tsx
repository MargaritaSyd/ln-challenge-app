import Title from "@/front/src/components/title";
import Grid from "@/front/src/components/grid";
import { loadArticles } from "@/bff/services/articles";
import { countTags } from "@/front/src/utils/articlesUtils";

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
    </>
  );
}

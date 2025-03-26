import { apiArticles } from "../routes/apiArticles";
import { IArticles } from "../interfaces/apiIntefaces";

const subtypeFilter = '7';

export async function loadArticles() {
  const data = await apiArticles()
  const dataBySubtype = data.filter((item:IArticles) => item.subtype === subtypeFilter);

  return dataBySubtype;
}


export async function apiArticles () {
  try {
    const res = await fetch("https://jrt2bb3b2nlkw5ozvfcld62wbe0pnifh.lambda-url.us-east-1.on.aws/")
    const data = await res.json();
    return data.articles;
  }
  catch (error) {
    return error;
  }
}
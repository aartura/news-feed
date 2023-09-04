import { mockNews } from "../constants/constants";

const apiKey = process.env.REACT_APP_API_KEY!;
const baseUrl = `https://newsdata.io/api/1/news?apikey=${apiKey}`;

export async function getNews() {
  try {
    const response = await fetch(`${baseUrl}&language=en`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return mockNews;
  }
}

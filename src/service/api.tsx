import { mockNews } from "../constants/constants";
import { throwToastError } from "./notifications";

const apiKey = process.env.REACT_APP_API_KEY!;
const baseUrl = `https://newsdata.io/api/1/news?apikey=${apiKey}`;

export async function getNews() {
  try {
    const response = await fetch(`${baseUrl}&language=en`);
    const data = await response.json();
    if (data.status === "error") {
      throwToastError(data.results.message);
    }
    return data;
  } catch (error) {
    throwToastError("An unhandled error occurred.");
    return mockNews;
  }
}

export async function getNewsByName(name: string) {
  try {
    const response = await fetch(`${baseUrl}&language=en&q=${name}`);
    const data = await response.json();
    if (data.status === "error") {
      throwToastError(data.results.message);
    }
    return data;
  } catch (error) {
    throwToastError("An unhandled error occurred.");
    return mockNews;
  }
}

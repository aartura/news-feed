export interface ResponseInterface {
  status: string;
  totalResults: number;
  results: NewsInterface[];
  nextPage: string;
}

export interface NewsInterface {
  article_id: string;
  title: string;
  link: string;
  source_id: string;
  keywords: string[];
  creator: string[];
  image_url: string;
  video_url: string;
  description: string;
  pubDate: string;
  content: string;
  country: string[];
  category: string[];
  language: string;
}

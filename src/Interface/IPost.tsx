export interface IPost {
  author: string;
  content: string;
  description: string;
  publishedAt: Date;
  source: {
    id: string | null;
    name: string;
  };
  title: string;
  url: string;
  urlToImage: string;
}

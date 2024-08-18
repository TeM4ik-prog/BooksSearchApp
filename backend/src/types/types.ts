export interface IUser {
  id: string;
  email: string;
}
export interface ISearchQuery {
  quickSearch?: string;
  title?: string;
  author?: string;
  category?: string;
  publisher?: string;
  minPages?: string;
  maxPages?: string;
}

export interface ISearchResultRes {
  total_count?: number;
  incomplete_results?: boolean;
  items?: ISearchResultItem[];
}

export interface ISearchResultItem {
  id?: number;
  name?: string;
  owner?: ISearchResultItemOwner;
  stargazers_count?; // 用户加星
  description?: string; // 描述
}

export interface ISearchResultItemOwner {
  id?: string;
  login?: string;
  avatar_url?: string;
}

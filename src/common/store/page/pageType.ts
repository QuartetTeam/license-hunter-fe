interface IPageType {
  page: number;
  setPage: (page: number) => void;
}

interface ISearchedPageType {
  searchedPage: number;
  setSearchedPage: (page: number) => void;
}

export type { IPageType, ISearchedPageType };

interface ISearchWordType {
  searchWord: string;
  setSearchWord: (searchWord: string) => void;
}

interface IIsMainCategoryType {
  isMainCategory: boolean;
  setIsMainCategory: (isMainCategory: boolean) => void;
}

export type { ISearchWordType, IIsMainCategoryType };

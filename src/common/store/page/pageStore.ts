import { create } from 'zustand';
import { IPageType, ISearchedPageType } from './pageType';

const pageStore = create<IPageType>((set) => ({
  page: 1,
  setPage: (page) => set({ page }),
}));

const searchedPageStore = create<ISearchedPageType>((set) => ({
  searchedPage: 1,
  setSearchedPage: (searchedPage) => set({ searchedPage }),
}));

export { pageStore, searchedPageStore };

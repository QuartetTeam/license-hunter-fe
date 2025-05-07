import { create } from 'zustand';
import { ISearchWordType, IIsMainCategoryType } from './certType';

const searchWordStore = create<ISearchWordType>((set) => ({
  searchWord: '',
  setSearchWord: (searchWord) => set({ searchWord }),
}));

const isMainCategoryStore = create<IIsMainCategoryType>((set) => ({
  isMainCategory: true,
  setIsMainCategory: (isMainCategory) => set({ isMainCategory }),
}));

export { searchWordStore, isMainCategoryStore };

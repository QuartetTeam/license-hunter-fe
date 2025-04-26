import { create } from 'zustand';
import IPageType from './pageType';

const pageStore = create<IPageType>((set) => ({
  page: 1,
  setPage: (page) => set({ page }),
}));

export default pageStore;

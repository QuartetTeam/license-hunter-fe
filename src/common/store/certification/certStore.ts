import { create } from 'zustand';
import ISearchWordType from './certType';

const certStore = create<ISearchWordType>((set) => ({
  searchWord: '',
  setSearchWord: (searchWord) => set({ searchWord }),
}));

export default certStore;

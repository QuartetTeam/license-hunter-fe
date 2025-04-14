import { create } from 'zustand';
import { ISearchCertStore } from './certType.ts';

const searchCertStore = create<ISearchCertStore>((set) => ({
  searchCertData: [],
  setSearchCertData: (data) => set({ searchCertData: data }),
}));

export default searchCertStore;

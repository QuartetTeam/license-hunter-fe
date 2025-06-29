import { create } from 'zustand';
import ICheckArrType from './mailingType';

const mailingStore = create<ICheckArrType>((set) => ({
  checkArr: [],
  setCheckArr: (checkArr) => set({ checkArr }),
  page: 0,
  setPage: (page) => set({ page: page }),
}));

export default mailingStore;

import { create } from 'zustand';
import ICheckArrType from './mailingType';

const mailingStore = create<ICheckArrType>((set) => ({
  checkArr: [],
  setCheckArr: (checkArr) => set({ checkArr }),
}));

export default mailingStore;

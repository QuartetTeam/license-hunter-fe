import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import IAuthType from './authType.ts';

const authStore = create<IAuthType>()(
  persist(
    (set) => ({
      accessToken: '',
      setAccessToken: (accessToken: string) =>
        set({
          accessToken: accessToken,
        }),
      clearAccessToken: () =>
        set({
          accessToken: '',
        }),
    }),
    {
      name: 'accessToken',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default authStore;

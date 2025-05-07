import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { IAccessTokenType, IRefreshTokenType } from './authType.ts';

const accessTokenStore = create<IAccessTokenType>()(
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

const refreshTokenStore = create<IRefreshTokenType>((set) => ({
  refreshToken: '',
  setRefreshToken: (refreshToken: string) =>
    set({
      refreshToken: refreshToken,
    }),
  clearRefreshToken: () =>
    set({
      refreshToken: '',
    }),
}));

export { accessTokenStore, refreshTokenStore };

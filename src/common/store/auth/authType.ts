interface IAccessTokenType {
  accessToken: string;
  setAccessToken: (accessToken: string) => void;
  clearAccessToken: () => void;
}

interface IRefreshTokenType {
  refreshToken: string;
  setRefreshToken: (refreshToken: string) => void;
  clearRefreshToken: () => void;
}

export type { IAccessTokenType, IRefreshTokenType };

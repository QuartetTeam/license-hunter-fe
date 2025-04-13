export interface IUserData {
  email: string;
  nickname: string;
  profileImageUrl: string;
  interests: string[];
  status: string;
}

export interface IUserList {
  code: number;
  message: string;
  data: IUserData;
}

interface IChangeNickData {
  nickname: string;
}

export interface IChangeNick {
  code: number;
  message: string;
  data: IChangeNickData;
}

interface IChangeEmailData {
  email: string;
}

export interface IChangeEmail {
  code: number;
  message: string;
  data: IChangeEmailData;
}

interface IChangeInterestData {
  categoryNames: string[];
}

export interface IChangeInterest {
  code: number;
  message: string;
  data: IChangeInterestData;
}

interface IChangeMailingData {
  status: string;
}

export interface IChangeMailingStatus {
  code: number;
  message: string;
  data: IChangeMailingData;
}

export interface IUserDataProps {
  data?: IUserData;
}

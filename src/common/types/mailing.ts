export interface IMailingContent {
  mailingId: number;
  certificationId: number;
  name: string;
  applicationDate: string;
  examDate: string;
}

export interface IMailingData {
  content: IMailingContent[];
  page: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
  first: boolean;
  last: boolean;
  empty: boolean;
}

export interface IMailingList {
  code: number;
  message: string;
  data: IMailingData;
}

export interface IAddMailing {
  code: number;
  message: string;
}

export interface IMailingStatusData {
  status: string;
}

export interface IMailingStatus {
  code: number;
  message: string;
  data: IMailingStatusData;
}

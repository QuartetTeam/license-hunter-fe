import axios from 'axios';
import endpoints from './endpoints.ts';
import { IAddMailing, IMailingList } from '@type/mailing.ts';
import { ICalendarList } from '@type/calendar.ts';
import { IAddCalendar, ICertList, ICertSearchList } from '../../mock/data/dataTypes.ts';
import { ICertDetailList, IRecommendedList } from '@type/cert.ts';
import { ICategoryTypes } from '@type/category.ts';
import {
  IChangeEmail,
  IChangeInterest,
  IChangeMailingStatus,
  IChangeNick,
  IUserList,
} from '@type/user.ts';

const { BASE_URL, CALENDAR, MAILINGS, CERTIFICATIONS, MEMBERS, PROFILE } = endpoints;

// 소셜 로그인 (카카오, 네이버, 구글)
const login = async () => {
  const response = await axios.post(`${BASE_URL}/oauth2-jwt-header`, {}, { withCredentials: true });
  return response.data;
};

// Refresh Token 재발급 (카카오, 네이버, 구글)
const refresh = (refreshToken: object) => {
  return async () => {
    const response = await axios.post(`${BASE_URL}/oauth2-jwt-header`, refreshToken);
    return response.data;
  };
};

// 소셜 로그아웃 (카카오, 네이버, 구글)
const logout = async () => {
  const response = await axios.post(`${BASE_URL}/logout`);
  return response.data;
};

// 메일링 서비스 조회
const getMailingsData = (page: number, pageSize: number) => {
  return async (): Promise<IMailingList> => {
    const params = {
      page: page,
      pageSize: pageSize,
    };
    const response = await axios.get(`${BASE_URL}/${MAILINGS}`, { params });
    return response.data;
  };
};

// 메일리 서비스 추가
const addMailingsData = (certificationId: number) => {
  return async (): Promise<IAddMailing> => {
    const response = await axios.post(
      `${BASE_URL}/${CERTIFICATIONS}/${certificationId}/${MAILINGS}`
    );
    return response.data;
  };
};

// 메일링 서비스 삭제
const deleteMailingsData = (mailingIds: number[]) => {
  return async () => {
    const params = {
      mailingIds: mailingIds,
    };
    const response = await axios.delete(`${BASE_URL}/${MAILINGS}`, {
      params,
    });
    return response.data;
  };
};

// 캘린더 조회
const getCalendarData = async (): Promise<ICalendarList> => {
  const response = await axios.get(`${BASE_URL}/${CALENDAR}`);
  return response.data;
};

// 캘린더 추가
const addCalendarData = (certificationId: number) => {
  return async (): Promise<IAddCalendar> => {
    const response = await axios.post(
      `${BASE_URL}/${CERTIFICATIONS}/${certificationId}/${CALENDAR}`
    );
    return response.data;
  };
};

// 캘린더 삭제
const deleteCalendarData = (certificationId: number) => {
  return async () => {
    const response = await axios.delete(
      `${BASE_URL}/${CERTIFICATIONS}/${certificationId}/${CALENDAR}`
    );
    return response.data;
  };
};

// 자격증 조회
const getCertData = (categoryId: number, page: number, pageSize: number) => {
  return async (): Promise<ICertList> => {
    const params = {
      categoryId: categoryId,
      page: page,
      pageSize: pageSize,
    };
    const response = await axios.get(`${BASE_URL}/${CERTIFICATIONS}`, { params });
    return response.data;
  };
};

// 자격증 검색
const getSearchCertData = (name?: string) => {
  return async (): Promise<ICertSearchList> => {
    const params = {
      name: name,
    };
    const response = await axios.get(`${BASE_URL}/${CERTIFICATIONS}/search`, { params });
    return response.data;
  };
};

// 자격증 상세 조회
const getCertDetailData = (certificationId: number) => {
  return async (): Promise<ICertDetailList> => {
    const response = await axios.get(`${BASE_URL}/${CERTIFICATIONS}/${certificationId}`);
    return response.data;
  };
};

// 자격증 추천
const getCertRecommendData = async (): Promise<IRecommendedList> => {
  const response = await axios.get(`${BASE_URL}/${CERTIFICATIONS}/recommendation`);
  return response.data;
};

// 자격증 카테고리 조회 (대분류)
const getCertCategoryData = (isDefault: boolean) => {
  return async (): Promise<ICategoryTypes> => {
    const params = {
      isDefault: isDefault,
    };
    const response = await axios.get(`${BASE_URL}/${CERTIFICATIONS}/category`, { params });
    return response.data;
  };
};

// 자격증 카테고리 조회 (소분류)
const getCertChildCategoryData = (mainCategoryId: number) => {
  return async (): Promise<ICategoryTypes> => {
    const params = { mainCategoryId: mainCategoryId };
    const response = await axios.get(`${BASE_URL}/${CERTIFICATIONS}/category`, { params });
    return response.data;
  };
};

// 사용자 정보 조회
const getUserData = async (): Promise<IUserList> => {
  const response = await axios.get(`${BASE_URL}/${MEMBERS}`);
  return response.data;
};

// 사용자 닉네임 변경
const patchUserNick = (nickname: string) => {
  return async (): Promise<IChangeNick> => {
    const data = { nickname: nickname };
    const response = await axios.patch(`${BASE_URL}/${MEMBERS}/${PROFILE}/nickname`, data);
    return response.data;
  };
};

// 사용자 이메일 변경
const patchUserEmail = (email: string) => {
  return async (): Promise<IChangeEmail> => {
    const data = { email: email };
    const response = await axios.patch(`${BASE_URL}/${MEMBERS}/${PROFILE}/email`, data);
    return response.data;
  };
};

// 사용자 관심분야 변경
const patchUserInterest = (categoryIds: number[]) => {
  return async (): Promise<IChangeInterest> => {
    const data = { categoryIds: categoryIds };
    const response = await axios.patch(`${BASE_URL}/${MEMBERS}/${PROFILE}/interests`, data);
    return response.data;
  };
};

// 사용자 메일링 서비스 활성화/비활성화
const patchMailingService = async (): Promise<IChangeMailingStatus> => {
  const response = await axios.patch(`${BASE_URL}/${MEMBERS}/settings/mailing-status`);
  return response.data;
};

// 사용자 계정 탈퇴
const deleteUserData = async () => {
  const response = await axios.delete(`${BASE_URL}/${MEMBERS}/settings/delete-account`);
  return response.data;
};

export {
  login,
  refresh,
  logout,
  getMailingsData,
  addMailingsData,
  deleteMailingsData,
  getCalendarData,
  addCalendarData,
  deleteCalendarData,
  getCertData,
  getSearchCertData,
  getCertDetailData,
  getCertRecommendData,
  getCertCategoryData,
  getCertChildCategoryData,
  getUserData,
  patchUserNick,
  patchUserEmail,
  patchUserInterest,
  patchMailingService,
  deleteUserData,
};

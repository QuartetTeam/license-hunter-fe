import axios from 'axios';
import endpoints from './endpoints.ts';

const { BASE_URL, CALENDAR, MAILINGS, CERTIFICATIONS } = endpoints;

// 메일링 서비스 조회
const getMailingsData = async () => {
    const response = await axios.get(`${BASE_URL}/${MAILINGS}`);
    return response.data.data.content;
};

// 메일리 서비스 추가
const addMailingsData = (certificationId: number) => {
    return async () => {
        const response = await axios.post(`${BASE_URL}/${CERTIFICATIONS}/${certificationId}/${MAILINGS}`);
        return response.data;
    };
};

// 메일링 서비스 삭제
const deleteMailingsData = (mailingIds: number) => {
    return async () => {
        const params = {
            mailingIds: mailingIds
        };
        const response = await axios.delete(`${BASE_URL}/${MAILINGS}`, {
            params
        });
        return response.data;
    };
};

// 캘린더 조회
const getCalendarData = () => {
    return async () => {
        const response = await axios.get(`${BASE_URL}/${CALENDAR}`);
        return response.data.data;
    };
};

// 캘린더 추가
const addCalendarData = (certificationId: number) => {
    return async () => {
        const response = await axios.post(`${BASE_URL}/${CERTIFICATIONS}/${certificationId}/${CALENDAR}`);
        return response.data;
    };
};

// 캘린더 삭제
const deleteCalendarData = (certificationId: number) => {
    return async () => {
        const response = await axios.delete(`${BASE_URL}/${CERTIFICATIONS}/${certificationId}/${CALENDAR}`);
        return response.data;
    };
};

// 자격증 조회
const getCertData = (categoryId: number, page: number, pageSize: number) => {
    return async () => {
        const params = {
            categoryId: categoryId,
            page: page,
            pageSize: pageSize
        };
        const response = await axios.get(`${BASE_URL}/${CERTIFICATIONS}`, { params });
        return response.data;
    };
};

// 자격증 상세 조회
const getCertDetailData = (certificationId: number) => {
    return async () => {
        const response = await axios.get(`${BASE_URL}/${CERTIFICATIONS}/${certificationId}`);
        return response.data;
    };
};

// 자격증 추천
const getCertRecommendData = async () => {
    return async () => {
        const response = await axios.get(`${BASE_URL}/${CERTIFICATIONS}/recommendation`);
        return response.data;
    };
};

// 자격증 카테고리 조회
const getCertCategoryData = () => {
    return async () => {
        const response = await axios.get(`${BASE_URL}/${CERTIFICATIONS}/category`);
        return response.data;
    };
};

export {
    getMailingsData,
    addMailingsData,
    deleteMailingsData,
    getCalendarData,
    addCalendarData,
    deleteCalendarData,
    getCertData,
    getCertDetailData,
    getCertRecommendData,
    getCertCategoryData
};
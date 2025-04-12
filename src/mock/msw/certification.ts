import { http, HttpResponse } from 'msw';
import endpoints from '../../api/index.ts';
import {
    certDetailList,
    certList,
    certSearchList,
    recommendedList
} from '../data/certData.ts';

const { BASE_URL, CERTIFICATIONS } = endpoints;

const certHandlers = [

    // GET /api/v1/certifications
    http.get(`${BASE_URL}/${CERTIFICATIONS}?categoryId=1&page=0&pageSize=15`, () => {
        return HttpResponse.json(certList);
    }),

    // GET /api/v1/certifications
    http.get(`${BASE_URL}/${CERTIFICATIONS}/search?name=정보처리기사`, () => {
        return HttpResponse.json(certSearchList);
    }),

    // GET /api/v1/certifications/{certificationId}
    http.get(`${BASE_URL}/${CERTIFICATIONS}/1`, () => {
        return HttpResponse.json(certDetailList);
    }),

    // GET /api/v1/certifications/recommendation
    http.get(`${BASE_URL}/${CERTIFICATIONS}/recommendation`, () => {
        return HttpResponse.json(recommendedList);
    })
];

export default certHandlers;
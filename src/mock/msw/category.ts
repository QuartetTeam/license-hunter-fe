import { http, HttpResponse } from 'msw';
import endpoints from '../../api/index.ts';
import { categoryChildList, categoryParentList } from '../data/categoryData.ts';

const { BASE_URL, CERTIFICATIONS } = endpoints;

const categoryHandlers = [

    // GET /api/v1/certifications/category
    http.get(`${BASE_URL}/${CERTIFICATIONS}/category`, () => {
        return HttpResponse.json(categoryParentList);
    }),

    // GET /api/v1/certifications/category
    http.get(`${BASE_URL}/${CERTIFICATIONS}/category?patentId='1`, () => {
        return HttpResponse.json(categoryChildList);
    })
];

export default categoryHandlers;
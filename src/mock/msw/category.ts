import { http, HttpResponse } from 'msw';
import endpoints from '../../api/index.ts';
import { categoryChildList, categoryParentList } from '../data/categoryData.ts';

const { BASE_URL, CERTIFICATIONS } = endpoints;

const categoryHandlers = [
  // GET /api/v1/certifications/category
  // GET /api/v1/certifications/category?mainCategoryId=1
  http.get(`${BASE_URL}/${CERTIFICATIONS}/category`, ({ request }) => {
    const url = new URL(request.url);
    const mainCategoryId = url.searchParams.get('mainCategoryId');

    if (mainCategoryId) {
      return HttpResponse.json(categoryChildList); // 소분류
    }

    return HttpResponse.json(categoryParentList); // 대분류
  }),
];

export default categoryHandlers;

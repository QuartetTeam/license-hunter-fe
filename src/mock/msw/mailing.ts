import { http, HttpResponse } from 'msw';
import endpoints from '../../api/index.ts';
import { addMailing, mailingList } from '../data/mailingData';

const { BASE_URL, MAILINGS, CERTIFICATIONS } = endpoints;

const mailingHandlers = [
  // GET /api/v1/mailings
  http.get(`${BASE_URL}/${MAILINGS}?page=0&pageSize=4`, () => {
    return HttpResponse.json(mailingList);
  }),

  // POST /api/v1/certifications/{certificationId}/mailings
  http.post(`${BASE_URL}/${CERTIFICATIONS}/:certificationId/${MAILINGS}`, () => {
    return HttpResponse.json(addMailing);
  }),

  // DELETE /api/vi/mailings
  http.delete(`${BASE_URL}/${MAILINGS}?mailingIds=1`, () => {
    return HttpResponse.json({});
  }),
];

export default mailingHandlers;

import { http, HttpResponse } from 'msw';
import endpoints from '../../api/index.ts';
import calendarList from '../data/calendarData.ts';

const { BASE_URL, CALENDAR, CERTIFICATIONS } = endpoints;

const calendarHandlers = [

    // GET /api/v1/certifications/{certificationId}/calendars
    http.get(`${BASE_URL}/${CALENDAR}`, () => {
        return HttpResponse.json(calendarList);
    }),

    // POST /api/v1/certifications/{certificationId}/calendars
    http.post(`${BASE_URL}/${CERTIFICATIONS}/:certificationId/${CALENDAR}`, () => {
        return HttpResponse.json({
            'code': 201,
            'message': '리소스가 생성되었습니다.'
        });
    }),

    // DELETE /api/vi/calendars
    http.delete(`${BASE_URL}/${CERTIFICATIONS}/:certificationId/${CALENDAR}`, () => {
        return HttpResponse.json({});
    })
];

export default calendarHandlers;
import { http, HttpResponse } from 'msw';
import endpoints from '../../api/index.ts';
import calendarList from '../data/calendarData.ts';

const { BASE_URL, CALENDAR, CERTIFICATIONS } = endpoints;

const userHandlers = [

    // GET /api/v1/members/me/mailing-status
    http.get(`${BASE_URL}/${CALENDAR}`, () => {
        return HttpResponse.json(calendarList);
    }),

    // PATCH /api/v1/members/me/mailing-status
    http.patch(`${BASE_URL}/${CERTIFICATIONS}/:certificationId/${CALENDAR}`, () => {
        return HttpResponse.json({
            'code': 201,
            'message': '리소스가 생성되었습니다.'
        });
    })
];

export default userHandlers;
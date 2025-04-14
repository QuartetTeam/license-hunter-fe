import { http, HttpResponse } from 'msw';
import endpoints from '../../api';
import {
  changeEmail,
  changeInterest,
  changeMailingStatus,
  changeNick,
  userList,
} from '../data/userData.ts';

const { BASE_URL, MEMBERS, PROFILE } = endpoints;

const userHandlers = [
  // GET /api/v1/members/me
  http.get(`${BASE_URL}/${MEMBERS}`, () => {
    return HttpResponse.json(userList);
  }),

  // PATCH /api/v1/members/me/profile/nickname
  http.patch(`${BASE_URL}/${MEMBERS}/${PROFILE}/nickname`, () => {
    return HttpResponse.json(changeNick);
  }),

  // PATCH /api/v1/members/me/profile/email
  http.patch(`${BASE_URL}/${MEMBERS}/${PROFILE}/email`, () => {
    return HttpResponse.json(changeEmail);
  }),

  // PATCH /api/v1/members/me/profile/interests
  http.patch(`${BASE_URL}/${MEMBERS}/${PROFILE}/interests`, () => {
    return HttpResponse.json(changeInterest);
  }),

  // PATCH /api/v1/members/me/settings/mailing-status
  http.patch(`${BASE_URL}/${MEMBERS}/settings/mailing-status`, () => {
    return HttpResponse.json(changeMailingStatus);
  }),

  // DELETE /api/v1/members/me/settings/delete-account
  http.delete(`${BASE_URL}/${MEMBERS}/settings/delete-account`, () => {
    return HttpResponse.json({});
  }),
];

export default userHandlers;

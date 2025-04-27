import { useLogin, useLogout, useRefresh } from './queries/useAuthQuery.ts';

import { useAddCalendar, useDeleteCalendar, useGetCalendar } from './queries/useCalendarQuery.ts';
import { useGetCert, useGetCertDetail, useGetCertRecommend } from './queries/useCertQuery.ts';
import { useGetCategory, useGetChildCategory } from './queries/useCategoryQuery.ts';
import { useAddMailing, useDeleteMailing, useGetMailing } from './queries/useMailingQuery.ts';
import {
  useDeleteUser,
  useGetUser,
  usePatchUserEmail,
  usePatchUserInterest,
  usePatchUserNick,
} from './queries/useUserQuery.ts';
import endpoints from './API/endpoints.ts';

export { useLogin, useRefresh, useLogout };
export { useGetCalendar, useAddCalendar, useDeleteCalendar };
export { useGetCert, useGetCertDetail, useGetCertRecommend };
export { useGetCategory, useGetChildCategory };
export { useGetMailing, useAddMailing, useDeleteMailing };
export { useGetUser, useDeleteUser, usePatchUserNick, usePatchUserEmail, usePatchUserInterest };
export default endpoints;

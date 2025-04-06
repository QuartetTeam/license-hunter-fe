import {
    useLogin,
    useLogout,
    useMoveToAuth,
    useRefresh
} from './queries/useAuthQuery.ts';

import {
    useAddCalendar,
    useDeleteCalendar,
    useGetCalendar
} from './queries/useCalendarQuery.ts';
import {
    useGetCategory,
    useGetCert,
    useGetCertDetail,
    useGetCertRecommend
} from './queries/useCertQuery.ts';
import {
    useAddMailings,
    useDeleteMailings,
    useGetMailings
} from './queries/useMailingsQuery.ts';
import endpoints from './common/endpoints.ts';

export {
    useMoveToAuth,
    useLogin,
    useRefresh,
    useLogout
};
export { useGetCalendar, useAddCalendar, useDeleteCalendar };
export {
    useGetCert,
    useGetCertRecommend,
    useGetCategory,
    useGetCertDetail
};
export {
    useGetMailings, useAddMailings, useDeleteMailings
};
export default endpoints;
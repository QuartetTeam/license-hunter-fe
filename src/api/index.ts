import {
    useDeleteCalendarMutation,
    useGetCalendarQuery,
    usePostCalendarMutation
} from './queries/useCalendarQuery.ts';
import {
    useGetCategoryQuery,
    useGetCertDetailQuery,
    useGetCertQuery,
    useGetCertRecommendQuery
} from './queries/useCertQuery.ts';
import {
    useDeleteMailingsMutation,
    useGetMailingsQuery,
    usePostMailingsMutation
} from './queries/useMailingsQuery.ts';

export { useGetCalendarQuery, usePostCalendarMutation, useDeleteCalendarMutation };
export {
    useGetCertQuery,
    useGetCertRecommendQuery,
    useGetCategoryQuery,
    useGetCertDetailQuery
};
export { useGetMailingsQuery, usePostMailingsMutation, useDeleteMailingsMutation };
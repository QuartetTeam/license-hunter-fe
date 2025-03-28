import {
    useDeleteCalendarMutation,
    useGetCalendarQuery,
    usePostCalendarMutation
} from './queries/useCalendarQuery.ts';
import {
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
export { useGetCertQuery, useGetCertRecommendQuery, useGetCertDetailQuery };
export { useGetMailingsQuery, usePostMailingsMutation, useDeleteMailingsMutation };
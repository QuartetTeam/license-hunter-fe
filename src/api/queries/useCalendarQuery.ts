import { useMutation, useQuery } from '@tanstack/react-query';
import { calendarQueryKey } from '../common/queryKeys.ts';
import { addCalendarData, deleteCalendarData, getCalendarData } from '../common/API.ts';

const useGetCalendarQuery = () => {
    return useQuery({
        queryKey: [calendarQueryKey.get],
        queryFn: getCalendarData
    });
};

const usePostCalendarMutation = (certificationId: number) => {
    return useMutation({
        mutationKey: [calendarQueryKey.post],
        mutationFn: addCalendarData(certificationId)
    });
};

const useDeleteCalendarMutation = (certificationId: number) => {
    return useMutation({
        mutationKey: [calendarQueryKey.delete],
        mutationFn: deleteCalendarData(certificationId)
    });
};

export { useGetCalendarQuery, usePostCalendarMutation, useDeleteCalendarMutation };
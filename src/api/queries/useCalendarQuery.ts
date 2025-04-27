import { useMutation, useQuery, UseMutationOptions } from '@tanstack/react-query';
import { calendarQueryKey } from '../API/queryKeys.ts';
import { addCalendarData, deleteCalendarData, getCalendarData } from '../API/API.ts';

const useGetCalendar = () => {
  return useQuery({
    queryKey: [calendarQueryKey.get],
    queryFn: getCalendarData,
  });
};

const useAddCalendar = (certificationId: number, option: UseMutationOptions) => {
  return useMutation({
    mutationKey: [calendarQueryKey.post],
    mutationFn: addCalendarData(certificationId),
    ...option,
  });
};

const useDeleteCalendar = (certificationId: number, option: UseMutationOptions) => {
  return useMutation({
    mutationKey: [calendarQueryKey.delete],
    mutationFn: deleteCalendarData(certificationId),
    ...option,
  });
};

export { useGetCalendar, useAddCalendar, useDeleteCalendar };

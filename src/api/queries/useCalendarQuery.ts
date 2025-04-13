import { useMutation, useQuery } from '@tanstack/react-query';
import { calendarQueryKey } from '../API/queryKeys.ts';
import { addCalendarData, deleteCalendarData, getCalendarData } from '../API/API.ts';

const useGetCalendar = () => {
  return useQuery({
    queryKey: [calendarQueryKey.get],
    queryFn: getCalendarData,
  });
};

const useAddCalendar = (certificationId: number) => {
  return useMutation({
    mutationKey: [calendarQueryKey.post],
    mutationFn: addCalendarData(certificationId),
  });
};

const useDeleteCalendar = (certificationId: number) => {
  return useMutation({
    mutationKey: [calendarQueryKey.delete],
    mutationFn: deleteCalendarData(certificationId),
  });
};

export { useGetCalendar, useAddCalendar, useDeleteCalendar };

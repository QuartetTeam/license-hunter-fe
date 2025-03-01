import { useQuery } from '@tanstack/react-query';
import calendarQueryKey from '../../queryKeys.ts';
import getCalendarData from '../api.ts';

const useGetCalendarQuery = () => {
    return useQuery({
        queryKey: [calendarQueryKey.get],
        queryFn: getCalendarData
    });
};

export default useGetCalendarQuery;
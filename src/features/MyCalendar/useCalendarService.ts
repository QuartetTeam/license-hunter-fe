import { useDeleteCalendarMutation, useGetCalendarQuery, usePostCalendarMutation } from '../../api';

const useCalendarService = () => {
    const { data: getCalendarData } = useGetCalendarQuery();

    const addCalendarMutation = usePostCalendarMutation(1);
    const addCalendarService = () => {
        addCalendarMutation.mutate();
    };

    const deleteCalendarMutation = useDeleteCalendarMutation(1);
    const deleteCalendarService = () => {
        deleteCalendarMutation.mutate();
    };

    return {
        getCalendarData,
        addCalendarService,
        deleteCalendarService
    };
};

export default useCalendarService;
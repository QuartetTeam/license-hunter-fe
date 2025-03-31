import { useAddCalendar, useDeleteCalendar, useGetCalendar } from '../../api';

const useCalendarService = () => {
    const { data: getCalendarData } = useGetCalendar();

    const addCalendar = useAddCalendar(1);
    const addCalendarService = () => {
        addCalendar.mutate();
    };

    const deleteCalendar = useDeleteCalendar(1);
    const deleteCalendarService = () => {
        deleteCalendar.mutate();
    };

    return {
        getCalendarData,
        addCalendarService,
        deleteCalendarService
    };
};

export default useCalendarService;
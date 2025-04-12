import { useAddCalendar, useDeleteCalendar, useGetCalendar } from '../../api';
import { ICalendarData, ISchedules } from '../../common/types/calendarTypes.ts';
import { IformatCalendar, IformatCalendarArray } from './calendarTypes.ts';

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

    // 날짜 데이터 가공
    // "2025-03-08T00:00:00Z" -> "2025-03-08"
    const formatDate = (date: string[]) => {
        return date.map((item) => item.split('T')[0]);
    };

    // 마지막 날짜 데이터 가공 (하루 더하기)
    const formatEndDate = (date: string): string => {
        const endDate = new Date(date);
        endDate.setDate(endDate.getDate() + 1);
        return endDate.toISOString().split('T')[0];
    };

    // FullCalendar events 데이터 가공
    type ICalendar = IformatCalendar | IformatCalendarArray;
    const formatCalendarData = (calendarData: ICalendarData[]): ICalendar[] => {
        const calendarEvents: ICalendar[] = [];
        for (let i = 0; i < calendarData?.length; i++) {
            const name: string = calendarData[i].certificationName;
            const schedules: ISchedules [] = calendarData[i].schedules;
            for (let j = 0; j < schedules.length; j++) {
                const date: string[] = calendarData[i].schedules[j].date;
                if (date.length === 1) {
                    calendarEvents.push({
                        title: `${name} - ${schedules[j].scheduleType} ${schedules[j].examType} ${schedules[j].examRound}`,
                        date: formatDate(date)[0]
                    });
                } else {
                    calendarEvents.push({
                        title: `${name} - ${schedules[j].scheduleType} ${schedules[j].examType} ${schedules[j].examRound}`,
                        start: formatDate(date)[0],
                        end: formatEndDate(formatDate(date)[1])
                    });
                }
            }
        }
        return calendarEvents;
    };

    return {
        getCalendarData,
        addCalendarService,
        deleteCalendarService,
        formatCalendarData
    };
};

export default useCalendarService;
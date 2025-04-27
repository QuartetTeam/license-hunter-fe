import { useAddCalendar, useDeleteCalendar, useGetCalendar } from '../../api';
import { ICalendarData, ISchedules } from '@type/calendar.ts';
import { IformatCalendar, IformatCalendarArray } from './calendarTypes.ts';

const useCalenderList = () => {
  const { data: calendar } = useGetCalendar();
  return calendar;
};

const useAddUserCalendar = (certificationId: number) => {
  const addCalendar = useAddCalendar(certificationId);
  return addCalendar;
};

const useDeleteUserCalendar = (certificationId: number) => {
  const deleteCalendar = useDeleteCalendar(certificationId);
  return deleteCalendar;
};

const useCalendarService = () => {
  // 날짜 데이터 가공
  // ["2025-03-08T00:00:00Z"] -> "2025-03-08"
  // ["2025-03-08T00:00:00Z", "2025-03-18T00:00:00Z"] -> "2025-03-08 ~ 2025-03-18"
  const formatDate = (date: string[]) => {
    if (date.length === 1) {
      return date[0].split('T')[0];
    } else {
      const dateArray = date.map((item) => item.split('T')[0]);
      return dateArray.join(' ~ ');
    }
  };
  // 날짜 데이터 가공
  // "2025-03-08T00:00:00Z" -> "2025-03-08"
  const formatFirstDate = (date: string[]) => {
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
      const name: string = calendarData[i].name;
      const schedules: ISchedules[] = calendarData[i].schedules;
      for (let j = 0; j < schedules.length; j++) {
        const date: string[] = calendarData[i].schedules[j].date;
        if (date.length === 1) {
          calendarEvents.push({
            title: `${name} - ${schedules[j].scheduleType} ${schedules[j].examType} ${schedules[j].examRound}`,
            date: formatFirstDate(date)[0],
          });
        } else {
          calendarEvents.push({
            title: `${name} - ${schedules[j].scheduleType} ${schedules[j].examType} ${schedules[j].examRound}`,
            start: formatFirstDate(date)[0],
            end: formatEndDate(formatFirstDate(date)[1]),
          });
        }
      }
    }
    return calendarEvents;
  };

  return { formatDate, formatCalendarData };
};

export { useCalenderList, useAddUserCalendar, useDeleteUserCalendar, useCalendarService };

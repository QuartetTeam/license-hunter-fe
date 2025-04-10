import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import useCalendarService from '../../../features/MyCalendar/useCalendarService.ts';
import { ICalendarData } from '../../../common/types/calendarTypes.ts';
import '@styles/pages/MyCalender/CalenderView.scss';

const CalendarView = () => {
    const { getCalendarData, formatCalendarData } = useCalendarService();
    const calendarData: ICalendarData[] = getCalendarData?.data;

    return (
        <div className="my-calender">
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                events={
                    formatCalendarData(calendarData)
                }
            />
        </div>
    );
};

export default CalendarView;
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import useCalendarService from '../useCalendarService.ts';
import '@styles/pages/MyCalender/CalenderView.scss';

const CalendarView = () => {
    const { getCalendarData, addCalendarService, deleteCalendarService } = useCalendarService();
    console.log('getCalendar: ', getCalendarData);
    console.log('addCalendarService: ', addCalendarService);
    console.log('deleteCalendarService: ', deleteCalendarService);
    // addCalendarService();
    // deleteCalendarService();

    // const schedulesData = getCalendarData.map((item, _) =>
    //     item.map((schedules) => ({
    //         title: schedules.scheduleType,
    //         date: schedules.date
    //     }))
    // );
    //
    // console.log('schedulesData: ', schedulesData);

    return (
        <div className="my-calender">
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                //events={
                //schedulesData
                // [
                //     { title: '자격증1 시험일', start: '2025-02-15', end: '2025-02-21' },
                //     { title: '자격증2 접수일', start: '2025-02-15', end: '2025-02-21' }
                //     { title: '', date: ''}
                // ]
                //}
            />
        </div>
    );
};

export default CalendarView;
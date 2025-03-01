import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
// import useGetCalenderQuery from '@api/calender/useCalenderQueries.ts';
import '@styles/pages/MyCalender/CalenderView.scss';
import useGetCalenderQuery from '../../../API/queries/calender/useCalenderQueries.ts';

const CalendarView = () => {
    const { data: getCalenderData } = useGetCalenderQuery();
    console.log('getCalenderData: ', getCalenderData);


    return (
        <div className="my-calender">
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                events={[
                    { title: '자격증1 시험일', date: '2025-02-15' },
                    { title: '자격증2 접수일', start: '2025-02-15', end: '2025-02-21' },
                    {
                        title: '자격증3 접수일',
                        start: '2025-02-20',
                        end: '2025-02-22'
                    }
                ]}
            />
        </div>
    );
};

export default CalendarView;
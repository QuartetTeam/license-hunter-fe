import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import '@styles/pages/MyCalender/CalenderView.scss';

const CalenderView = () => {
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

export default CalenderView;
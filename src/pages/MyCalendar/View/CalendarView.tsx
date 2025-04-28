import { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import NotiView from './NotiView.tsx';
import { useCalendarList, useCalendarService } from '@feature/MyCalendar/useCalendarService.ts';
import { ICalendarData } from '@type/calendar.ts';
import '../style/CalendarView.scss';

const CalendarView = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleSetIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const calendar = useCalendarList();
  const calendarData: ICalendarData[] | undefined = calendar?.data;
  const { formatCalendarData } = useCalendarService();

  useEffect(() => {
    const button = document.querySelector('.fc-bellButton-button');
    if (button && !button.querySelector('svg')) {
      button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="24" height="24">
    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
  </svg>`;
    }
  }, []);

  return (
    <>
      <div className="my-calendar">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={formatCalendarData(calendarData ?? [])}
          headerToolbar={{
            start: 'title',
            center: '',
            end: 'bellButton prev,next today',
          }}
          customButtons={{
            bellButton: {
              text: '',
              click: handleSetIsOpen,
            },
          }}
        />
        {isOpen && <NotiView handleSetIsOpen={handleSetIsOpen} />}
      </div>
    </>
  );
};

export default CalendarView;

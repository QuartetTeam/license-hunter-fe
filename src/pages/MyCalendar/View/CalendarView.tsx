import { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import NotiView from './NotiView.tsx';
import useCalendarService from '@feature/MyCalendar/useCalendarService.ts';
import { ICalendarData } from '@type/calendar.ts';
import '../style/CalenderView.scss';

const CalendarView = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleSetIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const { getCalendarData, formatCalendarData } = useCalendarService();
  const calendarData: ICalendarData[] | undefined = getCalendarData?.data;

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
            end: 'prev,next bellButton today',
          }}
          customButtons={{
            bellButton: {
              text: '캘린더 목록',
              click: () => {
                setIsOpen(true);
              },
            },
          }}
        />
        {isOpen && <NotiView handleSetIsOpen={handleSetIsOpen} />}
      </div>
    </>
  );
};

export default CalendarView;

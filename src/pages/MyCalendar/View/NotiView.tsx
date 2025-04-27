import { useState } from 'react';
import ArrowLeft from '@icon/icon-arrow-left.svg?react';
import TrashIcon from '@icon/icon-trash.svg?react';
import {
  useCalenderList,
  useDeleteUserCalendar,
  useCalendarService,
} from '@feature/MyCalendar/useCalendarService';
import '../style/NotiView.scss';

const NotiView = ({ handleSetIsOpen }: { handleSetIsOpen: () => void }) => {
  const [certId, setCertId] = useState(0);
  const calendar = useCalenderList();
  const calendarData = calendar?.data;
  const { mutate: deleteUserCalendar } = useDeleteUserCalendar(certId);
  const { formatDate } = useCalendarService();

  const handleDeleteCalendar = (certificationid: number) => {
    setCertId(certificationid);
    deleteUserCalendar();
  };
  return (
    <>
      <div className="notif-container">
        <div className="notif-header">
          <ArrowLeft className="back-btn" onClick={handleSetIsOpen} />
        </div>
        {calendarData?.map((item, index) => (
          <div key={index} className="notif-certification">
            <div className="notif-name">
              {item.name}
              <TrashIcon onClick={() => handleDeleteCalendar(item.certificationId)} />
            </div>
            <div className="notif-schedules">
              {item.schedules.map((scheduleItem, scheduleIndex) => (
                <div key={scheduleIndex} className="notif-schedules-box">
                  <div className="notif-schedules-box__title">{scheduleItem.examRound}</div>
                  <div className="notif-schedules-box__item">
                    {scheduleItem.scheduleType} ({scheduleItem.examType}):{' '}
                    {formatDate(scheduleItem.date)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default NotiView;

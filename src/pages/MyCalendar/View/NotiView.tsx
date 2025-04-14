import ArrowLeft from '@icon/icon-arrow-left.svg?react';
import '../style/NotiView.scss';

const NotiView = ({ handleSetIsOpen }: { handleSetIsOpen: () => void }) => {
  return (
    <>
      <div className="notif-container">
        <div className="notif-header">
          <ArrowLeft className="back-btn" onClick={handleSetIsOpen} />
          <div className="title">
            <span>알림</span>
          </div>
        </div>
        <div className="notif-content">
          <p>정보처리기사</p>
        </div>
      </div>
    </>
  );
};

export default NotiView;

import Modal from 'react-modal';
import ConfirmButton from './ConfirmButton.tsx';
import CancelButton from './CancelButton.tsx';
import CancelIcon from '@icon/icon-button-cancel.svg?react';
import IAlertProps from './types/alert.ts';
import './style/alert.scss';

const Alert = ({
  alertVisible,
  onVisibleAlertClick,
  alertTitle,
  alertContent,
  alertConfirmMessage,
  alertCancelMessage,
  clickEvent,
}: IAlertProps) => {
  return (
    <Modal
      isOpen={alertVisible}
      onRequestClose={onVisibleAlertClick}
      contentLabel="알림창"
      className="alert-overlay"
    >
      <div className="alert-container">
        <div className="alert-header">
          <CancelIcon onClick={onVisibleAlertClick} />
        </div>
        <div className="alert-body">
          <div className="alert-body__title">{alertTitle}</div>
          <div className="alert-body__content">{alertContent}</div>
        </div>
        <div className="alert-footer">
          <CancelButton name={alertCancelMessage} clickEvent={onVisibleAlertClick} />
          <ConfirmButton
            name={alertConfirmMessage}
            clickEvent={() => {
              clickEvent();
              onVisibleAlertClick();
            }}
          />
        </div>
      </div>
    </Modal>
  );
};

export default Alert;

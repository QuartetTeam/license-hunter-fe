import ConfirmButton from '../ConfirmButton/ConfirmButton.tsx';
import CancelButton from '../CancelButton/CancelButton.tsx';
import CancelIcon from '@icon/icon-button-cancel.svg?react';
import '@styles/pages/components/alert.scss';

interface IAlertProps {
  alertVisible: boolean;
  onVisibleAlertClick: () => void;
  alertTitle: string;
  alertContent: string;
  alertConfirmMessage: string;
  alertCancelMessage: string;
}

const Alert = ({
  onVisibleAlertClick,
  alertTitle,
  alertContent,
  alertConfirmMessage,
  alertCancelMessage,
}: IAlertProps) => {
  return (
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
        <ConfirmButton name={alertConfirmMessage} clickEvent={onVisibleAlertClick} />
      </div>
    </div>
  );
};

export default Alert;

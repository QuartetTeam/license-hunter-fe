import Modal from 'react-modal';
import ConfirmButton from './ConfirmButton.tsx';
import CancelButton from './CancelButton.tsx';
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
                   alertVisible,
                   onVisibleAlertClick,
                   alertTitle,
                   alertContent,
                   alertConfirmMessage,
                   alertCancelMessage
               }: IAlertProps) => {
    return (
        <Modal
            isOpen={alertVisible}
            onRequestClose={onVisibleAlertClick}
            contentLabel="알림창"
            className="modal-overlay"
        >
            <div className="modal-container">
                <div className="modal-header">
                    <CancelIcon onClick={onVisibleAlertClick}/>
                </div>
                <div className="modal-body">
                    <div className="modal-body__title">{alertTitle}</div>
                    <div className="modal-body__content">{alertContent}</div>
                </div>
                <div className="modal-footer">
                    <CancelButton name={alertCancelMessage} clickEvent={onVisibleAlertClick}/>
                    <ConfirmButton name={alertConfirmMessage} clickEvent={onVisibleAlertClick}/>
                </div>
            </div>
        </Modal>
    );
};

export default Alert;
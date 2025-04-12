interface IAlertProps {
    alertVisible: boolean;
    onVisibleAlertClick: () => void;
    alertTitle: string;
    alertContent: string;
    alertConfirmMessage: string;
    alertCancelMessage: string;
    event: () => void;
}

export default IAlertProps;
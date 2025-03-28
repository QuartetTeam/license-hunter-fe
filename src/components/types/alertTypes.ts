interface IAlertProps {
    alertVisible: boolean;
    onVisibleAlertClick: () => void;
    alertTitle: string;
    alertContent: string;
    alertConfirmMessage: string;
    alertCancelMessage: string;
    addMailingsService?: () => void;
}

export default IAlertProps;
interface IAlertProps {
  alertVisible: boolean;
  onVisibleAlertClick: () => void;
  alertTitle: string;
  alertContent: string;
  alertConfirmMessage: string;
  alertCancelMessage: string;
  clickEvent: () => void;
}

export default IAlertProps;

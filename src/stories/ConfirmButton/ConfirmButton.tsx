import './confirmButton.scss';

interface IButtonProps {
  /** Button Name */
  name: string;
  /** click event function */
  clickEvent: () => void;
}

/** Confirm Button Component from alert */
const ConfirmButton = ({ name, clickEvent }: IButtonProps) => {
  return (
    <button className="confirmButton" onClick={clickEvent}>
      {name}
    </button>
  );
};

export default ConfirmButton;

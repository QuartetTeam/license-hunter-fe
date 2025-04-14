import '@styles/pages/components/cancelButton.scss';

interface IButtonProps {
  /** Button Name */
  name: string;
  /** click event function */
  clickEvent: () => void;
}

/** Cancel Button Component from alert */
const CancelButton = ({ name, clickEvent }: IButtonProps) => {
  return (
    <button className="cancelButton" onClick={clickEvent}>
      {name}
    </button>
  );
};

export default CancelButton;

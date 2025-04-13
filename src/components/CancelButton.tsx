import '@styles/pages/components/cancelButton.scss';

interface IButtonProps {
  name: string;
  clickEvent: () => void;
}

const CancelButton = ({ name, clickEvent }: IButtonProps) => {
  return (
    <button className="cancelButton" onClick={clickEvent}>
      {name}
    </button>
  );
};

export default CancelButton;

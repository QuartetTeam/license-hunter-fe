import './style/confirmButton.scss';

interface IButtonProps {
  name: string;
  clickEvent: () => void;
}

const ConfirmButton = ({ name, clickEvent }: IButtonProps) => {
  return (
    <button className="confirmButton" onClick={clickEvent}>
      {name}
    </button>
  );
};

export default ConfirmButton;

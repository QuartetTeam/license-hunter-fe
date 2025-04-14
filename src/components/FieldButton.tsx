import IconList from './icons/fieldIconsList.ts';
import { Field } from './types/Field.ts';
import './style/fieldButton.scss';

interface IFavoriteFieldButtonProps {
  fieldName: Field;
}

const FieldButton = ({ fieldName }: IFavoriteFieldButtonProps) => {
  const FieldIcon = IconList[fieldName];

  return (
    <button className="favorite-field-button">
      <FieldIcon />
      {fieldName}
    </button>
  );
};

export default FieldButton;

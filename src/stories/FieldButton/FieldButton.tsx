import IconList from '@component/icons/fieldIconsList.ts';
import { Field } from '@component/types/Field.ts';
import '@component/favoriteFieldButton.scss';

interface IFavoriteFieldButtonProps {
  /** Insert Field Name you want */
  fieldName: Field;
}

/** FieldButton Component for Main Page, MyPage, CheckFavoriteField Modal.
 * Background-color, border-radius will be change where we use this button.*/
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

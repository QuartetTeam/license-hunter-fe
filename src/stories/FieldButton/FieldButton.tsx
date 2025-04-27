import { fieldIconsMap } from '@component/icons/fieldIconsList.ts';
import { fieldNameToEnumMap } from '@component/types/fieldNameToEnumMap.ts';
import './fieldButton.scss';

/** FieldButton Component for Main Page, MyPage, CheckFavoriteField Modal.
 * Background-color, border-radius will be change where we use this button.*/
const FieldButton = ({
  fieldName,
  clickEvent,
  isChecked,
}: {
  fieldName: string;
  clickEvent?: () => void;
  isChecked?: boolean;
}) => {
  const fieldEnum = fieldNameToEnumMap[fieldName];
  const FieldIcon = fieldIconsMap[fieldEnum];

  return (
    <button className={`favorite-field-button ${isChecked ? 'checked' : ''}`} onClick={clickEvent}>
      {FieldIcon && <FieldIcon />}
      {fieldName}
    </button>
  );
};

export default FieldButton;

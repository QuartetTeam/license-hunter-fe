import { fieldIconsMap } from './icons/fieldIconsList.ts';
import { fieldNameToEnumMap } from './types/fieldNameToEnumMap.ts';
import './style/fieldButton.scss';

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

  console.log(isChecked);

  return (
    <button className={`favorite-field-button ${isChecked ? 'checked' : ''}`} onClick={clickEvent}>
      {FieldIcon && <FieldIcon />}
      {fieldName}
    </button>
  );
};

export default FieldButton;

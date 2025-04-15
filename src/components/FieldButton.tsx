import { fieldIconsMap } from './icons/fieldIconsList.ts';
import { fieldNameToEnumMap } from './types/fieldNameToEnumMap.ts';
import './style/fieldButton.scss';

const FieldButton = ({ fieldName }: { fieldName: string }) => {
  const fieldEnum = fieldNameToEnumMap[fieldName];
  const FieldIcon = fieldIconsMap[fieldEnum];

  return (
    <button className="favorite-field-button">
      {FieldIcon && <FieldIcon />}
      {fieldName}
    </button>
  );
};

export default FieldButton;

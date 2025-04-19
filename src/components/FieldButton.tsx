import { useCertService } from '@feature/Certification/useCertService.ts';
import { fieldIconsMap } from './icons/fieldIconsList.ts';
import { fieldNameToEnumMap } from './types/fieldNameToEnumMap.ts';
import './style/fieldButton.scss';

const FieldButton = ({
  fieldName,
  id,
  name,
}: {
  fieldName: string;
  id?: string;
  name?: string;
}) => {
  const { moveToCertById } = useCertService();
  const fieldEnum = fieldNameToEnumMap[fieldName];
  const FieldIcon = fieldIconsMap[fieldEnum];

  return (
    <button
      className="favorite-field-button"
      onClick={() => {
        if (id && name) moveToCertById(id, name, undefined);
      }}
    >
      {FieldIcon && <FieldIcon />}
      {fieldName}
    </button>
  );
};

export default FieldButton;

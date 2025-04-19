import { useCertService } from '@feature/Certification/useCertService.ts';
import { fieldIconsMap } from '@component/icons/fieldIconsList.ts';
import { fieldNameToEnumMap } from '@component/types/fieldNameToEnumMap.ts';
import '@component/favoriteFieldButton.scss';

/** FieldButton Component for Main Page, MyPage, CheckFavoriteField Modal.
 * Background-color, border-radius will be change where we use this button.*/
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

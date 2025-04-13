import IconList from '../../components/icons/iconList.ts';
import '@styles/pages/components/favoriteFieldButton.scss';

interface IFavoriteFieldButtonProps {
  /** Insert Field Name you want */
  fieldName: string;
}

/** FavoriteFieldButton Component for Main Page, MyPage, CheckFavoriteField Modal.
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

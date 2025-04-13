import IconList from './icons/iconList.ts';
import '@styles/pages/components/favoriteFieldButton.scss';

interface IFavoriteFieldButtonProps {
  fieldName: string;
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

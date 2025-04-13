import IconList from './icons/fieldIconsList.ts';
import './style/favoriteFieldButton.scss';

interface IFavoriteFieldButtonProps {
  fieldName: string;
}

const FavoriteFieldButton = ({ fieldName }: IFavoriteFieldButtonProps) => {
  const FieldIcon = IconList[fieldName];

  return (
    <button className="favorite-field-button">
      <FieldIcon />
      {fieldName}
    </button>
  );
};

export default FavoriteFieldButton;

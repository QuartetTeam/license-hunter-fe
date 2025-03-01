import '@styles/pages/components/favoriteFieldButton.scss';
import IconList from './icons/iconList.ts';

interface IFavoriteFieldButtonProps {
    fieldName: string;
}

const FavoriteFieldButton = ({ fieldName }: IFavoriteFieldButtonProps) => {
    const FieldIcon = IconList[fieldName];

    return (
        <button className="favorite-field-button">
            <FieldIcon/>
            {fieldName}
        </button>
    );
};

export default FavoriteFieldButton;
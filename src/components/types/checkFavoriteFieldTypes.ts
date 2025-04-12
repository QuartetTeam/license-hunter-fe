interface ICheckFavoriteFieldProps {
    favoriteFieldVisible: boolean;
    onVisibleFavoriteFieldClick: () => void;
    alertConfirmMessage: string;
    alertCancelMessage: string;
    events: () => void;
}

export default ICheckFavoriteFieldProps;
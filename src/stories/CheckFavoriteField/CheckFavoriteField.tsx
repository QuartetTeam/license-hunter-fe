import FieldButton from '../FieldButton/FieldButton.tsx';
import ConfirmButton from '../ConfirmButton/ConfirmButton.tsx';
import CancelButton from '../CancelButton/CancelButton';
import CancelIcon from '@icon/icon-button-cancel.svg?react';
import '@styles/pages/components/checkFavoriteField.scss';

interface ICheckFavoriteFieldProps {
  favoriteFieldVisible: boolean;
  onVisibleFavoriteFieldClick: () => void;
  alertConfirmMessage: string;
  alertCancelMessage: string;
}

const CheckFavoriteField = ({
  onVisibleFavoriteFieldClick,
  alertConfirmMessage,
  alertCancelMessage,
}: ICheckFavoriteFieldProps) => {
  return (
    <div className="favorite-field-container">
      <div className="favorite-field-header">
        <CancelIcon onClick={onVisibleFavoriteFieldClick} />
      </div>
      <div className="favorite-field-body">
        <div className="favorite-field-body__group">
          <FieldButton fieldName="경영·회계·사무" />
          <FieldButton fieldName="전기·전자" />
        </div>
        <div className="favorite-field-body__group">
          <FieldButton fieldName="금융·보험" />
          <FieldButton fieldName="법률·경찰·소방·교도·국방" />
        </div>
        <div className="favorite-field-body__group">
          <FieldButton fieldName="보건·의료" />
          <FieldButton fieldName="사회복지·종교" />
        </div>
        <div className="favorite-field-body__group">
          <FieldButton fieldName="문화·예술·디자인·방송" />
          <FieldButton fieldName="화학·바이오" />
        </div>
        <div className="favorite-field-body__group">
          <FieldButton fieldName="영업판매" />
          <FieldButton fieldName="건설" />
          <FieldButton fieldName="기계" />
        </div>
      </div>
      <div className="favorite-field-footer">
        <CancelButton name={alertCancelMessage} clickEvent={onVisibleFavoriteFieldClick} />
        <ConfirmButton name={alertConfirmMessage} clickEvent={onVisibleFavoriteFieldClick} />
      </div>
    </div>
  );
};

export default CheckFavoriteField;

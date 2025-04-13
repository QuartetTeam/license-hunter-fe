import Modal from 'react-modal';
import FavoriteFieldButton from './FavoriteFieldButton.tsx';
import CancelButton from './CancelButton.tsx';
import ConfirmButton from './ConfirmButton.tsx';
import CancelIcon from '@icon/icon-button-cancel.svg?react';
import ICheckFavoriteFieldProps from './types/checkFavoriteField.ts';
import './style/checkFavoriteField.scss';

const CheckFavoriteField = ({
  favoriteFieldVisible,
  onVisibleFavoriteFieldClick,
  alertConfirmMessage,
  alertCancelMessage,
  events,
}: ICheckFavoriteFieldProps) => {
  return (
    <Modal
      isOpen={favoriteFieldVisible}
      onRequestClose={onVisibleFavoriteFieldClick}
      contentLabel="관심분야 선택 알림창"
      className="favorite-field-overlay"
    >
      <div className="favorite-field-container">
        <div className="favorite-field-header">
          <CancelIcon onClick={onVisibleFavoriteFieldClick} />
        </div>
        <div className="favorite-field-body">
          <div className="favorite-field-body__group">
            <FavoriteFieldButton fieldName="경영·회계·사무" />
            <FavoriteFieldButton fieldName="전기·전자" />
          </div>
          <div className="favorite-field-body__group">
            <FavoriteFieldButton fieldName="금융·보험" />
            <FavoriteFieldButton fieldName="법률·경찰·소방·교도·국방" />
          </div>
          <div className="favorite-field-body__group">
            <FavoriteFieldButton fieldName="보건·의료" />
            <FavoriteFieldButton fieldName="사회복지·종교" />
          </div>
          <div className="favorite-field-body__group">
            <FavoriteFieldButton fieldName="문화·예술·디자인·방송" />
            <FavoriteFieldButton fieldName="화학·바이오" />
          </div>
          <div className="favorite-field-body__group">
            <FavoriteFieldButton fieldName="영업판매" />
            <FavoriteFieldButton fieldName="건설" />
            <FavoriteFieldButton fieldName="기계" />
          </div>
        </div>
        <div className="favorite-field-footer">
          <CancelButton name={alertCancelMessage} clickEvent={onVisibleFavoriteFieldClick} />
          <ConfirmButton
            name={alertConfirmMessage}
            clickEvent={() => {
              onVisibleFavoriteFieldClick();
              events();
            }}
          />
        </div>
      </div>
    </Modal>
  );
};

export default CheckFavoriteField;

import Modal from 'react-modal';
import FieldButton from './FieldButton.tsx';
import CancelButton from './CancelButton.tsx';
import ConfirmButton from './ConfirmButton.tsx';
import CancelIcon from '@icon/icon-button-cancel.svg?react';
import ICheckFavoriteFieldProps from './types/checkFavoriteField.ts';
import { Field } from '@component/types/Field.ts';
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
            <FieldButton fieldName={Field.Management} />
            <FieldButton fieldName={Field.Electricity} />
          </div>
          <div className="favorite-field-body__group">
            <FieldButton fieldName={Field.Cash} />
            <FieldButton fieldName={Field.Police} />
          </div>
          <div className="favorite-field-body__group">
            <FieldButton fieldName={Field.Doctor} />
            <FieldButton fieldName={Field.SocialWelfare} />
          </div>
          <div className="favorite-field-body__group">
            <FieldButton fieldName={Field.ArtDesign} />
            <FieldButton fieldName={Field.ChemBio} />
          </div>
          <div className="favorite-field-body__group">
            <FieldButton fieldName={Field.BusinessSales} />
            <FieldButton fieldName={Field.Construction} />
            <FieldButton fieldName={Field.Machine} />
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

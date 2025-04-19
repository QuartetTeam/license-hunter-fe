import FieldButton from '../FieldButton/FieldButton.tsx';
import ConfirmButton from '../ConfirmButton/ConfirmButton.tsx';
import CancelButton from '../CancelButton/CancelButton';
import CancelIcon from '@icon/icon-button-cancel.svg?react';
import '@styles/pages/components/checkFavoriteField.scss';
import { Field } from '@component/types/field.ts';

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
        <ConfirmButton name={alertConfirmMessage} clickEvent={onVisibleFavoriteFieldClick} />
      </div>
    </div>
  );
};

export default CheckFavoriteField;

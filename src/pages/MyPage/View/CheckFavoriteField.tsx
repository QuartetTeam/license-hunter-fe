import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import FieldButton from '@component/FieldButton.tsx';
import CancelButton from '@component/CancelButton.tsx';
import ConfirmButton from '@component/ConfirmButton.tsx';
import CancelIcon from '@icon/icon-button-cancel.svg?react';
import { useDefaultCategory, useMoreCategory } from '@feature/Category/useCategoryService.ts';
import { useChangeUserInterest } from '@feature/User/useUserService';
import { ICategoryDataTypes } from '@type/category.ts';
import '../style/checkFavoriteField.scss';

const CheckFavoriteField = ({
  favoriteFieldVisible,
  onVisibleFavoriteFieldClick,
  alertConfirmMessage,
  alertCancelMessage,
}: {
  favoriteFieldVisible: boolean;
  onVisibleFavoriteFieldClick: () => void;
  alertConfirmMessage: string;
  alertCancelMessage: string;
}) => {
  const [isDefault, setIsDefault] = useState(true);
  const [checkArr, setCheckArr] = useState<number[]>([]);
  const handleIsDefault = () => {
    setIsDefault(!isDefault);
  };
  const defaultCategory = useDefaultCategory();
  const moreCategory = useMoreCategory();
  const defaultCategoryData: ICategoryDataTypes[] | undefined = defaultCategory?.data;
  const moreCategoryData: ICategoryDataTypes[] | undefined = moreCategory?.data;

  const handleChecked = (id: number) => {
    if (checkArr.includes(id)) {
      setCheckArr((prev) => prev.filter((item) => item !== id));
    } else {
      setCheckArr((prev) => [...prev, id]);
    }
  };
  const { mutate: changeUserInterest } = useChangeUserInterest(checkArr);

  const handleChangeInterest = () => {
    changeUserInterest();
    onVisibleFavoriteFieldClick();
  };

  useEffect(() => {
    setIsDefault(true);
    setCheckArr([]);
  }, [favoriteFieldVisible]);

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
        {isDefault ? (
          <div className="favorite-field-body">
            {defaultCategoryData?.map((item, index) => (
              <FieldButton
                key={index}
                fieldName={item.name}
                clickEvent={() => handleChecked(item.id)}
                isChecked={checkArr.includes(item.id)}
              />
            ))}
          </div>
        ) : (
          <div className="favorite-field-body">
            {moreCategoryData?.map((item, index) => (
              <FieldButton
                key={index}
                fieldName={item.name}
                clickEvent={() => handleChecked(item.id)}
                isChecked={checkArr.includes(item.id)}
              />
            ))}
          </div>
        )}

        <div className="more-menu-button" onClick={handleIsDefault}>
          {isDefault ? '더보기' : '닫기'}
        </div>
        <div className="favorite-field-footer">
          <CancelButton name={alertCancelMessage} clickEvent={onVisibleFavoriteFieldClick} />
          <ConfirmButton name={alertConfirmMessage} clickEvent={handleChangeInterest} />
        </div>
      </div>
    </Modal>
  );
};

export default CheckFavoriteField;

import { useState } from 'react';
import FieldButton from '@component/FieldButton.tsx';
import { useCertService } from '@feature/Certification/useCertService';
import { useDefaultCategory, useMoreCategory } from '@feature/Category/useCategoryService.ts';
import { isMainCategoryStore } from '@store/certification/certStore.ts';
import { ICategoryDataTypes } from '@type/category.ts';
import '../style/menuBarView.scss';

const MenuBarView = () => {
  const [isDefault, setIsDefault] = useState(true);
  const handleIsDefault = () => {
    setIsDefault(!isDefault);
  };
  const { setIsMainCategory } = isMainCategoryStore();

  const defaultCategory = useDefaultCategory();
  const moreCategory = useMoreCategory();
  const { moveToCertById, moveToCertByName } = useCertService();
  const defaultCategoryData: ICategoryDataTypes[] | undefined = defaultCategory?.data;
  const moreCategoryData: ICategoryDataTypes[] | undefined = moreCategory?.data;

  const onClickFieldButton = (id: number, fieldName: string) => {
    if (id && fieldName) moveToCertById(id, fieldName);
    setIsMainCategory(true);
  };

  return (
    <div className="menuBar-view">
      <div className="menuBar">
        <div className="total-certInfo-button" onClick={() => moveToCertByName('')}>
          전체보기
        </div>
        <div className="menu-button">
          <div className="menu-button-box">
            {defaultCategoryData
              ?.slice(0, 5)
              .map((item, index) => (
                <FieldButton
                  key={index}
                  clickEvent={() => onClickFieldButton(item.id, item.name)}
                  fieldName={item.name}
                />
              ))}
          </div>
          <div className="menu-button-box">
            {defaultCategoryData
              ?.slice(5, defaultCategoryData?.length)
              .map((item, index) => (
                <FieldButton
                  key={index}
                  fieldName={item.name}
                  clickEvent={() => onClickFieldButton(item.id, item.name)}
                />
              ))}
          </div>
        </div>
        {!isDefault && (
          <div className="menu-button">
            <div className="menu-button-box">
              {moreCategoryData
                ?.slice(0, 7)
                .map((item, index) => (
                  <FieldButton
                    key={index}
                    fieldName={item.name}
                    clickEvent={() => onClickFieldButton(item.id, item.name)}
                  />
                ))}
            </div>
            <div className="menu-button-box">
              {moreCategoryData
                ?.slice(7, moreCategoryData?.length)
                .map((item, index) => (
                  <FieldButton
                    key={index}
                    fieldName={item.name}
                    clickEvent={() => onClickFieldButton(item.id, item.name)}
                  />
                ))}
            </div>
          </div>
        )}
        <div className="more-menu-button" onClick={handleIsDefault}>
          {isDefault ? '더보기' : '닫기'}
        </div>
      </div>
    </div>
  );
};

export default MenuBarView;

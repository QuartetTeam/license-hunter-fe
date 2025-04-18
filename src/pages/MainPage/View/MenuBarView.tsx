import { useState } from 'react';
import FieldButton from '@component/FieldButton.tsx';
import useCategoryService from '@feature/Category/useCategoryService.ts';
import { ICategoryDataTypes } from '@type/category.ts';
import '../style/menuBarView.scss';

const MenuBarView = () => {
  const [isDefault, setIsDefault] = useState(true);
  const handleIsDefault = () => {
    setIsDefault(!isDefault);
  };
  const { defaultCategory, moreCategory } = useCategoryService();
  const defaultCategoryData: ICategoryDataTypes[] | undefined = defaultCategory?.data;
  const moreCategoryData: ICategoryDataTypes[] | undefined = moreCategory?.data;

  return (
    <div className="menuBar-view">
      <div className="menuBar">
        <div className="menu-button">
          <div className="menu-button-box">
            {defaultCategoryData
              ?.slice(0, 5)
              .map((item, index) => <FieldButton key={index} fieldName={item.name} />)}
          </div>
          <div className="menu-button-box">
            {defaultCategoryData
              ?.slice(5, defaultCategoryData?.length)
              .map((item, index) => <FieldButton key={index} fieldName={item.name} />)}
          </div>
        </div>
        {!isDefault && (
          <div className="menu-button">
            <div className="menu-button-box">
              {moreCategoryData
                ?.slice(0, 7)
                .map((item, index) => <FieldButton key={index} fieldName={item.name} />)}
            </div>
            <div className="menu-button-box">
              {moreCategoryData
                ?.slice(7, moreCategoryData?.length)
                .map((item, index) => <FieldButton key={index} fieldName={item.name} />)}
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

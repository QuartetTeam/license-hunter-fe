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
  const { category } = useCategoryService(isDefault);
  const categoryData: ICategoryDataTypes[] | undefined = category?.data;

  return (
    <div className="menuBar-view">
      <div className="menuBar">
        <div className="menu-button">
          <div className="menu-button-box">
            {categoryData
              ?.slice(0, 5)
              .map((item, index) => <FieldButton key={index} fieldName={item.name} />)}
          </div>
          <div className="menu-button-box">
            {categoryData
              ?.slice(5, categoryData?.length)
              .map((item, index) => <FieldButton key={index} fieldName={item.name} />)}
          </div>
        </div>
        {!isDefault && (
          <div className="menu-button">
            <div className="menu-button-box">
              {categoryData
                ?.slice(0, 5)
                .map((item, index) => <FieldButton key={index} fieldName={item.name} />)}
            </div>
            <div className="menu-button-box">
              {categoryData
                ?.slice(5, categoryData?.length)
                .map((item, index) => <FieldButton key={index} fieldName={item.name} />)}
            </div>
          </div>
        )}
        <div className="more-menu-button" onClick={handleIsDefault}>
          더보기
        </div>
      </div>
    </div>
  );
};

export default MenuBarView;

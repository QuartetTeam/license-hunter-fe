import FieldButton from '@component/FieldButton.tsx';
import { Field } from '@component/types/Field.ts';
import '../style/menuBarView.scss';

const MenuBarView = () => {
  // const { getCertCategoryData } = useCertService();

  return (
    <div className="menuBar-view">
      <div className="menuBar">
        <div className="menu-button">
          <div className="menu-button__first">
            <FieldButton fieldName={Field.Management} />
            <FieldButton fieldName={Field.Electricity} />
            <FieldButton fieldName={Field.Cash} />
            <FieldButton fieldName={Field.Police} />
            <FieldButton fieldName={Field.Doctor} />
          </div>
          <div className="menu-button__second">
            <FieldButton fieldName={Field.SocialWelfare} />
            <FieldButton fieldName={Field.ArtDesign} />
            <FieldButton fieldName={Field.ChemBio} />
            <FieldButton fieldName={Field.BusinessSales} />
            <FieldButton fieldName={Field.Construction} />
            <FieldButton fieldName={Field.Machine} />
          </div>
        </div>
        <div className="more-menu-button">더보기</div>
      </div>
    </div>
  );
};

export default MenuBarView;

import FavoriteFieldButton from '../../../components/FavoriteFieldButton.tsx';
import '../style/menuBarView.scss';

const MenuBarView = () => {
  // const { getCertCategoryData } = useCertService();

  return (
    <div className="menuBar-view">
      <div className="menuBar">
        <div className="menu-button">
          <div className="menu-button__first">
            <FavoriteFieldButton fieldName="경영·회계·사무" />
            <FavoriteFieldButton fieldName="전기·전자" />
            <FavoriteFieldButton fieldName="금융·보험" />
            <FavoriteFieldButton fieldName="법률·경찰·소방·교도·국방" />
            <FavoriteFieldButton fieldName="보건·의료" />
          </div>
          <div className="menu-button__second">
            <FavoriteFieldButton fieldName="사회복지·종교" />
            <FavoriteFieldButton fieldName="문화·예술·디자인·방송" />
            <FavoriteFieldButton fieldName="화학·바이오" />
            <FavoriteFieldButton fieldName="영업판매" />
            <FavoriteFieldButton fieldName="건설" />
            <FavoriteFieldButton fieldName="기계" />
          </div>
        </div>
        <div className="more-menu-button">더보기</div>
      </div>
    </div>
  );
};

export default MenuBarView;

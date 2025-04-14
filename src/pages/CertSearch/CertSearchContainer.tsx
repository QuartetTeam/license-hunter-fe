import SearchBox from '@component/SearchBox.tsx';
import CertCardListView from './View/CertCardListView.tsx';
import CertTagView from './View/CertTagView.tsx';
import './style/certSearchContainer.scss';

const CertSearchContainer = () => {
  return (
    <div className="cert-search-container">
      <div className="cert-search">
        <div className="cert-search__field">
          <div className="cert-search__field-title">IT / engineering</div>
        </div>
        <SearchBox />
        <CertTagView />
        <CertCardListView />
      </div>
    </div>
  );
};

export default CertSearchContainer;

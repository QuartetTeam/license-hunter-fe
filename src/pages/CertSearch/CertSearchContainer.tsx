import { useSearchParams } from 'react-router-dom';
import SearchBox from '@component/SearchBox.tsx';
import CertCardListView from './View/CertCardListView.tsx';
import CertTagView from './View/CertTagView.tsx';
import './style/certSearchContainer.scss';

const CertSearchContainer = () => {
  const [searchParams] = useSearchParams();
  const categoryName = searchParams.get('categoryName');

  return (
    <div className="cert-search-container">
      <div className="cert-search">
        <div className="cert-search__field">
          <div className="cert-search__field-title">{categoryName}</div>
        </div>
        <SearchBox isTitle={false} />
        <CertTagView />
        <CertCardListView />
      </div>
    </div>
  );
};

export default CertSearchContainer;

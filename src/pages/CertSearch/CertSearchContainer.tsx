import SearchBox from '../../components/SearchBox.tsx';
import CertCardListView from './View/CertCardListView.tsx';
import CertTagView from './View/CertTagView.tsx';
import '@styles/pages/CertificateSearch/certificateSearchContainer.scss';

const CertSearchContainer = () => {

    return (
        <div className="certificate-search-container">
            <div className="certificate-search">
                <div className="certificate-search__field">
                    <div className="certificate-search__field-title">IT / engineering
                    </div>
                </div>
                <SearchBox/>
                <CertTagView/>
                <CertCardListView/>
            </div>
        </div>
    );
};

export default CertSearchContainer;
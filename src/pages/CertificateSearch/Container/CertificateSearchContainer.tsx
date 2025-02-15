import SearchBox from '../../components/SearchBox.tsx';
import CertificateCardListView from '../View/CertificateCardListView.tsx';
import '@styles/pages/CertificateSearch/certificateSearchContainer.scss';
import CertificateTagView from '../View/CertificateTagView.tsx';

const CertificateSearchContainer = () => {
    return (
        <div className="certificate-search-container">
            <div className="certificate-search-field">
                <div className="certificate-search-field-title">IT / engineering</div>
            </div>
            <SearchBox/>
            <CertificateTagView/>
            <CertificateCardListView/>
        </div>
    );
};

export default CertificateSearchContainer;
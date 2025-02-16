import SearchBox from '../../components/SearchBox.tsx';
import CertificateCardListView from '../View/CertificateCardListView.tsx';
import CertificateTagView from '../View/CertificateTagView.tsx';
import '@styles/pages/CertificateSearch/certificateSearchContainer.scss';

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
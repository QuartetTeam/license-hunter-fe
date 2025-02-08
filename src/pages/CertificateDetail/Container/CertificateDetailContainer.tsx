import TabMenuView from '../View/TabMenuView.tsx';
import CertificateDetailView from '../View/CertificateDetailView.tsx';
import '@styles/pages/CertificateDetail/certificateDetailContainer.scss';

const CertificateDetailContainer = () => {
    return (
        <div className="certificate-detail-container">
            <TabMenuView/>
            <CertificateDetailView/>
        </div>
    );
};

export default CertificateDetailContainer;
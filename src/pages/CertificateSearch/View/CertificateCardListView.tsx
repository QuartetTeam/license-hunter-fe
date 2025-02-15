import CertificateCard from '../../components/CertificateCard.tsx';
import '@styles/pages/CertificateSearch/certificateCardListView.scss';

const CertificateCardListView = () => {
    return (
        <div className="certificate-cardList-Group">
            <CertificateCard/>
            <CertificateCard/>
            <CertificateCard/>
        </div>
    );
};

export default CertificateCardListView;
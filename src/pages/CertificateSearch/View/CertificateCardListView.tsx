import CertificateCard from '../../components/CertificateCard.tsx';
import '@styles/pages/CertificateSearch/certificateCardListView.scss';
import certificateCardData from '../MockData/certificateCardData.ts';

const CertificateCardListView = () => {

    return (
        <div className="certificate-cardList-group">
            <CertificateCard mockData={certificateCardData} requiredCalender={true}/>
        </div>
    );
};

export default CertificateCardListView;
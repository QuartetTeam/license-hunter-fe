import useCertSearchService from '../useCertSearchService.ts';
import CertificateCard from '../../components/CertificateCard.tsx';
import '@styles/pages/CertificateSearch/certificateCardListView.scss';
import certCardData from '../MockData/certCardData.ts';

const CertCardListView = () => {

    const { getCertData } = useCertSearchService();
    console.log('getCertData: ', getCertData);

    return (
        <div className="certificate-cardList-group">
            <CertificateCard mockData={certCardData} requiredCalender={true}/>
        </div>
    );
};

export default CertCardListView;
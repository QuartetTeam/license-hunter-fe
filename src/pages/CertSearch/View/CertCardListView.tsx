import useCertService from '../../../features/Certification/useCertService.ts';
import CertificateCard from '../../../components/CertificateCard.tsx';
import '@styles/pages/CertificateSearch/certificateCardListView.scss';
import certCardData from '../../../mocks/certification/certCardData.ts';

const CertCardListView = () => {

    const { getCertData } = useCertService();
    console.log('getCertData: ', getCertData);

    return (
        <div className="certificate-cardList-group">
            <CertificateCard mockData={certCardData} requiredCalender={true}/>
        </div>
    );
};

export default CertCardListView;
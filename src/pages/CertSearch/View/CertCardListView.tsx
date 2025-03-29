import useCertService from '../../../features/Certification/useCertService.ts';
import CertificateCard from '../../../components/CertificateCard.tsx';
import certCardData from '../../../mocks/certification/certCardData.ts';
import '@styles/pages/CertificateSearch/certCardListView.scss';

const CertCardListView = () => {

    const { getCertData } = useCertService();
    console.log('getCertData: ', getCertData);

    return (
        <div className="cert-cardList-group">
            <CertificateCard mockData={certCardData} requiredCalender={true}/>
        </div>
    );
};

export default CertCardListView;
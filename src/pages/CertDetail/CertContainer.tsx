import CertDetailView from './View/CertDetailView.tsx';
import useCertService from '../../features/Certification/useCertService.ts';

const CertContainer = () => {

    const { getCertDetailData } = useCertService();
    const certDetailData = getCertDetailData.data;

    return (
        <CertDetailView data={certDetailData}/>
    );
};

export default CertContainer;
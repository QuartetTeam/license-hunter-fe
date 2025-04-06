import CertDetailView from './View/CertDetailView.tsx';
import useCertService from '../../features/Certification/useCertService.ts';

const CertContainer = () => {

    const { getCertDetailData } = useCertService();
    console.log('getCertDetailData: ', getCertDetailData);

    return (
        <CertDetailView/>
    );
};

export default CertContainer;
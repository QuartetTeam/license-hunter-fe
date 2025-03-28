import CertDetailView from './View/CertDetailView.tsx';
import useCertDetailService from './useCertDetailService.ts';

const CertContainer = () => {

    const { getCertDetailData } = useCertDetailService();
    console.log('getCertDetailData: ', getCertDetailData);

    return (
        <CertDetailView/>
    );
};

export default CertContainer;
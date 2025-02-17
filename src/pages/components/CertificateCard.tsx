import '@styles/pages/components/certificateCard.scss';
import { useNavigate } from 'react-router-dom';
import { FC } from 'react';

interface CertificateData {
    certificateName: string;
    receiptDate: string;
    testDate: string;
    calenderCount: number;
}

interface CertificateCardProps {
    mockData: CertificateData[];
    trashIconSelected?: boolean;
}

const CertificateCard: FC<CertificateCardProps> = ({ mockData = [], trashIconSelected = false }) => {
    const navigate = useNavigate();

    const onCertificateCardClick = () => {
        window.scrollTo(0, 0);
        navigate('/certificateDetail');
    };

    return (
        <>
            {mockData?.map((item, index) => (
                <div key={index} className="recommend-certificate-info">
                    {trashIconSelected &&
                        <div className="recommend-certificate-checkbox">
                            <input type="checkbox" className="recommend-certificate-checkbox__icon"/>
                        </div>
                    }
                    <div className="recommend-certificate-info-box" onClick={onCertificateCardClick}>
                        <div className="recommend-certificate-image"></div>
                        <div className="recommend-certificate-text">
                            <div className="recommend-certificate-name">{item.certificateName}</div>
                            <div className="recommend-certificate-receipt">접수일
                                | {item.receiptDate}</div>
                            <div className="recommend-certificate-test">시험일 | {item.testDate}</div>
                            <div className="recommend-certificate-calender">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5}
                                     stroke="currentColor" className="recommend-certificate-calender-icon">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"/>
                                </svg>
                                <div className="recommend-certificate-calender-count">
                                    {item.calenderCount}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

        </>
    );
};

export default CertificateCard;


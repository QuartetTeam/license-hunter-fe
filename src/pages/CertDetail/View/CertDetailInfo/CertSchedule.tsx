import ArrowDown from '@icon/icon-arrow-down.svg?react';
import { ICertDetailChildTypes } from '../../../../common/types/certTypes.ts';
import useCertService from '../../../../features/Certification/useCertService.ts';
import '@styles/pages/CertificateDetail/certSchedule.scss';

const CertSchedule = ({ cert, data }: {
    cert: string,
    data: ICertDetailChildTypes []
}) => {
    const { formatDate } = useCertService();

    return (
        <div className="cert-detail-box">
            <div className="cert-title">
                <ArrowDown className="cert-title__icon"/>시험일정
            </div>
            <div className="cert-subtitle">{cert} 시험일정</div>
            <table className="schedule-table">
                <thead>
                <tr>
                    {data.map((item, index) => (
                        <th key={index} className="schedule-table-header">{item.type}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                <tr>
                    {data.map((item, index) => (
                        <td key={index}
                            className="schedule-table-body">{formatDate(item.data)}</td>
                    ))}
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CertSchedule;
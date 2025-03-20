import ArrowDown from '@icon/icon-arrow-down.svg?react';
import '@styles/pages/CertificateDetail/certificateSchedule.scss';

const CertSchedule = () => {
    return (
        <div className="certificate-detail-box">
            <div className="certification-title">
                <ArrowDown className="certification-title__icon"/>시험일정
            </div>
            <div className="certification-subtitle">화학분석기사 시험일정</div>
            <table className="schedule-table">
                <thead>
                <tr>
                    <th className="schedule-table-header">시험일정명</th>
                    <th className="schedule-table-header">접수일</th>
                    <th className="schedule-table-header">시험일</th>
                    <th className="schedule-table-header">합격자발표일</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="schedule-table-body">화학분석기사 2회차</td>
                    <td className="schedule-table-body">2025.03.04~2025.03.16</td>
                    <td className="schedule-table-body">2025.04.20</td>
                    <td className="schedule-table-body">2025.05.10</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CertSchedule;
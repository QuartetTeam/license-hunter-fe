import ArrowDown from '@icon/icon-arrow-down.svg?react';
import '@styles/pages/CertificateDetail/certQualifications.scss';

const CertQualifications = () => {
    return (
        <div className="cert-detail-box">
            <div className="cert-title">
                <ArrowDown className="cert-title__icon"/>응시자격
            </div>
            <div className="cert-subtitle">화학분석기사 응시자격</div>
            <table className="qual-table">
                <tbody>
                <tr>
                    <td className="qual-table-header" rowSpan={4}>유사자격 소지자</td>
                    <td className="qual-table-body">1. 산업기사 + 유사 직무분야 실무경력 1년</td>
                </tr>
                <tr>
                    <td className="qual-table-body">2. 기능사 + 유사 직무분야 실무경력 3년</td>
                </tr>
                <tr>
                    <td className="qual-table-body">3. 동일 및 유사 분야 기사 자격증 소지자</td>
                </tr>
                <tr>
                    <td className="qual-table-body">4. 동일 및 유사 분야 외국자격 소지자</td>
                </tr>
                <tr>
                    <td className="qual-table-header" rowSpan={5}>관련학과 졸업자</td>
                    <td className="qual-table-body-first">1. 관련학과 졸업자 또는 졸업예정자</td>
                </tr>
                <tr>
                    <td className="qual-table-body">2. 3년제 전문대학 졸업자 + 실무경력 1년</td>
                </tr>
                <tr>
                    <td className="qual-table-body">3. 2년제 전문대학 졸업자 + 실무경력 2년</td>
                </tr>
                <tr>
                    <td className="qual-table-body">4. 기사 수준의 기술훈련과정 이수자</td>
                </tr>
                <tr>
                    <td className="qual-table-body">5. 산업기사 수준의 기술훈련과정 이수자 + 실무경력 2년</td>
                </tr>
                <tr>
                    <td className="qual-table-header" rowSpan={1}>실무 경력자</td>
                    <td className="qual-table-body-first">유사 직무분야 실무경력 4년 이상</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CertQualifications;
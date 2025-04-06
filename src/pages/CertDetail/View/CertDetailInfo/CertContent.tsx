import ArrowDown from '@icon/icon-arrow-down.svg?react';
import '@styles/pages/CertificateDetail/certContent.scss';

const CertContent = () => {
    return (
        <div className="cert-detail-box">
            <div className="cert-title">
                <ArrowDown className="cert-title__icon"/>시험내용
            </div>
            <div className="cert-subtitle">화학분석기사 시험내용</div>
            <table className="content-table">
                <thead>
                <tr>
                    <th className="content-table-header" rowSpan={2}>구분</th>
                    <th className="content-table-header" rowSpan={2}>시험과목</th>
                    <th className="content-table-header" colSpan={3}>시험방법</th>

                </tr>
                <tr>
                    <th className="content-table-header">시험시간</th>
                    <th className="content-table-header">문제형식</th>
                    <th className="content-table-header">문제수</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="content-table-body" rowSpan={3}>필기시험</td>
                    <td className="content-table-body">화학의 이해와 원리안전관리</td>
                    <td className="content-table-body" rowSpan={3}>객관식 4지 택일형</td>
                    <td className="content-table-body" rowSpan={3}>80문항</td>
                    <td className="content-table-body" rowSpan={3}>2시간</td>
                </tr>
                <tr>
                    <td className="content-table-body">분석계획수립과 분석절차기초</td>
                </tr>
                <tr>
                    <td className="content-table-body">화학물질 특성분석<br/>화학물질 구조 및 물성분석</td>
                </tr>
                <tr>
                    <td className="content-table-body">실기시험</td>
                    <td className="content-table-body">화학분석 실무</td>
                    <td className="content-table-body">복합형</td>
                    <td className="content-table-body">-</td>
                    <td className="content-table-body">6시간 한도(필기 2시간, 작업 4시간 정도)</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CertContent;
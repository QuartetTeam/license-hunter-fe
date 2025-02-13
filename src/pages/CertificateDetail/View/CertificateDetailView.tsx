import '@styles/pages/CertificateDetail/certificateDetailView.scss';

const CertificateDetailView = () => {
    return (
        <div className="certificate-detail-view">
            <div className="certificate-preview">
                <div className="certificate-info">
                    화학분석기사는 화학 분석 지식 및 기술 전문 인력 양성을 위해 제정된 제도이다. 자격증 취득 후 분석, 개발, 논문 및 보고서 등을 수행할 수 있다.
                </div>
                <div className="certificate-button-group">
                    <button className="certificate-button">접수 바로가기</button>
                    <button className="certificate-button">합격자 조회</button>
                    <button className="certificate-button">시행기관 가기</button>
                    <button className="certificate-button">메일링 서비스</button>
                </div>
            </div>

            <div className="certificate-qualifications">
                <div className="qualifications-title">화학분석기사 응시자격</div>
                <table className="qualifications-table">
                    <tbody>
                    <tr>
                        <td className="table-header" rowSpan={4}>유사자격 소지자</td>
                        <td className="table-body-first">1. 산업기사 + 유사 직무분야 실무경력 1년</td>
                    </tr>
                    <tr>
                        <td className="table-body">2. 기능사 + 유사 직무분야 실무경력 3년</td>
                    </tr>
                    <tr>
                        <td className="table-body">3. 동일 및 유사 분야 기사 자격증 소지자</td>
                    </tr>
                    <tr>
                        <td className="table-body">4. 동일 및 유사 분야 외국자격 소지자</td>
                    </tr>

                    <tr>
                        <td className="table-header" rowSpan={5}>관련학과 졸업자</td>
                        <td className="table-body-first">1. 관련학과 졸업자 또는 졸업예정자</td>
                    </tr>
                    <tr>
                        <td className="table-body">2. 3년제 전문대학 졸업자 + 실무경력 1년</td>
                    </tr>
                    <tr>
                        <td className="table-body">3. 2년제 전문대학 졸업자 + 실무경력 2년</td>
                    </tr>
                    <tr>
                        <td className="table-body">4. 기사 수준의 기술훈련과정 이수자</td>
                    </tr>
                    <tr>
                        <td className="table-body">5. 산업기사 수준의 기술훈련과정 이수자 + 실무경력 2년</td>
                    </tr>

                    <tr>
                        <td className="table-header">실무 경력자</td>
                        <td className="table-body-first">유사 직무분야 실무경력 4년 이상</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CertificateDetailView;
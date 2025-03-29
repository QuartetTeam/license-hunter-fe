import '@styles/pages/CertificateSearch/certTagView.scss';

const CertTagView = () => {
    return (
        <div className="cert-tag-view">
            <div className="cert-tag-group">
                <div className="cert-tag">
                    <div className="cert-tag-icon"></div>
                    프로그래밍
                </div>
                <div className="cert-tag">
                    <div className="cert-tag-icon"></div>
                    네트워크
                </div>
                <div className="cert-tag">
                    <div className="cert-tag-icon"></div>
                    운영체제
                </div>
                <div className="cert-tag">
                    <div className="cert-tag-icon"></div>
                    서버관리
                </div>
            </div>
        </div>
    );
};

export default CertTagView;
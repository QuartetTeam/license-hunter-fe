import '@styles/pages/CertificateSearch/certificateTagView.scss';

const CertTagView = () => {
    return (
        <div className="certificate-tag-view">
            <div className="certificate-tag-group">
                <div className="certificate-tag">
                    <div className="certificate-tag-icon"></div>
                    프로그래밍
                </div>
                <div className="certificate-tag">
                    <div className="certificate-tag-icon"></div>
                    네트워크
                </div>
                <div className="certificate-tag">
                    <div className="certificate-tag-icon"></div>
                    운영체제
                </div>
                <div className="certificate-tag">
                    <div className="certificate-tag-icon"></div>
                    서버관리
                </div>
            </div>
        </div>
    );
};

export default CertTagView;
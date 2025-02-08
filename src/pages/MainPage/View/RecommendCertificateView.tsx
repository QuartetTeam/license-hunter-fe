import '@styles/pages/MainPage/RecommendCertificateView.scss';

const RecommendCertificateView = () => {
    return (
        <>
            <div className="recommend-certificate-box">
                <div className="recommend-certificate-title">자격증 추천</div>
                <div className="recommend-certificate-group">
                    <div className="recommend-certificate-info"></div>
                    <div className="recommend-certificate-info"></div>
                </div>
                <button className="more-information">더보기</button>
            </div>
        </>
    );
};

export default RecommendCertificateView;
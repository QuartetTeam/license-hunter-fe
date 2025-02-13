import MenuBarView from '../View/MenuBarView.tsx';
import RecommendCertificateView from '../View/RecommendCertificateView.tsx';
import SearchBoxView from '../View/SearchBoxView.tsx';

const MainPageContainer = () => {
    return (
        <>
            <SearchBoxView/>
            <MenuBarView/>
            <RecommendCertificateView/>
        </>
    );
};

export default MainPageContainer;

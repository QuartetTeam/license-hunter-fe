import MenuBarView from '../View/MenuBarView.tsx';
import RecommendCertificateView from '../View/RecommendCertificateView.tsx';
import SearchBox from '../../components/SearchBox.tsx';

const MainPageContainer = () => {
    return (
        <>
            <SearchBox/>
            <MenuBarView/>
            <RecommendCertificateView/>
        </>
    );
};

export default MainPageContainer;

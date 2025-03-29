import MenuBarView from './View/MenuBarView.tsx';
import RecommendCertView from './View/RecommendCertView.tsx';
import SearchBox from '../../components/SearchBox.tsx';

const MainPageContainer = () => {
    return (
        <>
            <SearchBox/>
            <MenuBarView/>
            <RecommendCertView/>
        </>
    );
};

export default MainPageContainer;

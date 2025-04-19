import MenuBarView from './View/MenuBarView.tsx';
import RecommendCertView from './View/RecommendCertView.tsx';
import SearchBox from '../../components/SearchBox.tsx';

const MainPageContainer = () => {
  return (
    <>
      <SearchBox isTitle={true} />
      <MenuBarView />
      <RecommendCertView />
    </>
  );
};

export default MainPageContainer;

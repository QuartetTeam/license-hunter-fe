import { useEffect } from 'react';
import MenuBarView from './View/MenuBarView.tsx';
import RecommendCertView from './View/RecommendCertView.tsx';
import SearchBox from '@component/SearchBox.tsx';
import { searchWordStore } from '@store/certification/certStore.ts';

const MainPageContainer = () => {
  const { setSearchWord } = searchWordStore();

  useEffect(() => {
    setSearchWord('');
  }, []);
  return (
    <>
      <SearchBox isTitle={true} />
      <MenuBarView />
      <RecommendCertView />
    </>
  );
};

export default MainPageContainer;

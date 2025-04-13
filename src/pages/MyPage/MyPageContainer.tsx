import MyPageMenuView from './View/MyPageMenuView.tsx';
import MenuContentView from './View/MenuContentView.tsx';
import '@styles/pages/MyPage/myPageContainer.scss';

const MyPageContainer = () => {
  return (
    <div className="myPage-container">
      <div className="myPage-container-group">
        <MyPageMenuView />
        <MenuContentView />
      </div>
    </div>
  );
};

export default MyPageContainer;

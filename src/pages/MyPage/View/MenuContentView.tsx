import MyProfileView from './MyProfileView.tsx';
import MailingServiceView from './MailingServiceView.tsx';
import AccountManageView from './AccountManageView.tsx';
import '@styles/pages/MyPage/menuContentView.scss';

const MenuContentView = () => {
    return (
        <div className="menu-content">
            <MyProfileView/>
            <MailingServiceView/>
            <AccountManageView/>
        </div>
    );
};

export default MenuContentView;
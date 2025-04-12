import MyProfileView from './MyProfileView.tsx';
import MailingServiceView from './MailingServiceView.tsx';
import AccountManageView from './AccountManageView.tsx';
import useUserService from '../../../features/User/useUserService.ts';
import '@styles/pages/MyPage/menuContentView.scss';
import { IUserData } from '../../../common/types/userTypes.ts';

const MenuContentView = () => {

    const { getUserData } = useUserService();
    const userData: IUserData | undefined = getUserData?.data;

    return (
        <div className="menu-content">
            <MyProfileView data={userData}/>
            <MailingServiceView/>
            <AccountManageView data={userData}/>
        </div>
    );
};

export default MenuContentView;
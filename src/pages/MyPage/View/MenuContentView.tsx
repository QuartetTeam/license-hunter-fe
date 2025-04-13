import MyProfileView from './MyProfileView.tsx';
import MailingServiceView from './MailingServiceView.tsx';
import AccountManageView from './AccountManageView.tsx';
import useUserService from '@feature/User/useUserService.ts';
import { IUserData } from '@type/userTypes.ts';
import '../style/menuContentView.scss';

const MenuContentView = () => {
  const { getUserData } = useUserService();
  const userData: IUserData | undefined = getUserData?.data;

  return (
    <div className="menu-content">
      <MyProfileView data={userData} />
      <MailingServiceView />
      <AccountManageView data={userData} />
    </div>
  );
};

export default MenuContentView;

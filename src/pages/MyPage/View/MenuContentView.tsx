import MyProfileView from './MyProfileView.tsx';
import MailingServiceView from './MailingServiceView.tsx';
import AccountManageView from './AccountManageView.tsx';
import { useUserData } from '@feature/User/useUserService.ts';
import { IUserData } from '@type/user.ts';
import '../style/menuContentView.scss';

const MenuContentView = () => {
  const user = useUserData();
  const userData: IUserData | undefined = user?.data;

  return (
    <div className="menu-content">
      <MyProfileView data={userData} />
      <MailingServiceView />
      <AccountManageView data={userData} />
    </div>
  );
};

export default MenuContentView;

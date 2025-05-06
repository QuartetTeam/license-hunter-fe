import MyProfileView from './MyProfileView.tsx';
import MailingServiceView from './MailingServiceView.tsx';
import AccountManageView from './AccountManageView.tsx';
import { useUserData, useRefreshUserData } from '@feature/User/useUserService.ts';
import { IUserData } from '@type/user.ts';
import '../style/menuContentView.scss';
import { useEffect } from 'react';

const MenuContentView = () => {
  const user = useUserData();
  const userData: IUserData | undefined = user?.data;
  const refetchUser = useRefreshUserData();

  useEffect(() => {
    refetchUser();
  }, [
    userData?.profileImageUrl,
    userData?.nickname,
    userData?.email,
    userData?.interests,
    userData?.status,
  ]);
  return (
    <div className="menu-content">
      <MyProfileView data={userData} />
      <MailingServiceView />
      <AccountManageView data={userData} />
    </div>
  );
};

export default MenuContentView;

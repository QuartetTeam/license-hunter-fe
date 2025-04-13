import { useDeleteUser, useGetUser, usePatchUserInterest, usePatchUserNick } from '../../api';
import { usePatchMailingService } from '@api/queries/useUserQuery.ts';

const useUserService = () => {
  const { data: getUserData } = useGetUser();

  const changeUserNick = usePatchUserNick('euni00');
  const changeUserNickService = () => {
    changeUserNick.mutate();
  };

  const changeUserEmail = usePatchUserNick('amy000809@gmail.com');
  const changeUserEmailService = () => {
    changeUserEmail.mutate();
  };

  const changeUserInterest = usePatchUserInterest([]);
  const changeUserInterestService = () => {
    changeUserInterest.mutate();
  };

  const changeUserMailing = usePatchMailingService();
  const changeUserMailingService = () => {
    changeUserMailing.mutate();
  };

  const deleteUserData = useDeleteUser();
  const deleteUserDataService = () => {
    deleteUserData.mutate();
  };

  return {
    getUserData,
    changeUserNickService,
    changeUserEmailService,
    changeUserInterestService,
    changeUserMailingService,
    deleteUserDataService,
  };
};

export default useUserService;

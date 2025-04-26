import { useDeleteUser, useGetUser, usePatchUserInterest, usePatchUserNick } from '../../api';
import { usePatchMailingService } from '@api/queries/useUserQuery.ts';

const useUserData = () => {
  const { data: user } = useGetUser();
  return user;
};

const useChangeUserNick = (nickname: string) => {
  const changeUserNick = usePatchUserNick(nickname);
  return changeUserNick;
};

const useChangeUserEmail = (email: string) => {
  const changeUserEmail = usePatchUserNick(email);
  return changeUserEmail;
};

const useChangeUserInterest = (categoryIds: number[]) => {
  const changeUserInterest = usePatchUserInterest(categoryIds);
  return changeUserInterest;
};

const useChangeMailingStatus = () => {
  const changeMailingStatus = usePatchMailingService();
  return changeMailingStatus;
};

const useDeleteUserData = () => {
  const deleteUserData = useDeleteUser();
  return deleteUserData;
};

export {
  useUserData,
  useChangeUserNick,
  useChangeUserEmail,
  useChangeUserInterest,
  useChangeMailingStatus,
  useDeleteUserData,
};

import { toast } from 'react-toastify';
import {
  useDeleteUser,
  useGetUser,
  usePatchUserInterest,
  usePatchUserNick,
  usePatchUserEmail,
} from '../../api';
import { usePatchMailingService } from '@api/queries/useUserQuery.ts';
import { TOAST_MESSAGE } from '@constant/toastMessages.ts';

const useUserData = () => {
  const { data: user } = useGetUser();
  return user;
};

const useChangeUserNick = (nickname: string) => {
  return usePatchUserNick(nickname, {
    onSuccess: () => {
      toast.success(TOAST_MESSAGE.SUCCESS.CHANGE_NICKNAME);
    },
    onError: () => {
      toast.error(TOAST_MESSAGE.ERROR.CHANGE_NICKNAME);
    },
  });
};

const useChangeUserEmail = (email: string) => {
  return usePatchUserEmail(email, {
    onSuccess: () => {
      toast.success(TOAST_MESSAGE.SUCCESS.CHANGE_EMAIL);
    },
    onError: () => {
      toast.error(TOAST_MESSAGE.ERROR.CHANGE_EMAIL);
    },
  });
};

const useChangeUserInterest = (categoryIds: number[]) => {
  return usePatchUserInterest(categoryIds, {
    onSuccess: () => {
      toast.success(TOAST_MESSAGE.SUCCESS.CHANGE_INTEREST);
    },
    onError: () => {
      toast.error(TOAST_MESSAGE.ERROR.CHANGE_INTEREST);
    },
  });
};

const useChangeMailingStatus = () => {
  return usePatchMailingService({
    onError: () => {
      toast.error(TOAST_MESSAGE.ERROR.CHANGE_MAILING);
    },
  });
};

const useDeleteUserData = () => {
  return useDeleteUser({
    onSuccess: () => {
      toast.success(TOAST_MESSAGE.SUCCESS.DELETE_USER);
    },
    onError: () => {
      toast.error(TOAST_MESSAGE.ERROR.DELETE_USER);
    },
  });
};

export {
  useUserData,
  useChangeUserNick,
  useChangeUserEmail,
  useChangeUserInterest,
  useChangeMailingStatus,
  useDeleteUserData,
};

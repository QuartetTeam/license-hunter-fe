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
import { AxiosError } from 'axios';

const useUserData = () => {
  const { data: user } = useGetUser();
  return user;
};

const useRefreshUserData = () => {
  const { refetch: refetchUser } = useGetUser();
  return refetchUser;
};

const useChangeUserNick = (nickname: string) => {
  return usePatchUserNick(nickname, {
    onSuccess: () => {
      toast.success(TOAST_MESSAGE.SUCCESS.CHANGE_NICKNAME);
    },
    onError: (error: unknown) => {
      const errorMessage =
        (error as AxiosError<{ message: string }>)?.response?.data?.message ||
        TOAST_MESSAGE.ERROR.CHANGE_NICKNAME;
      toast.error(errorMessage);
    },
  });
};

const useChangeUserEmail = (email: string) => {
  return usePatchUserEmail(email, {
    onSuccess: () => {
      toast.success(TOAST_MESSAGE.SUCCESS.CHANGE_EMAIL);
    },
    onError: (error: unknown) => {
      const errorMessage =
        (error as AxiosError<{ message: string }>)?.response?.data?.message ||
        TOAST_MESSAGE.ERROR.CHANGE_EMAIL;
      toast.error(errorMessage);
    },
  });
};

const useChangeUserInterest = (categoryIds: number[]) => {
  return usePatchUserInterest(categoryIds, {
    onSuccess: () => {
      toast.success(TOAST_MESSAGE.SUCCESS.CHANGE_INTEREST);
    },
    onError: (error: unknown) => {
      const errorMessage =
        (error as AxiosError<{ message: string }>)?.response?.data?.message ||
        TOAST_MESSAGE.ERROR.CHANGE_INTEREST;
      toast.error(errorMessage);
    },
  });
};

const useChangeMailingStatus = () => {
  return usePatchMailingService({
    onError: (error: unknown) => {
      const errorMessage =
        (error as AxiosError<{ message: string }>)?.response?.data?.message ||
        TOAST_MESSAGE.ERROR.CHANGE_MAILING;
      toast.error(errorMessage);
    },
  });
};

const useDeleteUserData = () => {
  return useDeleteUser({
    onSuccess: () => {
      toast.success(TOAST_MESSAGE.SUCCESS.DELETE_USER);
    },
    onError: (error: unknown) => {
      const errorMessage =
        (error as AxiosError<{ message: string }>)?.response?.data?.message ||
        TOAST_MESSAGE.ERROR.DELETE_USER;
      toast.error(errorMessage);
    },
  });
};

export {
  useUserData,
  useRefreshUserData,
  useChangeUserNick,
  useChangeUserEmail,
  useChangeUserInterest,
  useChangeMailingStatus,
  useDeleteUserData,
};

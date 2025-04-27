import { useMutation, useQuery, UseMutationOptions } from '@tanstack/react-query';
import { userQueryKey } from '../API/queryKeys.ts';
import {
  deleteUserData,
  getUserData,
  patchMailingService,
  patchUserEmail,
  patchUserInterest,
  patchUserNick,
} from '../API/API.ts';

const useGetUser = () => {
  return useQuery({
    queryKey: [userQueryKey.get],
    queryFn: getUserData,
  });
};

const usePatchUserNick = (nickname: string, option: UseMutationOptions) => {
  return useMutation({
    mutationKey: [userQueryKey.patchNick],
    mutationFn: patchUserNick(nickname),
    ...option,
  });
};

const usePatchUserEmail = (email: string, option: UseMutationOptions) => {
  return useMutation({
    mutationKey: [userQueryKey.patchEmail],
    mutationFn: patchUserEmail(email),
    ...option,
  });
};

const usePatchUserInterest = (categoryIds: number[], option: UseMutationOptions) => {
  return useMutation({
    mutationKey: [userQueryKey.patchInterest, categoryIds],
    mutationFn: patchUserInterest(categoryIds),
    ...option,
  });
};

const usePatchMailingService = (option: UseMutationOptions) => {
  return useMutation({
    mutationKey: [userQueryKey.patchMailing],
    mutationFn: patchMailingService,
    ...option,
  });
};

const useDeleteUser = (option: UseMutationOptions) => {
  return useMutation({
    mutationKey: [userQueryKey.delete],
    mutationFn: deleteUserData,
    ...option,
  });
};

export {
  useGetUser,
  usePatchUserNick,
  usePatchUserEmail,
  usePatchUserInterest,
  usePatchMailingService,
  useDeleteUser,
};

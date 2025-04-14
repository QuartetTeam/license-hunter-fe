import { useMutation, useQuery } from '@tanstack/react-query';
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

const usePatchUserNick = (nickname: string) => {
  return useMutation({
    mutationKey: [userQueryKey.patchNick],
    mutationFn: patchUserNick(nickname),
  });
};

const usePatchUserEmail = (email: string) => {
  return useMutation({
    mutationKey: [userQueryKey.patchEmail],
    mutationFn: patchUserEmail(email),
  });
};

const usePatchUserInterest = (categoryIds: string[]) => {
  return useMutation({
    mutationKey: [userQueryKey.patchInterest],
    mutationFn: patchUserInterest(categoryIds),
  });
};

const usePatchMailingService = () => {
  return useMutation({
    mutationKey: [userQueryKey.patchMailing],
    mutationFn: patchMailingService,
  });
};

const useDeleteUser = () => {
  return useMutation({
    mutationKey: [userQueryKey.delete],
    mutationFn: deleteUserData,
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

import { useAddMailing, useDeleteMailing, useGetMailing } from '../../api';

const useMailingList = (page: number) => {
  const { data: mailing } = useGetMailing(page, 4);
  return mailing;
};

const useAddUserMailing = (certificationId: number) => {
  const addMailings = useAddMailing(certificationId);
  return addMailings;
};

const useDeleteUserMailing = (mailingsId: number[]) => {
  const deleteMailings = useDeleteMailing(mailingsId);
  return deleteMailings;
};

export { useMailingList, useAddUserMailing, useDeleteUserMailing };

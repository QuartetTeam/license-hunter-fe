import { useGetCategory, useGetChildCategory } from '../../api';

const useDefaultCategory = () => {
  const { data: defaultCategory } = useGetCategory(true);
  return defaultCategory;
};

const useMoreCategory = () => {
  const { data: moreCategory } = useGetCategory(false);
  return moreCategory;
};

const useChildCategory = (id: string) => {
  const { data: childCategory } = useGetChildCategory(id);
  return childCategory;
};

export { useDefaultCategory, useMoreCategory, useChildCategory };

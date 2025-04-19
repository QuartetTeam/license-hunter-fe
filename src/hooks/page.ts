import { useNavigate } from 'react-router-dom';

export const useMoveToPage = () => {
  const navigate = useNavigate();

  const moveToPage = (page: string) => {
    window.scrollTo(0, 0);
    navigate(page);
  };

  return moveToPage;
};

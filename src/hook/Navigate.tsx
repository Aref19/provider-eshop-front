
import { useNavigate } from 'react-router-dom';

export const useCustomNavigate = () => {
  const navigate = useNavigate();

  const navigateTo = (path: string) => {
    console.log(`Navigating to ${path}`);
    navigate(path);
  };

  return navigateTo;
};
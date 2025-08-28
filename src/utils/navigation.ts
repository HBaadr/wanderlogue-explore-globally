import { useLocation } from 'react-router-dom';

export const useNavigationHelper = () => {
  const location = useLocation();

  const createLink = (path: string, language: string) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set('language', language);
    
    if (path === '/') {
      return `/?${searchParams.toString()}`;
    }
    
    return `${path}?${searchParams.toString()}`;
  };

  return { createLink };
};
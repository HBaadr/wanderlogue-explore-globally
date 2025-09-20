import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-foreground">{t('error_404')}</h1>
        <p className="mt-4 text-center">{t('page_not_found')}</p>
        <Link to="/" className="underline">{t('return_home')}</Link>
      </div>
    </div>
  );
};

export default NotFound;

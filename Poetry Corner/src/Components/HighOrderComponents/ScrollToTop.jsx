import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop({ children }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(location.pathname);
  }, [location]);

  return children;
}

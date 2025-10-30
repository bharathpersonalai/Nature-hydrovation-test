import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // Get the entire location object, not just the pathname
  const location = useLocation();

  // This effect will now run every time the location object changes,
  // even if the path is the same.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]); // The dependency is the full location object

  // This component renders nothing, it just runs the effect
  return null;
};

export default ScrollToTop;
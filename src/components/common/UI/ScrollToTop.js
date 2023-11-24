'use client';

import { useEffect } from "react";
import { useRouter } from "next/router";


// component for scroll to top when page changes
function ScrollToTop({ children }) {

  const router = useRouter();
  const { pathname } = router;
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return children;
}

export default ScrollToTop;
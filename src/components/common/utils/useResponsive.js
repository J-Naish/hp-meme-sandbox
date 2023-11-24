import { useState, useEffect } from 'react';

export const useResponsive = () => {
  // define the minimum width for desktop view
  const minDesktopWidth = 1024;

  // state to keep track of the window width
  const [windowWidth, setWindowWidth] = useState(null);


  useEffect(() => {

    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // determine if the view is in desktop mode based on the window width
  const isDesktopView = windowWidth > minDesktopWidth;

  // return the isDesktopView flag
  return isDesktopView;
};

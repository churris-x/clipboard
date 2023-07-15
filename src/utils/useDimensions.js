import { useEffect, useState } from 'react';

export const useDimensions = () => {
  const initialState = {
    width: 0,
    height: 0,
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  };

  const [state, setState] = useState(initialState);

  useEffect(() => {
    const handleResize = () => {
      setState({
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile: window.innerWidth <= 600,
        isTablet: window.innerWidth <= 1000,
        isDesktop: window.innerWidth <= 1280,
      });
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { ...state };
};

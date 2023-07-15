import { useEffect, useRef } from 'react';

/* How to use:
function App() {

  const [activeIndex, set_activeIndex] = useState(0);
  const callbackFunction = () => {};

  useHover(callbackFunction, activeIndex);
}
*/

export const useSwipe = (callback, activeIndex) => {
  const x = useRef(0);

  useEffect(() => {
    const startSwipe = (e) => {
      x.current = e.touches[0].clientX;
    };

    const endSwipe = (e) => {
      const delta = x.current - e.changedTouches[0].clientX;

      return callback(delta);
    };

    document.addEventListener('touchstart', startSwipe);
    document.addEventListener('touchend', endSwipe);
    return () => {
      document.removeEventListener('touchstart', startSwipe);
      document.removeEventListener('touchend', endSwipe);
      x.current = 0;
    };
  }, [activeIndex]);
};

import { useEffect, useMemo, useState } from 'react';

/* How to use:
function App() {
  const componentRef = useRef(null);
  const isIntersecting = useInViewport(componentRef);

  return (
    <div ref={componentRef}>
      {isIntersecting ? 'Intersecting!' : 'not intersecting...'}
    </div>
  );
}
*/

export const useInViewport = (ref) => {
  const [isIntersecting, set_isIntersecting] = useState(false);

  const observer =
    typeof window !== 'undefined'
      ? useMemo(
          () =>
            new IntersectionObserver(
              ([entry]) => set_isIntersecting(entry.isIntersecting),
              { threshold: 1 },
            ),
          [],
        )
      : {};

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
};

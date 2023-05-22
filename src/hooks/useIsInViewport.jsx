import { useState, useEffect } from "react";

const useIsInViewport = (ref) => {
  const [isInViewport, setIsInViewport] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = ref.current;
      const rect = element.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      if (rect.bottom === windowHeight) {
        setIsInViewport(true);
      } else {
        setIsInViewport(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return isInViewport;
};

export default useIsInViewport;


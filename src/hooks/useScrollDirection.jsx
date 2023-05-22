import { useState, useEffect } from "react";

const useScrollDirection = () => {
  const [scrollDir, setScrollDir] = useState("");  
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollPos > currentScrollPos) {
        setScrollDir('up');
      } else {
        setScrollDir('down');
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return scrollDir;
};

export default useScrollDirection;

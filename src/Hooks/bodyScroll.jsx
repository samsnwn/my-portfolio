import { useState, useEffect } from "react";

export default function useSetBodyScroll() {
  const [bodyScroll, setBodyScroll] = useState(true);

  useEffect(() => {
    const resetOnResize = () => {
      if (window.innerWidth <= 1023) document.body.style.overflow = "hidden";
      if (window.innerWidth >= 1024) document.body.style.overflow = "scrolls";
    };

    if (!bodyScroll) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
      window.addEventListener("resize", resetOnResize);
    }

    return () => {
      window.removeEventListener("resize", resetOnResize);
    };
  }, [bodyScroll]);

  return setBodyScroll;
}
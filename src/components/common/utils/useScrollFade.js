import { useEffect } from "react";

export const useScrollFade = (refs) => {
  useEffect(() => {

    if(typeof window === 'undefined') return;

    function handleScroll() {
      const triggerTop = window.innerHeight * 0.08; // 10% from the top

      refs.forEach((ref) => {
        const item = ref.current;
        if (!item) return;

        const itemTop = item.getBoundingClientRect().top;

        if (itemTop < triggerTop) {
          item.style.opacity = "0";
        } else {
          item.style.opacity = "1";
        }
      });
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [refs]);
};
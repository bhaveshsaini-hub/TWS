import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollReveal = () => {
  const location = useLocation();

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal-on-scroll");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [location.pathname]);

  return null;
};

export default ScrollReveal;

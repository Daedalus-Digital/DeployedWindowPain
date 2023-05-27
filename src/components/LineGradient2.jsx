// const LineGradient = ({ width = "w-full" }) => {
//   return <div className={`h-0.5 ${width} bg-bg-gradient-orange`} />;
// };

// export default LineGradient;

import { useState, useEffect, useRef } from "react";

const LineGradient = ({ width = "w-full" }) => {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef(null);

  const handleScroll = () => {
    const element = ref.current;
    if (element) {
      const rect = element.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const isVisible = rect.top <= windowHeight && rect.bottom >= 0;
      if (isVisible) {
        setLoaded(true);
        window.removeEventListener("scroll", handleScroll);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`h-0.5 ${width} bg-bg-gradient-orange`}
      style={{
        transform: `translateX(${loaded ? "0" : "-100vw"})`,
        transition: "transform 1.25s cubic-bezier(0.42, 0, 0.21, 1.125)",
      }}
    />
  );
};

export default LineGradient;

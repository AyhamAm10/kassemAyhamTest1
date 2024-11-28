import { useState, useEffect } from "react";

function useScreenSize() {
  const [screenSizeSlider, setScreenSize] = useState(getScreenSize());

  function getScreenSize() {
    const width = window.innerWidth;
    if (width < 640) {
      return 1.3;
    } else if (width >= 640 && width < 768) {
      return 2;
    } else if (width >= 768 && width < 1280) {
      return 3;
    } else if (width >= 1280 && width < 1636) {
      return 4;
    } else {
      return 5;
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getScreenSize());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSizeSlider;
}

export default useScreenSize;

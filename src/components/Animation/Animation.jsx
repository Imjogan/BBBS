import { useEffect } from "react";
import Lottie from "lottie-web";

// eslint-disable-next-line react/prop-types
function Animation({ animationData, containerClassname }) {
  useEffect(() => {
    const container = document.querySelector(`.${containerClassname}`);
    const options = {
      container,
      animationData,
    };
    Lottie.loadAnimation(options);
  }, []);
  return <div className={containerClassname} />;
}

export default Animation;

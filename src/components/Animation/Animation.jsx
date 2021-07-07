import { useEffect } from "react";
import Lottie from "lottie-web";

function Animation({ animationData, containerClassname }) {
  useEffect(() => {
    const container = document.querySelector(`.${containerClassname}`);
    const options = {
      container,
      animationData,
    };
    Lottie.loadAnimation(options);
  }, [animationData]);
  return <div className={containerClassname} />;
}

export default Animation;

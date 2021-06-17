import { useEffect } from "react";
import Lottie from "lottie-web";

// eslint-disable-next-line react/prop-types
function Animation({ animationData }) {
  useEffect(() => {
    const container = document.querySelector(".popup-calendar__img");
    const options = {
      container,
      animationData,
    };
    Lottie.loadAnimation(options);
  }, []);
  return <div className="popup-calendar__img" />;
}

export default Animation;

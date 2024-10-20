"use client";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import { services_obj } from "../../constants/services";
import styles from "./BusinessSlider.module.scss";

export default function BusinessSlider({ current_service }) {
  const newServiceRef = useRef();
  const [old_service, setOld_service] = useState(current_service);
  const [serviceWidth, setServiceWidth] = useState(); // initial width value

  const changeServices = async () => {
    setTimeout(() => {
      setOld_service(current_service);
    }, 500);
  };

  useEffect(() => {
    changeServices();
    // Update width when current_service changes
    if (newServiceRef?.current) {
      const newWidth = newServiceRef.current.scrollWidth + 32;
      setServiceWidth(newWidth);
    }
  }, [current_service]);

  return (
    <>
      <div
        style={{
          width: `${serviceWidth ? `${serviceWidth}px` : "max-content"}`,
          minWidth: "50px", // Helps maintain smooth shrinking behavior
          overflow: "hidden", // Prevents layout jump
        }}
        className={`${styles.sliderWrapper} ${styles?.[current_service]}  relative transition-all duration-500`}>
        <p
          className={`${styles.oldService} ${
            old_service !== current_service ? styles.moveAway : ""
          }`}>
          {services_obj?.[old_service]}
        </p>
        <p
          className={`${styles.newService} ${
            old_service !== current_service ? styles.moveUp : ""
          } `}
          ref={newServiceRef}>
          {services_obj?.[current_service]}
        </p>
      </div>
    </>
  );
}

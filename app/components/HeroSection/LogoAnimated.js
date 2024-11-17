"use client";

import throttle from "lodash.throttle";
import { useEffect, useState } from "react";
import styles from "./LogoAnimated.module.scss";
export default function LogoAnimated({ children }) {
  const [up, setUp] = useState(false);
  useEffect(() => {
    // Define a throttled scroll handler that reads the scroll position
    const handleScroll = throttle(() => {
      if (window.scrollY > 20) {
        setUp(true);
      } else {
        setUp(false);
      }
    }, 100); // Throttle the scroll reading to once every 100ms

    // Attach the throttled handler to the window scroll event
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return <div className={`wrap ${styles.logo} ${up ? styles.up : ""}`}>{children}</div>;
}

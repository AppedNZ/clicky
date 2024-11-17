"use client";

import throttle from "lodash.throttle";
import { useEffect, useState } from "react";
import { header_links } from "../../constants/menu";
import Logo from "../Logo";
import styles from "./Header.module.scss";
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    // Define a throttled scroll handler that reads the scroll position
    const handleScroll = throttle(() => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
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
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }

    // Clean up to ensure scroll is enabled when component is unmounted
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <nav
      className={`bg-white  fixed top-0 left-0 w-screen overflow-hidden z-30 transition-all ${
        scrolled ? "py-2 lg:py-3 opacity-100 shadow " : "py-3 lg:py-5 opacity-0 pointer-events-none"
      }`}>
      <div className="wrap  flex justify-between items-center">
        <Logo className="fill-primary max-w-[160px] relative z-0 opacity-0" />
        <button
          onClick={() => {
            setOpen((prev) => {
              return !prev;
            });
          }}
          className={`${styles.burger} ${
            open ? styles["is-open"] : ""
          } xl:hidden color-white relative z-30`}>
          <div className={styles["line-top"]}></div>
          <div className={styles["line-middle"]}></div>
          <div className={styles["line-bottom"]}></div>
        </button>
        <div className={`${styles.menu} ${styles.mobile} ${open ? styles.open : ""}`}>
          {header_links.map((link) => (
            <a
              onClick={() => {
                setOpen(false);
              }}
              className="hover:text-primary scroll-m-10"
              key={link.id}
              href={`#${link.id}`}>
              {link.label}
            </a>
          ))}
          <a className="primary-gradient p-3 rounded-[10px] text-white " href="tel:0800 249 203">
            0800 249 203
          </a>
        </div>
      </div>
    </nav>
  );
}

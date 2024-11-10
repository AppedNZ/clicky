"use client";

import throttle from "lodash.throttle";
import { useEffect, useState } from "react";
import { header_links } from "../../constants/menu";
import Logo from "../Logo";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

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

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`bg-white  fixed top-0 left-0 w-screen overflow-hidden z-30 transition-all ${
        scrolled ? "py-2 lg:py-3 opacity-100 shadow " : "py-3 lg:py-5 opacity-0 pointer-events-none"
      }`}>
      <div className="wrap  flex justify-between items-center">
        <Logo className="fill-primary max-w-[160px]" />
        <div className="flex gap-5 w-1/2 items-center flex-grow justify-end text-black uppercase font-extrabold leading-none text-xl">
          {header_links.map((link) => (
            <a className="hover:text-primary scroll-m-10" key={link.id} href={`#${link.id}`}>
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

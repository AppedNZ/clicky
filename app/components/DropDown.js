"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./DropDown.module.scss";
export default function DropDown({
  placeholder,
  current_pick,
  onSelect,
  options,
  triggerComponent,
}) {
  const [isOpen, setIsOpen] = useState(false); // State for dropdown visibility
  const dropdownRef = useRef(null); // Ref to detect outside clicks

  // Function to close the dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="w-full relative " ref={dropdownRef}>
      {triggerComponent ? (
        triggerComponent({
          onClick: () => setIsOpen(!isOpen),
          isOpen,
        })
      ) : (
        <button
          onClick={() => setIsOpen(!isOpen)} // Toggle dropdown on button click
          className={styles.trigger}>
          {current_pick ? current_pick.title : placeholder}{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="9"
            viewBox="0 0 17 9"
            className={`transition-all ${isOpen ? "rotate-180" : ""}`}
            fill="none">
            <path
              d="M8.3335 8.54999L0.333498 0.549986L16.3335 0.549988L8.3335 8.54999Z"
              fill="black"
            />
          </svg>
        </button>
      )}

      {isOpen && ( // Show dropdown if open
        <div className={`${styles.dropdown}`}>
          {options &&
            options.map((option) => (
              <div
                key={option.value}
                onClick={() => {
                  onSelect(option);
                  setIsOpen(false); // Close dropdown after selecting an option
                }}
                className="cursor-pointer p-2.5 px-7 hover:bg-gray-300 text-base">
                {option.title}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

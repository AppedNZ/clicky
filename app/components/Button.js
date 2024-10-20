"use client";
import styles from "./Button.module.scss";
export default function Button({
  size = "regular",
  color = "primary",
  addClassName = "",
  children,
  ...props
}) {
  return (
    <button
      {...props}
      className={`${styles.button} ${styles[size]} ${styles[color]} ${addClassName}`}>
      {children}
    </button>
  );
}

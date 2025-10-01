"use client";
import styles from "./Button.module.scss";
export default function Button({
  as = "button",
  size = "regular",
  color = "primary",
  addClassName = "",
  children,
  ...props
}) {
  const Block = as;
  return (
    <Block
      {...props}
      className={`${styles.button} ${styles[size]} ${styles[color]} ${addClassName}`}>
      {children}
    </Block>
  );
}

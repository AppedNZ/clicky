import styles from "./Heading.module.scss";

export default function Heading({ children, as = "h5", color = "black", addClassName = "" }) {
  return <h5 className={`${styles.h5} ${styles?.[color]} ${addClassName}`}>{children}</h5>;
}

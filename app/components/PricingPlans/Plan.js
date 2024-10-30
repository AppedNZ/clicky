"use client";
import { CheckIcon } from "@heroicons/react/24/solid";
import Button from "../Button";
import styles from "./Plan.module.scss";
export default function Plan({ plan, onClick = () => {} }) {
  const { title, price, features } = plan;
  return (
    <div className={styles.plan}>
      <h5>{title}</h5>
      <h6>{price}</h6>
      <ul className="flex flex-col mt-4">
        {features.map((feat, i) => (
          <li key={i} className={`${styles.feature} ${feat.checked ? styles.included : ""}`}>
            <CheckIcon className={styles.checkMark} />
            {feat.title}
          </li>
        ))}
      </ul>
      <Button addClassName="mt-auto" onClick={onClick}>
        Select Plan
      </Button>
    </div>
  );
}

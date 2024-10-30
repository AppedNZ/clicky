"use client";
import { useState } from "react";
import { locations } from "../../constants/locations";
import { services } from "../../constants/services";
import { triggerSignUpEvent } from "../../utils/customEvents";
import Button from "../Button";
import DropDown from "../DropDown";
import styles from "./BusinessPicker.module.scss";
export default function BusinessPicker() {
  const [current_service, setCurrent_service] = useState(services[0]);
  const [current_region, setCurrent_region] = useState(locations[0]);
  return (
    <div className={styles.picker}>
      <p className={styles.sideTitle}>Select Service</p>
      <DropDown
        placeholder={"Select Region"}
        options={locations}
        current_pick={current_region}
        onSelect={setCurrent_region}
      />
      <DropDown
        placeholder={"Select Service"}
        options={services}
        current_pick={current_service}
        onSelect={setCurrent_service}
      />
      <Button
        addClassName="w-full "
        onClick={() => {
          triggerSignUpEvent({
            detail: {
              service: current_service,
              region: current_region,
            },
          });
        }}>
        let&apos;s go{" "}
      </Button>
    </div>
  );
}

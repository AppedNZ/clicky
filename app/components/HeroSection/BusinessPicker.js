import { locations } from "../../constants/locations";
import { services } from "../../constants/services";
import Button from "../Button";
import DropDown from "../DropDown";
import styles from "./BusinessPicker.module.scss";
export default function BusinessPicker({ current_service, setService, current_region, setRegion }) {
  return (
    <div className={styles.picker}>
      <p className={styles.sideTitle}>Select Service</p>
      <DropDown
        placeholder={"Select Region"}
        options={locations}
        current_pick={current_region}
        onSelect={setRegion}
      />
      <DropDown
        placeholder={"Select Service"}
        options={services}
        current_pick={current_service}
        onSelect={setService}
      />
      <Button addClassName="w-full ">let&apos;s go </Button>
    </div>
  );
}

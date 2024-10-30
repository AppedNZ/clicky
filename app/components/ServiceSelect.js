import DropDown from "./DropDown";
import DropDownIcon from "./Icons/DropDownIcon";
import styles from "./ServiceSelect.module.scss";
export default function ServiceSelect({
  placeholder,
  value,
  options,
  selectValueFn,
  addClassNames = "",
  colored = false,
}) {
  return (
    <div className={`${styles.selectWrapper} ${addClassNames} `}>
      <label className="flex-shrink-0" htmlFor="service">
        {placeholder}
      </label>
      <div className="w-full flex items-center gap-2.5">
        <DropDown
          options={options}
          onSelect={selectValueFn}
          current_pick={value}
          triggerComponent={({ onClick, isOpen }) => (
            <div
              onClick={onClick}
              className={`${styles.select} ${colored && styles.colored} text-black cursor-pointer ${
                styles?.[value.value]
              }`}>
              {value.title}
            </div>
          )}
        />
        <DropDownIcon />
      </div>
    </div>
  );
}

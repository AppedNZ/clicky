export default function DropDownIcon({ isOpen = false }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="9"
      viewBox="0 0 17 9"
      className={`transition-all ${isOpen ? "rotate-180" : ""}`}
      fill="none">
      <path d="M8.3335 8.54999L0.333498 0.549986L16.3335 0.549988L8.3335 8.54999Z" fill="black" />
    </svg>
  );
}

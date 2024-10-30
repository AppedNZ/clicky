export default function Input({ addClassNames = " p-5 xl:p-7", ...rest }) {
  return (
    <input
      {...rest}
      className={`bg-[#F1F1F1] w-full rounded-[10px] carret-primary text-black placeholder:text-black  ${addClassNames}`}
    />
  );
}

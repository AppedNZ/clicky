export default function InputExpire({ addClassNames }) {
  return (
    <div
      className={`bg-[#F1F1F1] w-full rounded-[10px] carret-primary text-black flex justify-center items-center gap-1 uppercase ${addClassNames}`}>
      <select
        placeholder="MM"
        className="appearance-none bg-transparent w-[3ch] outline-none uppercase"
        name="expireMM"
        id="expireMM">
        <option value="01">Jan</option>
        <option value="02">Feb</option>
        <option value="03">Mar</option>
        <option value="04">Apr</option>
        <option value="05">May</option>
        <option value="06">Jun</option>
        <option value="07">Jul</option>
        <option value="08">Aug</option>
        <option value="09">Sep</option>
        <option value="10">Oct</option>
        <option value="11">Nov</option>
        <option value="12">Dec</option>
      </select>
      /
      <select
        className="appearance-none bg-transparent w-[4ch] outline-none"
        name="expireYY"
        id="expireYY">
        <option value="24">2024</option>
        <option value="25">2025</option>
        <option value="26">2026</option>
        <option value="27">2027</option>
        <option value="28">2028</option>
        <option value="29">2029</option>
        <option value="30">2030</option>
      </select>
    </div>
  );
}

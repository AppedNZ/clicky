import AvailablePin from "./AvailablePin";
import TakenPin from "./TakenPin";

export default function Pin({ x, y, isTaken }) {
  return isTaken ? <TakenPin x={x} y={y} /> : <AvailablePin x={x} y={y} />;
}

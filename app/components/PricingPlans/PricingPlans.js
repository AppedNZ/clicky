import { plans } from "../../constants/plans";
import Heading from "../Heading";
import Plan from "./Plan";
export default function PricingPlans() {
  return (
    <section
      id="plans"
      className=" py-10 lg:py-20  lg:wrap flex flex-col lg:gap-10 overflow-hidden ">
      <Heading addClassName="max-lg:px-[4%] text-center ">Our Pricing Plans</Heading>

      <div className="w-full  flex gap-5 lg:gap-10 max-lg:overflow-auto max-lg:px-[4%] snap-x snap-mandatory max-lg:py-10">
        {plans.map((plan, i) => (
          <Plan key={plan.title} plan={plan} />
        ))}
      </div>
    </section>
  );
}

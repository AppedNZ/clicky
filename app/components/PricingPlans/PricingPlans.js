import { plans } from "../../constants/plans";
import Heading from "../Heading";
import Plan from "./Plan";
export default function PricingPlans() {
  return (
    <section className="wrap flex flex-col gap-10">
      <Heading>Our Pricing Plans</Heading>

      <div className="w-full flex gap-10">
        {plans.map((plan, i) => (
          <Plan key={plan.title} plan={plan} />
        ))}
      </div>
    </section>
  );
}

import Heading from "../Heading";
import Plan from "./Plan";
const plans = [
  {
    title: "Starter",
    price: "$500/month",
    features: [
      { checked: true, title: "Up to $15/day ad budget*" },
      { checked: false, title: "Google Ads Campaign" },
      { checked: false, title: "Lead/Phone Call Notifications" },
      { checked: false, title: "On-going management" },
      { checked: false, title: "Unlimited support" },
    ],
  },
  {
    title: "Pumping",
    price: "$1,000/month",
    features: [
      { checked: true, title: "Up to $15/day ad budget*" },
      { checked: true, title: "Google Ads Campaign" },
      { checked: true, title: "Lead/Phone Call Notifications" },
      { checked: false, title: "On-going management" },
      { checked: false, title: "Unlimited support" },
    ],
  },
  {
    title: "Big Shot",
    price: "$1,500/month",
    features: [
      { checked: true, title: "Up to $15/day ad budget*" },
      { checked: true, title: "Google Ads Campaign" },
      { checked: true, title: "Lead/Phone Call Notifications" },
      { checked: true, title: "On-going management" },
      { checked: true, title: "Unlimited support" },
    ],
  },
];
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

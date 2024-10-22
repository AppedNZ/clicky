import step5 from "@/app/assets/included/gear.svg";
import step3 from "@/app/assets/plan/bag.svg";
import step2 from "@/app/assets/plan/graph.svg";
import step1 from "@/app/assets/plan/marker.svg";
import step4 from "@/app/assets/plan/star.svg";
import step6 from "@/app/assets/plan/thumbsup.svg";
import Button from "../Button";
import Heading from "../Heading";
import styles from "./MarketingPlan.module.scss";
const steps = [
  {
    icon: step1,
    title: "Exclusive access in their city",
  },
  {
    icon: step2,
    title: "All-in-one service from setup to tracking",
  },

  {
    icon: step3,
    title: "Simple, transparent pricing",
  },
  {
    icon: step4,
    title: "No fixed terms. Cancel at anytime.",
  },
  {
    icon: step5,
    title: "Customized to your NZ business",
  },
  {
    icon: step6,
    title: "Daily improvements made to campaigns",
  },
];
export default function MarketingPlan() {
  return (
    <section className={`  text-black py-10 lg:py-14`}>
      <div className={`${styles.wrap} wrap`}>
        <div className={styles.leftSide}>
          <p className="text-2xl font-extrabold uppercase leading-none">
            finally, a marketing plan
          </p>
          <Heading>That gives You Measured Results</Heading>
          <p className="italic text-2xl leading-relaxed my-4">
            We track everything for our campaigns, from the first keyword searched, until the moment
            your customer calls you fills our your contact form. We give you the best return on your
            investment possible.
          </p>
          <Button size="medium" addClassName="lg:max-w-[300px]">
            Sign up now
          </Button>
        </div>
        <ul className={styles.list}>
          {steps.map((step, i) => (
            <li key={i} className=" ">
              <img className="w-8 h-8 object-contain" src={step.icon.src} alt={step.title} />
              <p>{step.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

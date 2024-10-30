import stripe from "@/app/assets/stripe.svg";
import { services } from "../../constants/services";
import Logo from "../Logo";
import Background from "./Background";
import BusinessPicker from "./BusinessPicker";
import BusinessSlider from "./BusinessSlider";
import styles from "./HeroSection.module.scss";
export default function HeroSection() {
  return (
    <section className={` relative z-0 w-full h-[95vh] max-h-[1080px] ${styles.hero} `}>
      <Background />
      <div className="wrap relative z-10 h-full flex flex-col items-center justify-center gap-3">
        <Logo className={` fill-white mb-[5vw] ${styles.logo}`} />
        <h1 className={styles.heading}>
          Market your kiwi <BusinessSlider services={services} /> <span>business</span>
        </h1>
        <p className={styles.subheading}>from just $500/month!</p>
        <BusinessPicker />
        <p className="text-3xl leading-none mt-7">
          Secure sign up via Stripe (Debit/Credit Card){" "}
          <img className="inline-flex h-10" src={stripe.src} alt="Stripe Logo" />
        </p>
      </div>
      <div className="w-full h-1/6 absolute bottom-0 left-0 bg-gradient-to-t from-white to-transparent z-0" />
    </section>
  );
}

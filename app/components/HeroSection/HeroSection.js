import stripe from "@/app/assets/stripe.svg";
import { services } from "../../constants/services";
import Logo from "../Logo";
import Background from "./Background";
import BusinessPicker from "./BusinessPicker";
import BusinessSlider from "./BusinessSlider";
import styles from "./HeroSection.module.scss";
import LogoAnimated from "./LogoAnimated";
export default function HeroSection() {
  return (
    <>
      <section
        className={` relative z-0 w-full lg:h-[95vh] max-h-[1080px] ${styles.hero} overflow-hidden`}>
        <Background />
        <div className="wrap relative z-10 h-full flex flex-col items-center justify-center lg:gap-3">
          <Logo className={` fill-white mb-[5vw] flex-shrink-0 opacity-0  ${styles.logo}`} />

          <h1 className={styles.heading}>
            Market your kiwi <BusinessSlider services={services} /> <span>business</span>
          </h1>
          <p className={styles.subheading}>
            from just <span>$500/month!</span>
          </p>
          <BusinessPicker />
          <p className={styles.secure}>
            <span>
              {" "}
              Secure sign up via Stripe <br className="lg:hidden" /> (Debit/Credit Card){" "}
            </span>
            <img
              className="inline-flex max-lg:w-1/3 max-lg:h-auto    lg:h-10"
              src={stripe.src}
              alt="Stripe Logo"
            />
          </p>
        </div>
        <div className="w-full h-[10%] lg:h-1/6 absolute bottom-0 left-0 bg-gradient-to-t from-white to-transparent z-0" />
      </section>
      <LogoAnimated>
        <Logo className={``} />
      </LogoAnimated>
    </>
  );
}

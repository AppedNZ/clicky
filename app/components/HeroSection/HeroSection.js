"use client";
import bg from "@/app/assets/hero-bg.jpg";
import stripe from "@/app/assets/stripe.svg";
import Image from "next/image";
import { useState } from "react";
import { services } from "../../constants/services";
import Logo from "../Logo";
import BusinessPicker from "./BusinessPicker";
import BusinessSlider from "./BusinessSlider";
import styles from "./HeroSection.module.scss";
export default function HeroSection() {
  const [current_service, setCurrent_service] = useState();
  const [current_region, setCurrent_region] = useState();
  return (
    <section className={` relative z-0 w-full h-[95vh] max-h-[1080px] ${styles.hero} `}>
      <Image
        fill
        src={bg}
        alt="background"
        aria-label="hidden"
        className="w-full h-full object-cover z-0"
      />
      <div className="wrap relative z-10 h-full flex flex-col items-center justify-center gap-3">
        <Logo className={` fill-white mb-[5vw] ${styles.logo}`} />
        <h1 className={styles.heading}>
          Market your kiwi{" "}
          <BusinessSlider
            current_service={current_service?.value ?? services[0].value}
            services={services}
          />{" "}
          <span>business</span>
        </h1>
        <p className={styles.subheading}>from just $500/month!</p>
        <BusinessPicker
          current_service={current_service}
          setService={setCurrent_service}
          current_region={current_region}
          setRegion={setCurrent_region}
        />
        <p className="text-3xl leading-none mt-7">
          Secure sign up via Stripe (Debit/Credit Card){" "}
          <img className="inline-flex h-10" src={stripe.src} alt="Stripe Logo" />
        </p>
      </div>
      <div className="w-full h-1/6 absolute bottom-0 left-0 bg-gradient-to-t from-white to-transparent z-0" />
    </section>
  );
}

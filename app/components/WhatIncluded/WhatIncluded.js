"use client";
import step4 from "@/app/assets/included/blank.svg";
import step1 from "@/app/assets/included/folder.svg";
import step2 from "@/app/assets/included/gear.svg";
import step3 from "@/app/assets/included/pin.svg";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import "swiper/css";
import "swiper/css/grid";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../Button";
import styles from "./WhatIncluded.module.scss";

const steps = [
  {
    icon: step1,
    title: "Call tracking number",
    descr: "Your customers type in keywords on Google relating to your business",
  },
  {
    icon: step2,

    title: "Google search campaign setup",
  },
  {
    icon: step3,

    title: "Analytics dashboard",
  },
  {
    icon: step4,

    title: "Monthly performance reports",
  },
];
export default function WhatIncluded() {
  return (
    <section className="wrap text-black py-10 lg:py-20">
      <div className={styles.included}>
        <h6 className="lg:w-min flex-shrink-0 font-extrabold uppercase text-[clamp(24px,3vw,32px)] leading-none text-primary">
          What&apos;s included
        </h6>
        <div className=" w-1/2 flex-grow  items-center relative  text-black flex gap-10">
          <Button id="included-prev" addClassName="flex-shrink-0 h-max" size="small" color="black">
            <ChevronLeftIcon className="w-4 text-white stroke stroke-white " />
          </Button>

          <Swiper
            className="text-black w-1/2 flex-grow flex  items-center "
            modules={[Navigation]}
            navigation={{ nextEl: "#included-next", prevEl: "#included-prev" }}
            spaceBetween={20}
            loop
            slidesPerView={4}>
            {steps.map((step, i) => (
              <SwiperSlide
                key={i}
                // style={{ width: i % 2 ? "400px" : "250px" }}
                className={`${styles.slide}  `}>
                <div className="w-10 h-10  flex items-center justify-center relative ">
                  <img
                    className="w-full h-full object-contain flex-shrink-0"
                    src={step.icon.src}
                    alt={step.title}
                  />
                </div>
                <h4 className="font-medium text-lg leading-none max-w-fit">{step.title}</h4>
              </SwiperSlide>
            ))}
          </Swiper>
          <Button id="included-next" size="small" color="black" addClassName="flex-shrink-0 h-max">
            <ChevronLeftIcon className="w-4 text-white stroke stroke-white rotate-180" />
          </Button>
        </div>
      </div>
    </section>
  );
}

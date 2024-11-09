"use client";
import step4 from "@/app/assets/included/blank.svg";
import step1 from "@/app/assets/included/folder.svg";
import step2 from "@/app/assets/included/gear.svg";
import step3 from "@/app/assets/included/pin.svg";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import "swiper/css";
import "swiper/css/grid";
import { Grid, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../Button";
import styles from "./WhatIncluded.module.scss";

const steps = [
  {
    icon: step1,
    title: "Call tracking number",
    descr: "Your customers type in keywords on Google relating to your business",
    name: "feature1",
  },
  {
    icon: step2,
    name: "feature2",
    title: "Google search campaign setup",
  },
  {
    icon: step3,
    name: "feature3",
    title: "Analytics dashboard",
  },
  {
    icon: step4,
    name: "feature4",
    title: "Monthly performance reports",
  },
  {
    icon: step1,
    name: "feature1",
    title: "Call tracking number",
    descr: "Your customers type in keywords on Google relating to your business",
  },
  {
    icon: step2,
    name: "feature2",
    title: "Google search campaign setup",
  },
  {
    icon: step3,
    name: "feature3",
    title: "Analytics dashboard",
  },
  {
    icon: step4,
    name: "feature4",
    title: "Monthly performance reports",
  },
];
export default function WhatIncluded() {
  const handleSwiperInit = (swiper) => {
    // Set grid params based on the viewport width on initialization
    if (window.innerWidth > 1279) {
      swiper.params.grid = undefined; // Disable grid
    } else {
      swiper.params.grid = { rows: 4, fill: "row" }; // Enable grid with parameters
    }
    swiper.update(); // Apply the updated parameters
  };
  return (
    <section className="wrap text-black py-10 lg:py-20">
      <div className={styles.included}>
        <div className="max-lg:w-full lg:w-min flex gap-2 justify-between items-center">
          <Button
            id="included-prev"
            addClassName="lg:hidden flex-shrink-0 h-max"
            size="small"
            color="black">
            <ChevronLeftIcon className="w-4 text-white stroke stroke-white " />
          </Button>
          <h6 className="w-min flex-shrink-0 font-extrabold uppercase text-[clamp(24px,3vw,32px)] leading-none text-primary">
            What&apos;s included
          </h6>

          <Button
            id="included-next"
            size="small"
            color="black"
            addClassName="lg:hidden flex-shrink-0 h-max">
            <ChevronLeftIcon className="w-4 text-white stroke stroke-white rotate-180" />
          </Button>
        </div>
        <div className="w-full lg:w-1/2 flex-grow  items-center relative  text-black flex max-lg:flex-wrap gap-10">
          <Button
            id="included-prev"
            addClassName="max-lg:hidden flex-shrink-0 h-max"
            size="small"
            color="black">
            <ChevronLeftIcon className="w-4 text-white stroke stroke-white " />
          </Button>

          <Swiper
            className="text-black w-2/3 flex-grow flex  items-center max-lg:order-1 overflow-hidden"
            modules={[Navigation, Grid]}
            onInit={handleSwiperInit}
            navigation={{ nextEl: "#included-next", prevEl: "#included-prev" }}
            spaceBetween={10}
            slidesPerView={1}
            breakpoints={{
              1280: {
                slidesPerView: "auto",
                spaceBetween: 40,
              },
            }}>
            {steps.map((step, i) => (
              <SwiperSlide
                key={i}
                // style={{ width: i % 2 ? "400px" : "250px" }}
                className={`${styles.slide} w-full  ${styles?.[step.name]}`}>
                <div className="w-10 h-10  flex items-center justify-center relative flex-shrink-0 ">
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
          <Button
            id="included-next"
            size="small"
            color="black"
            addClassName="max-lg:hidden flex-shrink-0 h-max">
            <ChevronLeftIcon className="w-4 text-white stroke stroke-white rotate-180" />
          </Button>
        </div>
      </div>
    </section>
  );
}

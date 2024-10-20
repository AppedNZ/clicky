"use client";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { services_slider } from "../../constants/services";
import Button from "../Button";
import styles from "./WeHelp.module.scss";
export default function WeHelp() {
  return (
    <div className="block-bg wrap w-full relative -top-10 z-20 p-6 lg:p-10 xl:p-14">
      <div className="flex w-full justify-between items-center gap-2.5 mb-8">
        <h3 className="text-black font-extrabold uppercase text-3xl leading-none ">
          We help market service Businesses such as...
        </h3>
        <Button id="wehelp-prev" addClassName="ml-auto" size="small" color="primary">
          <ChevronLeftIcon className="w-4 text-white stroke stroke-white " />
        </Button>
        <Button id="wehelp-next" size="small" color="primary">
          <ChevronLeftIcon className="w-4 text-white stroke stroke-white rotate-180" />
        </Button>
      </div>
      <Swiper
        className="text-black"
        modules={[Navigation]}
        navigation={{ nextEl: "#wehelp-next", prevEl: "#wehelp-prev" }}
        centeredSlides
        loop
        spaceBetween={20}
        slidesPerView={7}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}>
        {services_slider.map((slide, i) => (
          <SwiperSlide key={i} className={`${styles.slide} ${styles?.[slide.id]}`}>
            <span>{slide.emoji}</span>
            <p>{slide.title}</p>
            <Image
              fill
              className="object-cover opacity-50 z-0"
              src={slide.imgSrc}
              alt={slide.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

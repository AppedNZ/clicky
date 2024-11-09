"use client";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { services_slider } from "../../constants/services";
import styles from "./WeHelp.module.scss";
export default function WeHelp() {
  return (
    <div className="block-bg wrap w-full  -top-10 z-20 p-6 lg:p-10 xl:p-14 relative">
      <div className="flex w-full justify-between items-center gap-2.5 mb-8">
        <h3 className={styles.heading}>We help market service Businesses such as...</h3>
        <button
          id="wehelp-prev"
          className={`ml-auto max-lg:absolute max-lg:w-auto max-lg:h-auto top-[58%] left-6  z-10 ${styles.button} ${styles.prev}`}
          size="small"
          color="primary">
          <ChevronLeftIcon className="w-4 text-white stroke stroke-white " />
        </button>
        <button
          id="wehelp-next"
          size="small"
          color="primary"
          className={`max-lg:absolute max-lg:w-auto max-lg:h-auto top-[58%] right-6  z-10 ${styles.button} ${styles.next}`}>
          <ChevronLeftIcon className="w-4 text-white stroke stroke-white rotate-180" />
        </button>
      </div>
      <Swiper
        className="text-black"
        modules={[Navigation]}
        navigation={{ nextEl: "#wehelp-next", prevEl: "#wehelp-prev" }}
        centeredSlides
        loop
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          480: { slidesPerView: 2 },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 7,
          },
        }}>
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

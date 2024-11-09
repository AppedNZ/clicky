"use client";
import devices from "@/app/assets/devices.png";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { triggerSignUpEvent } from "../../utils/customEvents";
import Button from "../Button";
import styles from "./GetMore.module.scss";
export default function GetMore() {
  return (
    <div className=" w-11/12  mx-auto 2xl:wrap  relative py-10 xl:py-16 max-lg:flex max-lg:flex-wrap max-lg:justify-center gap-3 gap-x-6">
      <Button
        id="getmore-prev"
        addClassName="max-lg:order-1  lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 lg:-translate-x-full"
        size="small"
        color="primary">
        <ChevronLeftIcon className="w-4 text-white stroke stroke-white " />
      </Button>
      <Button
        id="getmore-next"
        size="small"
        color="primary"
        addClassName="max-lg:order-1  lg:absolute right-0 lg:translate-x-full lg:top-1/2 lg:-translate-y-1/2">
        <ChevronLeftIcon className="w-4 text-white stroke stroke-white rotate-180" />
      </Button>

      <Swiper
        className="text-black w-11/12 "
        modules={[Navigation]}
        navigation={{ nextEl: "#getmore-next", prevEl: "#getmore-prev" }}
        centeredSlides
        loop
        spaceBetween={20}
        slidesPerView={1}>
        <SwiperSlide className={`${styles.slide} `}>
          <div className={styles.side}>
            <h3 className="text-black font-extrabold uppercase  leading-none max-lg:text-center ">
              get more calls and enquiries
            </h3>
            <p className="max-lg:text-center">
              When it comes to digital marketing we understand that things can be complicated. That
              is why we have put together a simple and proven killer search marketing combo for
              service based businesses to get more phone calls and leads.
            </p>
            <Button
              size="medium"
              addClassName="lg:max-w-[230px] "
              onClick={() => {
                triggerSignUpEvent({});
              }}>
              let&apos;s go{" "}
            </Button>
          </div>
          <Image
            width={devices.width}
            height={devices.height}
            className={styles.image}
            src={devices}
            alt={"Devices"}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

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
    <div className=" w-11/12  mx-auto 2xl:wrap  relative py-10 xl:py-16">
      <Button
        id="getmore-prev"
        addClassName="ml-auto absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full"
        size="small"
        color="primary">
        <ChevronLeftIcon className="w-4 text-white stroke stroke-white " />
      </Button>
      <Button
        id="getmore-next"
        size="small"
        color="primary"
        addClassName=" absolute right-0 translate-x-full top-1/2 -translate-y-1/2">
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
            <h3 className="text-black font-extrabold uppercase  leading-none ">
              get more calls and enquiries
            </h3>
            <p>
              When it comes to digital marketing we understand that things can be complicated. That
              is why we have put together a simple and proven killer search marketing combo for
              service based businesses to get more phone calls and leads.
            </p>
            <Button
              size="medium"
              addClassName="max-w-[230px] "
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

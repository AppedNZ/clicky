"use client";
import blueline from "@/app/assets/clients/blueline.png";
import grand from "@/app/assets/clients/grand.png";
import landscaping from "@/app/assets/clients/landscaping.png";
import natures from "@/app/assets/clients/natures.png";
import ridler from "@/app/assets/clients/ridler.png";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import "swiper/css";
import "swiper/css/grid";
import { Autoplay, Grid, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../Button";
import Heading from "../Heading";
import styles from "./SomeServices.module.scss";
const clients = [
  ridler,
  landscaping,
  blueline,
  grand,
  natures,
  landscaping,
  blueline,
  grand,
  ridler,
  natures,
  ridler,
  landscaping,
  blueline,
  grand,
  natures,
  landscaping,
  blueline,
  grand,
  ridler,
  natures,
];
export default function SomeServices() {
  return (
    <section className="w-11/12  mx-auto 2xl:wrap py-10 xl:py-16 flex flex-col items-center">
      <Heading addClassName="max-lg:text-center">SOME KIWI SERVICE BUSINESSES WE WORK WITH</Heading>
      <div className=" w-full  relative  text-black">
        <Button
          id="service-prev"
          addClassName="max-lg:hidden ml-auto absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full"
          size="small"
          color="primary">
          <ChevronLeftIcon className="w-4 text-white stroke stroke-white " />
        </Button>
        <Button
          id="service-next"
          size="small"
          color="primary"
          addClassName="max-lg:hidden absolute right-0 translate-x-full top-1/2 -translate-y-1/2">
          <ChevronLeftIcon className="w-4 text-white stroke stroke-white rotate-180" />
        </Button>

        <Swiper
          className="text-black w-11/12 mt-12  "
          modules={[Navigation, Grid, Autoplay]}
          grid={{
            rows: 2,
            fill: "row",
          }}
          autoplay={{
            delay: 2500,
          }}
          wrapperClass={styles.wrapper}
          navigation={{ nextEl: "#service-next", prevEl: "#service-prev" }}
          spaceBetween={0}
          loop
          breakpoints={{
            1024: {
              slidesPerView: 5,
            },
          }}
          slidesPerView={2}>
          {clients.map((client, i) => (
            <SwiperSlide key={i} className={`${styles.slideWrap} `}>
              <div className={`${styles.slide} `}>
                <img src={client.src} alt="Client" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

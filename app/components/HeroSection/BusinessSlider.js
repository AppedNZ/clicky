"use client";
import { useState } from "react";
import "swiper/css";
import "swiper/css/grid";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { services } from "../../constants/services";
import styles from "./BusinessSlider.module.scss";
export default function BusinessSlider() {
  const [service, setService] = useState(services[0]);
  const [serviceWidth, setServiceWidth] = useState();

  return (
    <Swiper
      style={{
        width: `${serviceWidth ? `${serviceWidth}px` : "278px"}`,
        minWidth: "50px",
        overflow: "hidden",
      }}
      className={`${styles.sliderWrapper} ${styles?.[service]}  relative transition-all duration-500 h-[calc(clamp(28px,2.5vw,48px)+24px)] lg:h-[calc(clamp(32px,2.5vw,48px)+32px)]`}
      modules={[Autoplay]}
      onSwiper={(swiper) => {
        const currentSlide = swiper.slides.find((slide) =>
          Array.from(slide.classList).includes("swiper-slide-active")
        );
        if (currentSlide) {
          setService(currentSlide.dataset?.service ?? current_service);
          setServiceWidth(currentSlide.clientWidth);
        }
      }}
      onSlideChangeTransitionStart={(swiper) => {
        const nextSlide = swiper.slides.find((slide) =>
          Array.from(slide.classList).includes("swiper-slide-active")
        );
        if (nextSlide) {
          setService(nextSlide.dataset?.service ?? current_service);
          setServiceWidth(nextSlide.clientWidth);
        }
      }}
      direction="vertical"
      autoplay={{ delay: 3000 }}
      loop
      spaceBetween={10}
      slidesPerView={1}>
      {services.map((serv, i) => (
        <SwiperSlide
          key={i}
          className={`${styles.slide} `}
          service={serv.value}
          data-service={serv.value}>
          {serv.title}
        </SwiperSlide>
      ))}
    </Swiper>
    // <>
    //   <div
    //
    //     className={`${styles.sliderWrapper} ${styles?.[current_service]}  relative transition-all duration-500`}>
    //     <p
    //       className={`${styles.oldService} ${
    //         old_service !== current_service ? styles.moveAway : ""
    //       }`}>
    //       {services_obj?.[old_service]}
    //     </p>
    //     <p
    //       className={`${styles.newService} ${
    //         old_service !== current_service ? styles.moveUp : ""
    //       } `}
    //       ref={newServiceRef}>
    //       {services_obj?.[current_service]}
    //     </p>
    //   </div>
    // </>
  );
}

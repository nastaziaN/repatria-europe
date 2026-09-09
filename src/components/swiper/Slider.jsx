import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./styles.scss";

const Slider = ({ items, renderItem }) => {
  const swiperRef = useRef(null);

  return (
    <div className="slider">
      <button
        className="slider-btn slider-btn-prev"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        ‹
      </button>

      <Swiper
        className="custom-swiper"
        modules={[Pagination, Autoplay]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={16}
        slidesPerView={1}
        breakpoints={{
          320: {
            slidesPerView: "auto",
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>{renderItem(item)}</SwiperSlide>
        ))}
      </Swiper>

      <button
        className="slider-btn slider-btn-next"
        onClick={() => swiperRef.current?.slideNext()}
      >
        ›
      </button>
    </div>
  );
};

export default Slider;

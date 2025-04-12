import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { bannerData } from "../../static/data";

const Banner = () => {
  return (
    <React.Fragment>
      <div className="relative w-full h-[60vh] md:h-[90vh] ">
        <Swiper
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="mySwiper w-full h-full"
        >
          {bannerData.map((item, index) => (
            <SwiperSlide key={index} className="relative ">
              <img
                src={item.image}
                alt="Banner"
                className="object-cover w-full h-full "
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black/50 bg-opacity-40 flex flex-col justify-center items-center text-white">
                <h2 className="text-3xl md:text-5xl font-bold">{item.text}</h2>
                <p className="mt-4 text-lg md:text-xl text-center">
                  {item.subtext}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </React.Fragment>
  );
};

export default Banner;

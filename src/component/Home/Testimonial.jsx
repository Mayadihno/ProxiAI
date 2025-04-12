import React from "react";
import { testimonialsData } from "../../static/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

const Testimonial = () => {
  return (
    <React.Fragment>
      <div className="text-center mb-12 px-6 bg-gray-50 pt-10">
        <div className="inline-block px-6 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm font-semibold tracking-wide uppercase mb-3">
          What Our Clients Say
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          Customer <span className="text-indigo-600">Testimonials</span>
        </h2>
        <p className="text-gray-600 md:text-lg text-sm max-w-3xl mx-auto mb-12 leading-relaxed">
          See what our clients have to say about their experience working with
          us. We pride ourselves on delivering high-quality solutions that help
          businesses thrive.
        </p>

        {/* Swiper Component for Testimonials */}
        <Swiper
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            640: { slidesPerView: 1, spaceBetween: 15 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 15 },
            1280: { slidesPerView: 3, spaceBetween: 20 },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {testimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mx-auto mt-4"
                />
                <div className="flex justify-center mb-4">
                  {/* Rating */}
                  <div className="text-yellow-500 mb-2">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <span key={i} className="text-2xl">
                        ⭐
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  {testimonial.comment}
                </p>
                <p className="text-indigo-600 font-semibold">
                  {testimonial.name}
                </p>
                <p className="text-gray-500 text-sm">Client</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </React.Fragment>
  );
};

export default Testimonial;

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper";
import { motion } from "framer-motion";
import gradients from "../styles/customGradient.module.css";

export default function HomeImageGallery() {
  return (
    <div className="pt-10">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className={`mySwiper ${gradients.homePage} text-center w-[90%] h-[35vh] md:h-[90vh]`}
      >
        <SwiperSlide>
          <div className="w-full h-full overflow-hidden">
            <img
              src="/1.png"
              className="w-full h-full brightness-75 object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full overflow-hidden">
            <img
              src="/2.png"
              className="w-full h-full brightness-75 object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full overflow-hidden">
            <motion.img
              src="/3.png"
              className="scale w-full h-full brightness-75 object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full overflow-hidden">
            <img
              src="/4.png"
              className="w-full h-full brightness-75 object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full overflow-hidden">
            <motion.img
              src="/5.png"
              className="scale w-full h-full brightness-75 object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full overflow-hidden">
            <motion.img
              src="/6.png"
              className="scale w-full h-full brightness-75 object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full overflow-hidden">
            <motion.img
              src="/7.png"
              className="scale w-full h-full brightness-75 object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full overflow-hidden">
            <motion.img
              src="/8.png"
              className="scale w-full h-full brightness-75 object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full overflow-hidden">
            <motion.img
              src="/labs2.png"
              className="scale w-full h-full brightness-75 object-cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

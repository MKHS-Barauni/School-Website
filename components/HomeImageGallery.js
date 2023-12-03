import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper";
import { motion } from "framer-motion";
import gradients from "../styles/customGradient.module.css";

export default function HomeImageGallery() {
  return (
    <div className="pt-12">
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
        className={`mySwiper ${gradients.homePage} text-center w-[70%] h-[30vh] md:h-[90vh]`}
      >
        <SwiperSlide>
          <div className="w-full h-full overflow-hidden">
            <img
              src="/banner.png"
              className="w-full h-full brightness-75 object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full overflow-hidden">
            <motion.img
              src="/infra1.png"
              className="scale w-full h-full brightness-75 object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full overflow-hidden">
            <img
              src="/clab.png"
              className="w-full h-full brightness-75 object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full overflow-hidden">
            <motion.img
              src="/od1.png"
              className="scale w-full h-full brightness-75 object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full overflow-hidden">
            <motion.img
              src="/well3.png"
              className="scale w-full h-full brightness-75 object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full overflow-hidden">
            <motion.img
              src="/labs3.png"
              className="scale w-full h-full brightness-75 object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full overflow-hidden">
            <motion.img
              src="/labs1.png"
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

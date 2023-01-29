// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "./banner/slider-2-1.webp";
import img2 from "./banner/slider-2-2.webp";
import img3 from "./banner/slider-2-3.webp";
import './Banner.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./Swiper.css";

// import required modules
import { Navigation, Autoplay } from "swiper";

const Banner = () => {
  return (
    <>
      <Swiper
        navigation={true}
        loop={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="hero lg:h-[650px]"
            style={{
              backgroundImage: `url(${img1})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="">
                <h2 className=" txs font-bold">Education is the most powerful Weapon</h2>
                
                <button className="btn btn-success txc">View Courses</button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="hero lg:h-[650px]"
            style={{
              backgroundImage: `url(${img2})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="">
                <h1 className=" txs font-bold">Education is the most powerful Weapon</h1>
                
                <button className="btn btn-success txc">View Courses</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero lg:h-[650px]"
            style={{
              backgroundImage: `url(${img3})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="">
                <h1 className=" txs font-bold">Education is the Best power of Humanity</h1>
                
                <button className="btn btn-success txc">View Courses</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;

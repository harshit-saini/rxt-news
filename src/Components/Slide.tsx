import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper";

// importing icons
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

import { IPost } from "../Interface/IPost";

interface ISlideProps {
  posts: IPost[];
}

const navigationOptions = {
  nextEl: "nextButton",
  prevEl: "prevButton",
};

const Slide = ({ posts }: ISlideProps) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      modules={[Navigation]}
      navigation={navigationOptions}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {posts.map((post: IPost) => (
        <SwiperSlide>
          <div className="relative">
            <div className="h-72">
              <img
                className="h-full w-full object-cover rounded-lg"
                src={post.urlToImage}
                alt=""
              />
            </div>
            <div className="absolute left-0 bottom-1/2 text-white w-full flex justify-between">
              <ArrowLeftIcon
                id="prevButton"
                className="h-7 w-7 p-1 cursor-pointer inline-block bg-gray-400"
              />
              <ArrowRightIcon
                id="nextButton"
                className="h-7 w-7 p-1 cursor-pointer inline-block bg-gray-400"
              />
            </div>
            <div className="">
              <div className="mt-2 p-1 truncate">
                <p className="">{post.title}</p>
              </div>
              <div className="bg-red-800 text-white inline-block p-2 cursor-pointer">
                Read More
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slide;

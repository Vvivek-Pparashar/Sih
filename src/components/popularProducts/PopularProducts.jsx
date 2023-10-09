import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./PopularProducts.css";
import ProductList from "./List/ProductList1";
import ProductList2 from "./List/ProductList2";
import ProductList3 from "./List/ProductList3";

const PopularProducts = () => {
  return (
    <div className="m-l-pp">
      <h1 style={{ marginBottom: "30px", fontSize: "40px" }}>
        Popular Projects
      </h1>
      <Swiper
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3.5,
            spaceBetween: 30,
          },
        }}
        grabCursor={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper-products"
      >
        <SwiperSlide className="swiperSlide-products">
          <ProductList />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide-products">
          <ProductList2 />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide-products">
          <ProductList3 />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide-products">
          <ProductList />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide-products">
          <ProductList2 />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide-products">
          <ProductList3 />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide-products">
          <ProductList />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide-products">
          <ProductList2 />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PopularProducts;

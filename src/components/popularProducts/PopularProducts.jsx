import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";


// Import Swiper styles
import "swiper/css";
import "./PopularProducts.css";
// import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ProductList from "./List/ProductList1";
import ProductList2 from "./List/ProductList2";
import ProductList3 from "./List/ProductList3";

// import "./Carousel.css";

// import required modules

const PopularProducts = () => {
  return (
    <div className="m-l-pp">
      <h1 style={{ marginBottom: "30px", fontSize: "40px" }}>
        Popular Products
      </h1>
      <Swiper
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2000,
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
        // navigation={{
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        //   clickable: true,
        // }}
        grabCursor={true}
        modules={[Autoplay, Pagination, Navigation]}
        // pagination={true}
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

        {/* <div className="slider-controler-startups">
          <div className="swiper-button-prev slider-arrow-startups">
            <ArrowBackIosNewIcon color="white" style={{ color: "white" }} />
          </div>
          <div className="swiper-button-next slider-arrow-startups">
            <ArrowForwardIosIcon color="white" style={{ color: "white" }} />
          </div>
        </div> */}
      </Swiper>
    </div>
  );
};

export default PopularProducts;

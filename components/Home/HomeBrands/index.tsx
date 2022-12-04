import styles from "./HomeBrand.module.scss";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Keyboard, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";

const HomeBrand = () => {
  return (
    <>
      {/* fashion brands */}
      <div className={`${styles.homebrandContainer}`}>
        <div className="flex justify-between items-center">
          <h2 className=" hidden md:block text-c-black font-semibold">
            Fashion brands in Lagos
          </h2>
          <h2 className="block md:hidden text-c-black font-bold ">On Sale</h2>
          <p className="text-c-red cursor-pointer">View more</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 my-5  gap-5 cursor-pointer">
          <div>
            {/* image */}
            <div className="flex flex-col items-center justify-center">
              <Image
                src={"/images/home_brands/brand1.png"}
                width={200}
                height={90}
                alt="Brand logo"
              />
              {/* detail */}
              <div
                className=" flex flex-col items-center justify-center gap-3  rounded py-3 md:shadow-md "
                style={{ width: "200px" }}
              >
                <h3 className="font-semibold text-sm ">
                  Bob's Home of Fashion
                </h3>
                <button className="bg-c-red text-sm py-2 px-4 w-fit rounded text-white">
                  View products
                </button>
              </div>
            </div>
          </div>

          <div>
            {/* image */}
            <div className="flex flex-col items-center justify-center">
              <Image
                src={"/images/home_brands/brand2.png"}
                width={200}
                height={90}
                alt="Brand logo"
              />
              {/* detail */}
              <div
                className=" flex flex-col items-center justify-center gap-3  rounded py-3 md:shadow-md "
                style={{ width: "200px" }}
              >
                <h3 className="font-semibold text-sm ">
                  Bob's Home of Fashion
                </h3>
                <button className="bg-c-red text-sm py-2 px-4 w-fit rounded text-white">
                  View products
                </button>
              </div>
            </div>
          </div>
          <div>
            {/* image */}
            <div className="flex flex-col items-center justify-center">
              <Image
                src={"/images/home_brands/brand3.png"}
                width={200}
                height={90}
                alt="Brand logo"
              />
              {/* detail */}
              <div
                className=" flex flex-col items-center justify-center gap-3  rounded py-3 md:shadow-md "
                style={{ width: "200px" }}
              >
                <h3 className="font-semibold text-sm ">
                  Bob's Home of Fashion
                </h3>
                <button className="bg-c-red text-sm py-2 px-4 w-fit rounded text-white">
                  View products
                </button>
              </div>
            </div>
          </div>
          <div>
            {/* image */}
            <div className="flex flex-col items-center justify-center">
              <Image
                src={"/images/home_brands/brand1.png"}
                width={200}
                height={90}
                alt="Brand logo"
              />
              {/* detail */}
              <div
                className=" flex flex-col items-center justify-center gap-3  rounded py-3 md:shadow-md "
                style={{ width: "200px" }}
              >
                <h3 className="font-semibold text-sm ">
                  Bob's Home of Fashion
                </h3>
                <button className="bg-c-red text-sm py-2 px-4 w-fit rounded text-white">
                  View products
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* popular Categories */}

      <div className={`${styles.popularCatContainer}`}>
        <h2 className=" text-c-black font-semibold">Popular Categories</h2>
        {/* <div className="grid grid-cols-1 md:grid-cols-4  my-5  md:gap-5 cursor-pointer"> */}
        <Swiper
          cssMode={true}
          // slidesPerView={4}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
          navigation={true}
          spaceBetween={10}
          keyboard={true}
          // pagination={true}
          modules={[Navigation, Keyboard]}
        >
          <SwiperSlide>
            <div
              className="max-w-xs mx-auto relative overflow-y-hidden"
              style={{ height: "180px" }}
            >
              <div>
                <Image
                  src={"/images/homePopular/pop1.png"}
                  width={320}
                  height={200}
                  alt="Popular Items"
                />
              </div>
              <div className="bg-b-overlay absolute top-2 rounded-r-xl right-3 h-full bottom-0  text-white px-5">
                <div className="relative flex flex-col  justify-center mt-24">
                  <h3>Fashion</h3>
                  <p>10023 products</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="max-w-xs mx-auto  relative overflow-y-hidden"
              style={{ height: "180px" }}
            >
              <div>
                <Image
                  src={"/images/homePopular/pop2.png"}
                  width={320}
                  height={200}
                  alt="Popular Items"
                />
              </div>
              <div className="bg-b-overlay absolute top-2 rounded-r-xl right-3 h-full bottom-0 text-white px-5">
                <div className="relative flex flex-col  justify-center mt-24">
                  <h3>Food & Drinks</h3>
                  <p>10023 products</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="max-w-xs mx-auto relative overflow-y-hidden"
              style={{ height: "180px" }}
            >
              <div>
                <Image
                  src={"/images/homePopular/pop3.png"}
                  width={320}
                  height={200}
                  alt="Popular Items"
                />
              </div>
              <div className="bg-b-overlay absolute top-2 rounded-r-xl right-3 h-full bottom-0  text-white px-5 ">
                <div className=" relative flex flex-col  justify-center mt-24">
                  <h3>Real Estates</h3>
                  <p>10023 products</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="max-w-xs mx-auto relative overflow-y-hidden"
              style={{ height: "180px" }}
            >
              <div>
                <Image
                  src={"/images/homePopular/pop4.png"}
                  width={320}
                  height={200}
                  alt="Popular Items"
                />
              </div>
              <div className="bg-b-overlay absolute top-2 rounded-r-xl right-3 h-full bottom-0  text-white px-5">
                <div className="relative flex flex-col  justify-center mt-24">
                  <h3>Food & Drinks</h3>
                  <p>10023 products</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="max-w-xs mx-auto relative overflow-y-hidden"
              style={{ height: "180px" }}
            >
              <div>
                <Image
                  src={"/images/homePopular/pop1.png"}
                  width={320}
                  height={200}
                  alt="Popular Items"
                />
              </div>
              <div className="bg-b-overlay absolute top-2 rounded-r-xl right-3 h-full bottom-0  text-white px-5">
                <div className="relative flex flex-col  justify-center mt-24">
                  <h3>Fashion</h3>
                  <p>10023 products</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="max-w-xs mx-auto  relative overflow-y-hidden"
              style={{ height: "180px" }}
            >
              <div>
                <Image
                  src={"/images/homePopular/pop2.png"}
                  width={320}
                  height={200}
                  alt="Popular Items"
                />
              </div>
              <div className="bg-b-overlay absolute top-2 rounded-r-xl right-3 h-full bottom-0 text-white px-5">
                <div className="relative flex flex-col  justify-center mt-24">
                  <h3>Food & Drinks</h3>
                  <p>10023 products</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="max-w-xs mx-auto relative overflow-y-hidden"
              style={{ height: "180px" }}
            >
              <div>
                <Image
                  src={"/images/homePopular/pop3.png"}
                  width={320}
                  height={200}
                  alt="Popular Items"
                />
              </div>
              <div className="bg-b-overlay absolute top-2 rounded-r-xl right-3 h-full bottom-0  text-white px-5 ">
                <div className=" relative flex flex-col  justify-center mt-24">
                  <h3>Real Estates</h3>
                  <p>10023 products</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="max-w-xs mx-auto relative overflow-y-hidden"
              style={{ height: "180px" }}
            >
              <div>
                <Image
                  src={"/images/homePopular/pop4.png"}
                  width={320}
                  height={200}
                  alt="Popular Items"
                />
              </div>
              <div className="bg-b-overlay absolute top-2 rounded-r-xl right-3 h-full bottom-0  text-white px-5">
                <div className="relative flex flex-col  justify-center mt-24">
                  <h3>Food & Drinks</h3>
                  <p>10023 products</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* </div> */}
    </>
  );
};

export default HomeBrand;

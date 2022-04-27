import Image from "next/image";
import ProductForm from "./ProductForm";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Mousewheel, Pagination } from "swiper";
import RecommendedList from "./RecommendedList";
import ProductOptions from "./ProductOptions";
import ProductReviews from "./ProductReviews";
import Hero from "./Hero";

export default function ProductPageContent({ product }) {
  const images = [];

  product.images.edges.map((image, i) => {
    images.push(
      <SwiperSlide key={`slide-${i}`}>
        <Image
          src={image.node.originalSrc}
          alt={image.node.altText}
          layout="fill"
          objectFit="cover"
        />
      </SwiperSlide>
    );
  });

  SwiperCore.use([Mousewheel, Pagination]);

  return (
    <>
      <Hero />
      <div style={{ height: "70vh" }} className="hight"></div>
      <div className="bg-black colornav z-50">
        <div className="flex flex-col justify-center items-center space-y-8 md:flex-row md:items-start md:space-y-0 md:space-x-4 lg:space-x-8 max-w-6xl w-11/12 mx-auto">
          <div className="w-full max-w-md border bg-white rounded-2xl overflow-hidden shadow-lg md:w-1/2">
            <div className="relative h-96 w-full">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#000",
                  "--swiper-pagination-color": "#000",
                }}
                direction={"vertical"}
                pagination={{ clickable: true }}
                spaceBetween={30}
                mousewheel={{ mousewheel: true }}
                className="h-96 rounded-2xl "
                loop="true"
              >
                {images}
              </Swiper>
            </div>
          </div>
          <ProductForm product={product} />
        </div>
        <div
          style={{ zIndex: "40", background: "black" }}
          className="dis z-40 colornav"
        >
          <p className=" mt-10 p-10 relative space-y-8 md:space-x-4 lg:space-x-8 max-w-3xl rounder-md border-2 w-11/12 mx-auto text-white colornav z-40 bg-black">
            {product.description}
          </p>
        </div>

        <RecommendedList
          current={product.id}
          products={product.collections.edges[0].node.products.edges}
        />
      </div>
    </>
  );
}

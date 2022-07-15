import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import CarouselHeader from "./CarouselHeader";
import ProductCard from "./ProductCard";

import homepageProducts from "../data/homepageProducts";

const Carousel = () => {
	return (
		<div className="flex flex-col justify-center items-center py-4">
			<CarouselHeader />
			<div className="max-w-[95%] my-5 ">
				<Swiper
					// install Swiper modules
					slidesPerView={3}
					modules={[Navigation, Scrollbar]}
					navigation={{
						nextEl: ".swiper-button-next",
						prevEl: ".swiper-button-prev",
					}}
					scrollbar={{
						draggable: true,
						hide: true,
					}}
					spaceBetween={30}
					breakpoints={{
						240: {
							slidesPerView: 1,
							spaceBetween: 30,
						},
						640: {
							slidesPerView: 3,
							spaceBetween: 30,
						},
					}}
				>
					{homepageProducts.map((product) => (
						<SwiperSlide key={product.productName}>
							<ProductCard product={product} />
						</SwiperSlide>
					))}

					<div
						className="swiper-button-next
            bg-slate-100 shadow-md p-7 pl-8 rounded-full md:opacity-100 opacity-30
           hover:bg-slate-200 duration-300 shadow-slate-400"
						style={{ color: "gray" }}
					></div>
					<div
						className="swiper-button-prev
            bg-slate-100 shadow-md p-7 pr-8 rounded-full md:opacity-100 opacity-30
           hover:bg-slate-200 duration-300 shadow-slate-400"
						style={{ color: "gray" }}
					></div>
				</Swiper>
			</div>
		</div>
	);
};

export default Carousel;

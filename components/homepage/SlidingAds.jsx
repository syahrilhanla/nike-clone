import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/autoplay";

const SlidingAds = () => {
	return (
		<div
			className="flex flex-col items-center w-full h-fit py-3
     bg-slate-200 text-black text-center shadow-slate-300 shadow-md"
		>
			<div className="w-full">
				<Swiper
					slidesPerView={1}
					modules={[Autoplay]}
					autoplay={{ delay: 2500 }}
				>
					<SwiperSlide>
						<h3>Students now get 10% off</h3>
						<span className="w-full flex justify-center">
							<p className="text-sm font-light border-b border-black w-fit cursor-pointer">
								Learn More
							</p>
						</span>
					</SwiperSlide>
					<SwiperSlide>
						<h3>Save up to 40%</h3>
						<span className="w-full flex justify-center">
							<p className="text-sm font-light w-fit">
								Shop All Our New Markdowns.
								<span className="border-b border-black cursor-pointer">
									{" "}
									Learn More
								</span>
							</p>
						</span>
					</SwiperSlide>
					<SwiperSlide>
						<h3>Free Delivery</h3>
						<span className="w-full flex justify-center">
							<p className="text-sm font-light w-fit">
								Applies to order $200 or more.
								<span className="border-b border-black cursor-pointer">
									{" "}
									Learn More
								</span>
							</p>
						</span>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};

export default SlidingAds;

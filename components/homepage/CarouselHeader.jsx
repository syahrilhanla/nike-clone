import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const CarouselHeader = () => {
	return (
		<header className="w-full flex flex-row justify-between items-center px-8 md:px-16">
			<h2 className="w-fit text-2xl font-medium">Shop New Releases</h2>
			{/* Carousel Navigation */}
			{/* <div className="w-fit">
				<button
					className="rounded-full p-2 bg-slate-200 shadow-md
           hover:bg-slate-300 duration-300 shadow-slate-400 mr-3"
				>
					<BsChevronLeft />
				</button>
				<button
					className="rounded-full p-2 bg-slate-200 shadow-md
          hover:bg-slate-300 duration-300 shadow-slate-400"
				>
					<BsChevronRight />
				</button>
			</div> */}
		</header>
	);
};

export default CarouselHeader;

import ShopButton from "../common/ShopButton";

const Hero = ({ boldText, paragraph, image }) => {
	return (
		<section className="w-full flex flex-col justify-center items-center">
			<div className="w-[90%] bg-cover bg-no-repeat bg-center">
				<img
					src={`/homepage/${image.mobile}`}
					className="w-full rounded-sm md:hidden block"
					alt={image}
				/>
				<img
					src={`/homepage/${image.desktop}`}
					className="w-full rounded-sm md:block hidden"
					alt={image}
				/>
			</div>
			<div className=" flex flex-col gap-4 justify-center items-center py-6 px-4">
				<h1 className="md:text-6xl md:font-bold text-3xl text-center font-semibold ">
					{boldText}
				</h1>
				<p className="text-center">{paragraph}</p>
				<ShopButton />
			</div>
		</section>
	);
};

export default Hero;

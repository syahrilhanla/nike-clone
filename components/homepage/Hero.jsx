import ShopButton from "../common/ShopButton";

const Hero = () => {
	return (
		<div className="w-full flex flex-col justify-center items-center">
			<div className="relative w-[90%] bg-cover bg-no-repeat bg-center">
				<img
					src={"/homepage/yoga-guy.webp"}
					className="w-full rounded-sm"
					alt="Yoga"
				/>
			</div>
			<div className=" flex flex-col gap-4 justify-center items-center py-6">
				<h1 className="md:text-6xl md:font-extrabold text-3xl font-semibold ">
					PEACE THROUGH ANY POSE
				</h1>
				<p>Nike Yoga Soul Festival Collection</p>
				<ShopButton />
			</div>
		</div>
	);
};

export default Hero;

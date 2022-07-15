import ShopButton from "./ShopButton";

const DynamicSection = ({ data }) => {
	return (
		<section
			className={`grid md:grid-cols-${data.length} w-full md:px-8
       px-4 gap-3 md:pb-12 pb-8`}
		>
			{data.map((item) => (
				<div
					className="relative w-full h-fit bg-cover bg-no-repeat bg-center rounded-xl"
					key={item.text}
				>
					<img
						src={`/homepage/${item.sectionImage}`}
						className="w-full rounded-sm"
						alt={""}
					/>
					<div className="min-w-[80%] text-white absolute bottom-14 left-10">
						<h4 className="text-2xl font-medium mb-3">{item.text}</h4>
						<ShopButton variant="white" />
					</div>
				</div>
			))}
		</section>
	);
};

export default DynamicSection;

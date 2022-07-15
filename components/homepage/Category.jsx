const Category = () => {
	return (
		<div className="flex justify-center items-center w-full h-fit mt-5 md:py-4 py-2">
			<div className="md:relative flex-col w-[90%]">
				<h2 className="md:absolute md:left-0 md:text-center text-3xl font-normal">
					Men
				</h2>
				<div className="w-full flex justify-center py-1">
					<ul className="flex flex-row text-xl justify-evenly md:gap-12 gap-10 w-64">
						<li>Shoes</li>
						<li>Clothing</li>
						<li>Gear</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Category;

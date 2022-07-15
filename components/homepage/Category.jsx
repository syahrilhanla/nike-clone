const Category = () => {
	return (
		<div className="flex justify-center items-center w-full h-24">
			<div className="relative w-[90%]">
				<h2 className="absolute left-0 text-center text-3xl font-normal">
					Men
				</h2>
				<div className="w-full flex justify-center py-1">
					<ul className="flex flex-row text-xl justify-evenly gap-12 w-64">
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

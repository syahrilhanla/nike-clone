const ProductCard = ({ product }) => {
	return (
		<div
			className=" bg-cover bg-no-repeat 
    bg-center rounded-md flex flex-col pb-4"
		>
			<img
				src={`/products/shoes/${product.productImg}`}
				className="w-full rounded-sm"
				alt={product.productName}
			/>
			<div className="grid grid-cols-[3fr_1fr] md:px-1 px-3">
				<div>
					<h4>{product.productName}</h4>
					<p className="text-slate-400">{product.category}</p>
				</div>
				<h4 className="text-right text-2xl">${product.price}</h4>
			</div>
		</div>
	);
};

export default ProductCard;

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
			<div className="grid grid-cols-[3fr_1fr]">
				<h4>{product.productName}</h4>
				<h4>Rp. 1,729,000</h4>
				<p>{product.category}</p>
			</div>
		</div>
	);
};

export default ProductCard;

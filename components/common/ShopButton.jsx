import React from "react";

const ShopButton = ({ variant = "black" }) => {
	return (
		<button
			className={`rounded-3xl bg-${variant} ${
				variant === "white" ? "text-black" : "text-white"
			} text-lg
			 font-normal text-center py-1 px-6 w-fit`}
		>
			Shop
		</button>
	);
};

export default ShopButton;

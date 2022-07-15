import React from "react";

const SectionHeader = ({ heading }) => {
	return (
		<section className="w-full flex flex-row justify-between items-center px-8 md:px-16 md:mb-8 mb-2">
			<h2 className="w-fit text-2xl font-medium">{heading}</h2>
		</section>
	);
};

export default SectionHeader;

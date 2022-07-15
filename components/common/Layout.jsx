import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
	return (
		<div className="bg-white min-w-full min-h-full">
			<Navbar />
			{children}
		</div>
	);
};

export default Layout;

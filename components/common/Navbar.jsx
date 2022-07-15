import { BsHeart } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";
import SearchBar from "./SearchBar";

const Navbar = () => {
	return (
		<nav className="w-full h-[74px] flex justify-between flex-row md:px-12 px-2 py-2">
			{/* Logo */}
			<div className="max-w-[64px] max-h-[64px] flex justify-center items-center">
				<img src="/logo/nike-logo.svg" alt="Nike Logo" />
			</div>
			{/* Logo */}

			<div className="flex flex-row items-center px-4">
				<SearchBar />
				<div className="flex flex-row gap-4 text-xl">
					<BsHeart />
					<HiOutlineShoppingBag />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

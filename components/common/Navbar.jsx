import { BsHeart } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";
import SearchBar from "./SearchBar";

const Navbar = () => {
	return (
		<nav className="w-full h-[74px] flex justify-between flex-row px-12 py-2">
			{/* Logo */}
			<img src="/logo/nike-logo.svg" alt="Nike Logo" width={64} height={64} />
			{/* Logo */}

			<div className="flex flex-row items-center px-4">
				<SearchBar />
				<div className="flex flex-row gap-4">
					<BsHeart />
					<HiOutlineShoppingBag />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

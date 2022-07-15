import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
	return (
		<div
			className="flex justify-center items-center rounded-2xl
       bg-slate-100 w-fit h-8 px-3 mr-4"
		>
			<BsSearch className="text-slate-400" />
			<input
				type="text"
				placeholder="Search"
				className="border-none outline-none w-36 bg-transparent ml-2 duration-300 focus:w-52"
			/>
		</div>
	);
};

export default SearchBar;

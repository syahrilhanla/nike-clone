import Layout from "../components/common/Layout";
import Hero from "../components/homepage/Hero";
import SlidingAds from "../components/homepage/SlidingAds";

export default function Home() {
	return (
		<Layout>
			<SlidingAds />

			{/* Category */}
			<div className="flex justify-center items-center w-full h-24">
				<div className="relative w-[90vw]">
					<h2 className="absolute left-0 text-center text-3xl font-normal">
						Men
					</h2>
					<div className="w-full flex justify-center">
						<ul className="flex flex-row text-xl justify-evenly gap-12 w-64">
							<li>Shoes</li>
							<li>Clothing</li>
							<li>Gear</li>
						</ul>
					</div>
				</div>
			</div>

			<Hero />
		</Layout>
	);
}

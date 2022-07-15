import DynamicSection from "../components/common/DynamicSection";
import SectionHeader from "../components/common/SectionHeader";
import Carousel from "../components/homepage/Carousel";
import Category from "../components/homepage/Category";
import Hero from "../components/homepage/Hero";
import SlidingAds from "../components/homepage/SlidingAds";

export default function Home() {
	const data1 = [
		{
			text: "Have A Nike Day: Sunshine for Days",
			sectionImage: "green-socks.jpg",
		},
		{
			text: "Basketball Essentials",
			sectionImage: "dribbling-girl.webp",
		},
	];

	const data2 = [
		{
			sectionImage: "smiling-black-guy.webp",
		},
		{
			sectionImage: "jumping-green.webp",
		},
		{
			sectionImage: "orange-asian.webp",
		},
	];

	return (
		<>
			<SlidingAds />
			<Category />
			<Hero
				boldText={"PEACE THROUGH ANY POSE"}
				paragraph={"Nike Yoga Soul Festival Collection"}
				image={{ desktop: "yoga-guy.webp", mobile: "mobile-yoga.webp" }}
			/>

			{/* Product Carousel */}
			<Carousel />
			{/* Product Carousel */}

			{/* HERO 2 */}
			<SectionHeader heading={"Trending"} />
			<Hero
				boldText={"NEVER DONE SUMMERING"}
				paragraph={
					"Play. Let loose. Repeat. This season, turn it up in styles made for living life to the max."
				}
				image={{
					desktop: "backflip-guy.webp",
					mobile: "straight-flip-guy.webp",
				}}
			/>
			{/* HERO 2 */}

			{/* Section 3 */}
			<SectionHeader heading={"Featured"} />
			<DynamicSection data={data1} />
			{/* Section 3 */}

			{/* HERO 4 */}
			<SectionHeader heading={"The Latest"} />
			<Hero
				boldText={"STAY GROUNDED"}
				paragraph={
					"Take on the terrain in the Nike React Pegasus Trail 4, featuring comfort, support and traction you can trust - from road to trail and back."
				}
				image={{
					desktop: "running-guy.webp",
					mobile: "running-guy-mobile.jpg",
				}}
			/>
			{/* HERO 4 */}

			{/* Section 5 */}
			<SectionHeader heading={"The Essentials"} />
			<DynamicSection data={data2} />
			{/* Section 5 */}
		</>
	);
}

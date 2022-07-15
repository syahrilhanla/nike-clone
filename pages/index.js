import Layout from "../components/common/Layout";
import Category from "../components/homepage/Category";
import Hero from "../components/homepage/Hero";
import SlidingAds from "../components/homepage/SlidingAds";

export default function Home() {
	return (
		<Layout>
			<SlidingAds />
			<Category />
			<Hero />
		</Layout>
	);
}

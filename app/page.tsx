import Hero from "@/components/sections/hero";
import Problem from "@/components/sections/problem";

export default function Home() {
	return (
		<div className="">
			<Hero />
			<div className="max-w-7xl mx-auto">
				<Problem />
			</div>
			<div className="h-screen"></div>
		</div>
	);
}

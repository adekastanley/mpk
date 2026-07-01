import Image from "next/image";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Magnetic } from "../motion-primitives/magnetic";

export default function Hero() {
	const springOptions = { bounce: 0.1 };
	return (
		<div className=" bg-amber-400/10 mask-b-from-90% mask-b-to-100% overflow-hidden  max-md:pt-5">
			<div className="h-screen text-center max-w-7xl mx-auto lg:min-w-7xl  gap-4 w-full flex flex-col justify-end items-center relative">
				<div className="bg-purple-300 absolute bottom-50">
					<div className="absolute bg-mpk-primary w-100 h-100 -z-1 rounded-full left-5    bg-radial-[at_40%_100%] opacity-50 blur-3xl from-mpk-primary via-mpk-primary  to-transparent "></div>
					<div className="absolute  w-100 h-100 -z-1 right-5 blur-3xl rounded-full top bg-radial-[at_50%_100%] opacity-30 from-mpk-primary via-blue-400  to-transparent"></div>
				</div>
				<div className="bg-purple-300 absolute -top-50">
					<div className="absolute bg-mpk-primary w-100 h-100 -z-1 rounded-full left-5    bg-radial-[at_40%_100%] opacity-50 blur-3xl from-mpk-primary via-mpk-primary  to-transparent "></div>
					<div className="absolute  w-100 h-100 -z-1 right-5 blur-3xl rounded-full top bg-radial-[at_50%_100%] opacity-30 from-mpk-primary via-blue-400  to-transparent"></div>
				</div>
				<Badge
					variant={"ghost"}
					className="outline-mpk-primary/30 outline-1   font-sans uppercase text-xs rounded-4xl font-light px-4 py-3"
				>
					My Period Companion.
				</Badge>
				<h1 className="lg:text-7xl text-4xl lg:px-40  font-sans   ">
					A friendly period companion, always close by.
				</h1>
				<div className="   lg:px-70 ">
					<p className="md:text-xl  ">
						Access private, safe support through WhatsApp, IVR voice calls, SMS,
						or the First Period Toolkit.
					</p>
				</div>
				<div className=" flex gap-5 ">
					<Magnetic
						intensity={0.2}
						springOptions={springOptions}
						actionArea="global"
						range={200}
					>
						<Button
							size={"lg"}
							className=" rounded-4xl p-6 bg-mpk-primary hover:bg-mpk-primary transition-all duration-200 ease-in-out  hover:scale-110"
						>
							Get The App
						</Button>
					</Magnetic>

					<Button
						size={"lg"}
						className=" bg-transparent rounded-4xl p-6  border-2 border-mpk-primary text-mpk-primary transition-all duration-200 ease-in-out  hover:bg-mpk-primary hover:text-white"
					>
						Get Help
					</Button>
				</div>
				<div>
					<Image
						src={"/images/hand1.png"}
						width={400}
						height={400}
						alt="period companion chat"
						className="mask-b-from-80% mask-b-to-100% "
					/>
				</div>
			</div>
		</div>
	);
}

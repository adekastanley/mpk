import Image from "next/image";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

export default function Hero() {
	return (
		<div className="h-screen text-center lg:min-w-7xl  gap-2 w-full flex flex-col justify-end items-center relative">
			<div className="bg-purple-300 absolute bottom-50">
				<div className="absolute bg-mpk-primary w-100 h-100 -z-1 rounded-full left-5   bg-radial-[at_50%_75%] blur-3xl from-mpk-primary via-blue-400  to-transparent "></div>
				<div className="absolute bg-red-900 w-100 h-100 -z-1 right-5 blur-3xl rounded-full top bg-radial-[at_50%_75%] from-mpk-primary via-blue-400  to-transparent"></div>
			</div>
			<Badge className=" rounded-4xl px-2">My Period Companion</Badge>
			<h1 className="lg:text-7xl text-5xl lg:px-40   font-sans   ">
				A friendly period companion, always close by.
			</h1>
			<div className="   lg:px-70 ">
				<p className="md:text-xl  ">
					Access private, safe support through WhatsApp, IVR voice calls, SMS,
					or the First Period Toolkit.
				</p>
			</div>
			<div>
				<Button size={"lg"}>Get The App</Button>
				<Button size={"lg"}>Get Help</Button>
			</div>
			<div>
				<Image
					src={"/images/hand1.png"}
					width={400}
					height={400}
					alt="period companion chat"
				/>
			</div>
		</div>
	);
}

import Image from "next/image";
import Link from "next/link";

export default function Logo() {
	return (
		<Link href={"/"} className="absolute top-10 left-10 z-50">
			{/* <Image
				src="/images/logo.png"
				alt="Logo"
				width={100}
				height={100}
			/> */}
			Logo
		</Link>
	);
}

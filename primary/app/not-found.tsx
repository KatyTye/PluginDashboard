import { FaHouseChimney } from "react-icons/fa6";
import { TbError404 } from "react-icons/tb";
import Link from "next/link";

export default function NotFound() {

	return (<body style={{backgroundColor:"var(--background-color)"}}>
		<div className="m-auto full-image p-2 bg-transparent rounded-full w-2/3 max-w-50 mb-10">
			<TbError404 className="text-orange-500" />
		</div>
		<h2 className="text-2xl text-center font-bold text-white">Not Found</h2>
		<p className="text-(--text-second-color) mt-5 text-center">
			<span className="block">
				We couldn't find the page your searching for,
			</span>
			<span className="block">
				you can return by clicking the button below.
			</span>
		</p>
		<Link href={"/"} className="m-auto mt-5 flex gap-2 w-fit bg-(--special-color) rounded-lg p-5 pl-7 pr-7 font-bold text-white">
			<span className="full-image">
				<FaHouseChimney />
			</span>
			<span>
				Go Back Home
			</span>
		</Link>
	</body>)
}
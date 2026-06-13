import { FaHouseChimney } from "react-icons/fa6";
import { MdOutlineError } from "react-icons/md";
import { Link } from "react-router";

export default function NotFound() {

	return (<>
		<div className="m-auto mt-10 mb-10 full-image p-2 bg-(--background-color) shadow-[0_0_50px_5px_#ff6467] rounded-full w-2/3 max-w-50 shadow-red-400">
			<MdOutlineError className="text-red-400" />
		</div>
		<h2 className="text-2xl text-center font-bold">404 - Not Found</h2>
		<p className="text-(--text-second-color) mt-5 text-center">
			<span className="block">
				We couldn't find the page your searching for,
			</span>
			<span className="block">
				you can return by clicking the button below.
			</span>
		</p>
		<Link to={"/"} className="m-auto mt-5 flex gap-2 w-fit bg-(--special-color) rounded-lg p-5 pl-7 pr-7 font-bold">
			<span className="full-image">
				<FaHouseChimney />
			</span>
			<span>
				Go Back Home
			</span>
		</Link>
	</>)
}
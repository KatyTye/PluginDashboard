import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineSettings } from "react-icons/md";
import { Link, NavLink } from "react-router";

export default function Header() {

	return (<header className="top-content grid grid-cols-3 items-center bg-(--background-second-color) p-4">

		<Link to={"/"} className="text-2xl font-bold w-fit hover:text-(--special-color) duration-500">
			SEssentials
		</Link>

		<nav className="flex gap-10 justify-center">
			<NavLink to={"/"} className="border-b-2 border-transparent transition-all [&.active]:border-(--special-color) 
			hover:border-(--special-color) duration-500">
				Home
			</NavLink>
			<NavLink to={"/features"} className="border-b-2 border-transparent transition-all [&.active]:border-(--special-color) 
			hover:border-(--special-color) duration-500">
				Features
			</NavLink>
			<NavLink to={"/docs"} className="border-b-2 border-transparent transition-all [&.active]:border-(--special-color) 
			hover:border-(--special-color) duration-500">
				Docs
			</NavLink>
			<NavLink to={"/support"} className="border-b-2 border-transparent transition-all [&.active]:border-(--special-color) 
			hover:border-(--special-color) duration-500">
				Support
			</NavLink>
		</nav>

		<div className="flex gap-10 ml-auto">
			<NavLink to={"/profile"} className="w-6 [&.active]:text-(--special-color) hover:text-(--special-color) duration-500">
				<FaRegUserCircle />
			</NavLink>
			<button className="cursor-pointer w-6 [&.active]:text-(--special-color) hover:text-(--special-color) duration-500">
				<MdOutlineSettings />
			</button>
		</div>
	</header>)
}
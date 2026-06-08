import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineSettings } from "react-icons/md";
import { Link, NavLink } from "react-router";

export default function Header() {

	return (<header className="top-content grid gap-5 md:gap-0 md:grid-cols-3 items-center bg-(--background-second-color) p-4
		md:pl-20 md:pr-20 justify-center grid-cols-1">

		<Link to={"/"} className="text-2xl text-center font-bold md:w-fit hover:text-(--special-color) duration-500">
			SEssentials
		</Link>

		<nav className="grid gap-5 md:gap-10 justify-center md:grid-cols-3 md:flex">
			<NavLink to={"/features"} className="border-b-2 border-transparent transition-all [&.active]:border-(--special-color) 
			hover:border-(--special-color) duration-500 [&.active]:text-(--text-color) text-(--text-second-color) text-center">
				Features
			</NavLink>
			<NavLink to={"/docs"} className="border-b-2 border-transparent transition-all [&.active]:border-(--special-color) 
			hover:border-(--special-color) duration-500 [&.active]:text-(--text-color) text-(--text-second-color) text-center">
				Documentation
			</NavLink>
			<NavLink to={"/support"} className="border-b-2 border-transparent transition-all [&.active]:border-(--special-color) 
			hover:border-(--special-color) duration-500 [&.active]:text-(--text-color) text-(--text-second-color) text-center">
				Support
			</NavLink>
		</nav>

		<div className="md:flex gap-10 justify-center ml-auto hidden">
			<NavLink to={"/profile"} className="w-6 [&.active]:text-(--text-color) hover:text-(--special-color)
			duration-500 text-(--text-second-color)">
				<FaRegUserCircle />
			</NavLink>
			<button className="cursor-pointer w-6 [&.active]:text-(--text-color) hover:text-(--special-color)
			duration-500 text-(--text-second-color)">
				<MdOutlineSettings />
			</button>
		</div>
	</header>)
}
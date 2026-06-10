import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineSettings } from "react-icons/md";
import { Link, NavLink } from "react-router";

export default function Header() {
	const [phoneOpen, setPhoneOpen] = useState(false)

	return (<header className={`top-content grid gap-5 md:gap-0 md:grid-cols-3 items-center bg-(--background-second-color) p-4
		lg:pl-20 lg:pr-20 transition-all duration-700 justify-center grid-cols-1 not-md:h-75 ${phoneOpen ? "" : "nogap"}`}>

		<Link to={"/"} className="text-2xl text-center font-bold md:w-fit hover:text-(--special-color) duration-500">
			SEssentials
		</Link>

		<nav className={`grid gap-5 md:gap-10 justify-center md:grid-cols-3 md:flex w-fit h-full transition-all
			${phoneOpen ? "" : "md:noshow"} justify-self-center overflow-hidden`}>
			<NavLink to={"/features"} className="border-b-2 w-fit m-auto border-transparent transition-all [&.active]:border-(--special-color) 
			hover:border-(--special-color) duration-500 [&.active]:text-(--text-color) text-(--text-second-color) text-center">
				Features
			</NavLink>
			<NavLink to={"/docs"} className="border-b-2 w-fit m-auto border-transparent transition-all [&.active]:border-(--special-color) 
			hover:border-(--special-color) duration-500 [&.active]:text-(--text-color) text-(--text-second-color) text-center">
				Documentation
			</NavLink>
			<NavLink to={"/downloads"} className="border-b-2 w-fit m-auto border-transparent transition-all [&.active]:border-(--special-color) 
			hover:border-(--special-color) duration-500 [&.active]:text-(--text-color) text-(--text-second-color) text-center">
				Downloads
			</NavLink>
			<NavLink to={"/support"} className="border-b-2 w-fit m-auto border-transparent transition-all [&.active]:border-(--special-color) 
			hover:border-(--special-color) duration-500 [&.active]:text-(--text-color) text-(--text-second-color) text-center">
				Support
			</NavLink>
		</nav>

		<button onClick={() => setPhoneOpen(!phoneOpen)} className="m-auto md:hidden">
			<IoIosArrowDown className={`w-8 h-8 transition-all duration-500 ${phoneOpen ? "rotate-180" : ""}`} />
		</button>

		<div className="md:flex gap-10 justify-center ml-auto hidden">
			<NavLink to={"/profile"} className="w-6 [&.active]:text-(--text-color) hover:text-(--special-color)
			duration-500 text-(--text-second-color) full-image">
				<FaRegUserCircle />
			</NavLink>
			<button className="cursor-pointer w-6 [&.active]:text-(--text-color) hover:text-(--special-color)
			duration-500 text-(--text-second-color) full-image">
				<MdOutlineSettings />
			</button>
		</div>
	</header>)
}
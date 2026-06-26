import { MdOutlineSettings } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { Link, NavLink } from "react-router";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

export default function Header() {
	const [phoneOpen, setPhoneOpen] = useState(false)
	const [settings, setSettings] = useState(false)
	const [cleared, setCleared] = useState(false)
	
	// @ts-ignore
	const [lightMode, setlightMode] = useState(false)

	// @ts-ignore
	const [useCache, setUseCache] = useState(true)

	function clearCache() {
		setCleared(true)
		localStorage.clear()

		setTimeout(() => {
			setCleared(false)
		}, 1000)
	}

	return (<header className={`top-content grid gap-5 md:gap-0 md:grid-cols-3 items-center bg-(--background-second-color) p-4
		lg:pl-20 lg:pr-20 transition-all duration-700 justify-center grid-cols-1 not-md:h-75 ${phoneOpen ? "" : "nogap"}`}>

		<Link to={"/"} className="text-2xl text-center font-bold md:w-fit hover:text-(--special-color) duration-500"
			rel="alternate">SEssentials
		</Link>

		<nav className={`grid gap-5 md:gap-10 justify-center md:grid-cols-3 md:flex w-fit h-full transition-all
			${phoneOpen ? "" : "md:noshow"} justify-self-center overflow-hidden`}>
			{/* <NavLink to={"/features"} className="border-b-2 w-fit m-auto border-transparent transition-all [&.active]:border-(--special-color) 
			hover:border-(--special-color) duration-500 [&.active]:text-(--text-color) text-(--text-second-color) text-center"
				rel="alternate">Features
			</NavLink> */}
			<NavLink to={"/downloads"} className="border-b-2 w-fit m-auto border-transparent transition-all [&.active]:border-(--special-color) 
			hover:border-(--special-color) duration-500 [&.active]:text-(--text-color) text-(--text-second-color) text-center"
				rel="alternate">Downloads
			</NavLink>
			<NavLink to={"/docs"} className="border-b-2 w-fit m-auto border-transparent transition-all [&.active]:border-(--special-color) 
			hover:border-(--special-color) duration-500 [&.active]:text-(--text-color) text-(--text-second-color) text-center"
				rel="alternate">Documentation
			</NavLink>
			<NavLink to={"/support"} className="border-b-2 w-fit m-auto border-transparent transition-all [&.active]:border-(--special-color) 
			hover:border-(--special-color) duration-500 [&.active]:text-(--text-color) text-(--text-second-color) text-center"
				rel="alternate">Support
			</NavLink>
		</nav>

		<button onClick={() => setPhoneOpen(!phoneOpen)} className="m-auto md:hidden">
			<IoIosArrowDown className={`w-8 h-8 transition-all duration-500 ${phoneOpen ? "rotate-180" : ""}`} />
		</button>

		<div className="md:flex gap-10 justify-center ml-auto hidden">
			<NavLink to={"/profile"} className="w-6 [&.active]:text-(--text-color) hover:text-(--special-color)
			duration-500 text-(--text-second-color) full-image" rel="alternate">
				<FaRegUserCircle />
			</NavLink>
			<button className="cursor-pointer [&.active]:text-(--text-color) hover:text-(--special-color)
			duration-500 text-(--text-second-color) full-image relative" >
				<div onClick={() => setSettings(!settings)}>
					<MdOutlineSettings className={`w-6 h-6 ${settings && " text-(--special-color)" || ""}`} />
				</div>
				<div className={`absolute w-65 z-10 right-0/1 flex flex-col top-20 rounded-lg p-5 bg-(--background-second-color) cursor-default
					gap-5 ${settings && " block" || " hidden"}`}>
					<div className="ml-auto text-red-500" onClick={() => setSettings(false)}>
						<IoClose className="cursor-pointer h-7 w-7" />
					</div>
					<div className="flex flex-col gap-5 border-(--special-color) border-2 p-2 rounded-lg">
						<p className="text-(--special-color) font-bold">Comming Soon</p>
						<div className="flex justify-between items-center">
							<p className="text-white">Light Mode</p>
							<div className="w-12 p-1.25 bg-(--box-background-color) rounded-full flex cursor-pointer">
								<div className={`w-4 h-4 ml-0 transition-all rounded-full${lightMode && " ml-5 bg-green-500" || " bg-red-500"}`}></div>
							</div>
						</div>
						<div className="flex justify-between items-center">
							<p className="text-white">Use Cache</p>
							<div className="w-12 p-1.25 bg-(--box-background-color) rounded-full flex cursor-pointer">
								<div className={`w-4 h-4 ml-0 transition-all rounded-full${useCache && " ml-5 bg-green-500" || " bg-red-500"}`}></div>
							</div>
						</div>
					</div>
					<div className="cursor-pointer bg-(--special-color) text-white font-bold
					rounded-md hover:bg-amber-700 duration-500 transition-all" onClick={() => cleared ? null : clearCache()}>
						{cleared && "Cleared" || "Clear Cache"}
					</div>
				</div>
			</button>
		</div>
	</header>)
}
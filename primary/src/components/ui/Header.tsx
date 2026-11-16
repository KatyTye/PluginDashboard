"use client"

import { getStoredBoolean } from "@/src/lib/utils/client-side"
import { MdOutlineSettings } from "react-icons/md"
import { FaRegUserCircle } from "react-icons/fa"
import { IoIosArrowDown } from "react-icons/io"
import { useEffect, useState } from "react"
import { IoClose } from "react-icons/io5"
import NavLink from "next/link"
import Link from "next/link"

export default function HeaderComponent({setTheme} : { setTheme: (value: boolean) => void }) {
	const [phoneOpen, setPhoneOpen] = useState(false)
	const [settings, setSettings] = useState(false)
	const [isHydrated, setIsHydrated] = useState(false)
	const [useIcon, setUseIcon] = useState(false)
	const [lightMode, setLightMode] = useState(false)
	
	useEffect(() => {
		setIsHydrated(true)
		if (typeof window === "undefined") return

		setUseIcon(getStoredBoolean("settingsUseIcon", false))
		setLightMode(getStoredBoolean("settingsLightMode", false))
		setTheme(lightMode)
	}, [])

	useEffect(() => {
		if (!isHydrated || typeof window === "undefined") return
		window.localStorage.setItem("settingsUseIcon", useIcon.toString())
	}, [isHydrated, useIcon])

	useEffect(() => {
		if (!isHydrated || typeof window === "undefined") return
		window.localStorage.setItem("settingsLightMode", lightMode.toString())
		setTheme(lightMode)
	}, [isHydrated, lightMode])

	return (<header className={`top-content grid gap-5 md:gap-0 md:grid-cols-3 items-center bg-(--background-second-color) p-4
		lg:pl-20 lg:pr-20 transition-all duration-700 justify-center grid-cols-1 not-md:h-75 light:bg-gray-200 ${phoneOpen ? "" : "nogap"}`}>

		{useIcon && <Link href={"/"} className="w-12 h-12 rounded-full overflow-hidden m-auto md:m-0 hover:border-(--special-color)
		border-transparent border-2 transition-[border-color] duration-500" rel="alternate">
			<img src="/favicon.ico" alt="SEssentials Logo" className="w-12 h-auto m-auto md:m-0 transform-[scale(1.5)]" />
		</Link> || <Link href={"/"} className="text-2xl text-center border-none font-bold md:w-fit hover:text-(--special-color) duration-500"
			rel="alternate">SEssentials
		</Link>}

		<nav className={`grid gap-5 md:gap-10 justify-center md:grid-cols-3 md:flex w-fit h-full transition-all
			${phoneOpen ? "" : "md:noshow"} justify-self-center overflow-hidden`}>
			<NavLink href={"/downloads"} className="border-b-2 w-fit m-auto border-transparent transition-all [&.active]:border-(--special-color) 
			hover:border-(--special-color) duration-500 [&.active]:text-(--text-color) text-(--text-second-color) text-center light:text-gray-600"
				rel="alternate">Downloads
			</NavLink>
			<NavLink href={"/docs"} className="border-b-2 w-fit m-auto border-transparent transition-all [&.active]:border-(--special-color) 
			hover:border-(--special-color) duration-500 [&.active]:text-(--text-color) text-(--text-second-color) text-center light:text-gray-600"
				rel="alternate">Documentation
			</NavLink>
			<NavLink href={"/support"} className="border-b-2 w-fit m-auto border-transparent transition-all [&.active]:border-(--special-color) 
			hover:border-(--special-color) duration-500 [&.active]:text-(--text-color) text-(--text-second-color) text-center light:text-gray-600"
				rel="alternate">Support
			</NavLink>
		</nav>

		<button onClick={() => setPhoneOpen(!phoneOpen)} className="m-auto md:hidden">
			<IoIosArrowDown className={`w-8 h-8 transition-all duration-500 ${phoneOpen ? "rotate-180" : ""}`} />
		</button>

		<div className="md:flex gap-10 justify-center ml-auto hidden">
			<NavLink href={"/profile"} className="w-6 [&.active]:text-(--text-color) hover:text-(--special-color)
			duration-500 text-(--text-second-color) light:text-gray-600 full-image" rel="alternate">
				<FaRegUserCircle />
			</NavLink>
			
			<button className="cursor-pointer [&.active]:text-(--text-color) hover:text-(--special-color)
			duration-500 text-(--text-second-color) full-image relative light:text-gray-600" >
				<div onClick={() => setSettings(!settings)}>
					<MdOutlineSettings className={`w-6 h-6 ${settings && " text-(--special-color)" || ""}`} />
				</div>
				<div className={`absolute w-65 z-10 right-0/1 flex flex-col top-20 rounded-lg p-5 bg-(--background-second-color) cursor-default
					gap-5 light:bg-gray-200 duration-700 transition-colors ${settings && " block" || " hidden"}`}>
					<div className="ml-auto text-red-500" onClick={() => setSettings(false)}>
						<IoClose className="cursor-pointer h-7 w-7" />
					</div>
					<div className="flex justify-between items-center">
						<p className="text-white light:text-black">Light Mode</p>
						<div className="w-12 p-1.25 bg-(--box-background-color) rounded-full flex cursor-pointer light:bg-gray-400
							duration-700 transition-colors" onClick={() => setLightMode(!lightMode)}>
							<div className={`w-4 h-4 ml-0 transition-all rounded-full${lightMode && " ml-5 bg-green-500" || " bg-red-500"}`}></div>
						</div>
					</div>
					<div className="flex justify-between items-center">
						<p className="text-white light:text-black">Use Icon</p>
						<div className="w-12 p-1.25 bg-(--box-background-color) rounded-full flex cursor-pointer light:bg-gray-400
							duration-700 transition-colors" onClick={() => setUseIcon(!useIcon)}>
							<div className={`w-4 h-4 ml-0 transition-all rounded-full${useIcon && " ml-5 bg-green-500" || " bg-red-500"}`}></div>
						</div>
					</div>
				</div>
			</button>
		</div>
	</header>)
}
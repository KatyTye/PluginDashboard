import { PiChatsBold } from "react-icons/pi";
import { NavLink } from "react-router";

export default function Footer() {

	return (<footer className="bottom-content flex flex-col gap-10 md:grid md:grid-cols-2 items-center bg-(--background-second-color)
		p-4 md:pl-20 md:pr-20">
		<div>
			<p className="text-center md:text-left">SEssentials</p>
			<p className="text-(--text-second-color) text-[14px] text-center md:text-left">
				© 2026 SEssentials Plugin. All rights reserved.
			</p>
		</div>
		<nav className="flex flex-wrap gap-10 md:ml-auto justify-center">
			<NavLink to={"/contact"} className="border-b-2 border-transparent transition-all [&.active]:border-(--special-color) 
			hover:border-(--special-color) duration-500 text-[14px] [&.active]:text-(--text-color) text-(--text-second-color)">
				Contact Us
			</NavLink>

			<NavLink to={"/terms"} className="border-b-2 border-transparent transition-all [&.active]:border-(--special-color) 
			hover:border-(--special-color) duration-500 text-[14px] [&.active]:text-(--text-color) text-(--text-second-color)">
				Copyright and Terms
			</NavLink>

			<a href="https://discord.gg/xxxxxxxx" target="_blank" className="flex gap-2 text-[14px] items-center">
				<PiChatsBold className="w-3.5 h-3.5" />
				<span>
					Discord
				</span>
			</a>
		</nav>
	</footer>)
}
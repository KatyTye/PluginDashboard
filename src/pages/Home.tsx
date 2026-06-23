import { Link } from "react-router"
import { PiSpeedometerFill } from "react-icons/pi"
import { IoColorPalette } from "react-icons/io5"
import { GiFootprint } from "react-icons/gi"
import { BsSliders2 } from "react-icons/bs"

export default function Home() {

	return (<>
		<figure className="relative overflow-hidden rounded-lg h-150 bg-[url('/images/frontpage.jpg')] bg-cover bg-center">
			<figcaption className="absolute p-5 top-0 w-full h-full flex flex-col items-center justify-center bg-(--semi-transparent)">
				<p className="border-2 rounded-full p-5 pt-1.5 pb-1.5 tracking-widest font-bold text-[12px]
				border-[#ae3d00] bg-[#e8590c73]">
					A NEW VERSION AVAILABLE NOW
				</p>

				<h2 className="text-4xl font-bold text-center mt-5">
					SEssentials: Modern Minecraft Plugin
				</h2>

				<p className="text-center max-w-125 mt-2">
					All-in-one Bukkit essentials plugin built for flexibility, performance, and style. Elevate your community with enterprise-grade server management.
				</p>

				<Link to={"/docs"} className="rounded-lg mt-5 p-4 pl-10 pr-10 font-bold transition-all
				duration-500 bg-(--special-color) hover:bg-amber-700">
					Documentation
				</Link>
			</figcaption>
		</figure>

		<div className="mt-50 grid lg:grid-cols-[2.06fr_1fr] gap-10 justify-center">
			<div className="w-full bg-(--box-background-color) border-(--border-color) p-5 border-2 rounded-2xl">
				<h2 className="text-3xl mb-7 font-bold">Broad Compatibility</h2>
				<p className="text-(--text-second-color) tracking-widest mb-7">
					Optimized for every modern server environment. Zero friction integration for minecraft servers that is supported.
				</p>
				<ul className="flex gap-5 flex-wrap">
					<li className="p-2 text-nowrap pl-5 pr-5 h-fit w-fit rounded-full bg-[#252729] text-[14px] tracking-widest border-2 border-[#ffffff1a]">
						MC 1.19.X
					</li>
					<li className="p-2 text-nowrap pl-5 pr-5 h-fit w-fit rounded-full bg-[#252729] text-[14px] tracking-widest border-2 border-[#ffffff1a]">
						MC 1.20.X
					</li>
					<li className="p-2 text-nowrap pl-5 pr-5 h-fit w-fit rounded-full bg-[#252729] text-[14px] tracking-widest border-2 border-[#ffffff1a]">
						MC 1.21.X
					</li>
					<li className="p-2 text-nowrap pl-5 pr-5 h-fit w-fit rounded-full bg-[#252729] text-[14px] tracking-widest border-2 border-[#ffffff1a]">
						Bukkit
					</li>
					<li className="p-2 text-nowrap pl-5 pr-5 h-fit w-fit rounded-full bg-[#252729] text-[14px] tracking-widest border-2 border-[#ffffff1a]">
						Spigot
					</li>
					<li className="p-2 text-nowrap pl-5 pr-5 h-fit w-fit rounded-full bg-[#252729] text-[14px] tracking-widest border-2 border-[#ffffff1a]">
						Paper
					</li>
				</ul>
			</div>

			<div className="w-full bg-(--box-background-color) border-(--border-color) p-5 border-2 rounded-2xl">
				<div className="w-15 h-15 rounded-2xl bg-[#2d3134] flex">
					<GiFootprint className="m-auto h-7 w-7" />
				</div>

				<h2 className="text-2xl font-bold mt-4">Easy Setup</h2>
				<p className="mt-2 text-(--text-second-color) tracking-widest">
					Setting up this plugin requires just two steps: download it and move it into the plugins folder.
				</p>
			</div>
		</div>

		<div className="grid mt-10 lg:grid-cols-[1fr_1fr_1fr] gap-10 justify-center">
			<div className="w-full bg-(--box-background-color) border-(--border-color) p-5 border-2 rounded-2xl">
				<div className="w-15 h-15 rounded-2xl bg-[#2d3134] flex">
					<PiSpeedometerFill className="m-auto h-7 w-7" />
				</div>

				<h2 className="text-2xl font-bold mt-4">Performance</h2>
				<p className="mt-2 text-(--text-second-color) tracking-widest">
					Built for every server and engineered to stay performant during peak loads.
				</p>
			</div>

			<div className="w-full bg-(--box-background-color) border-(--border-color) p-5 border-2 rounded-2xl">
				<div className="w-15 h-15 rounded-2xl bg-[#2d3134] flex">
					<BsSliders2 className="m-auto h-7 w-7" />
				</div>

				<h2 className="text-2xl font-bold mt-4">Flexibility</h2>
				<p className="mt-2 text-(--text-second-color) tracking-widest">
					Every module is toggleable. Use only what you need, from economy systems to any advanced systems.
				</p>
			</div>

			<div className="w-full bg-(--box-background-color) border-(--border-color) p-5 border-2 rounded-2xl">
				<div className="w-15 h-15 rounded-2xl bg-[#2d3134] flex">
					<IoColorPalette className="m-auto h-7 w-7" />
				</div>

				<h2 className="text-2xl font-bold mt-4">Modern Looks</h2>
				<p className="mt-2 text-(--text-second-color) tracking-widest">
					Beautiful, eye-catching messages and customizable styles that can be applied across the plugin.
				</p>
			</div>
		</div>

		<figure className="relative mt-50 overflow-hidden rounded-lg h-100 bg-[url('/images/village.jpg')] bg-cover bg-center">
			<figcaption className="absolute p-5 top-0 w-full h-full flex flex-col justify-end bg-(--semi-transparent)">
				<h2 className="text-4xl font-bold mt-5">
					Built for Creators
				</h2>

				<p className="max-w-125 mt-2 text-(--text-second-color) tracking-widest">
					Custom functions and a robust plugin structure that lets you extend SEssentials to match your server’s unique vision.
				</p>
			</figcaption>
		</figure>
	</>)
}
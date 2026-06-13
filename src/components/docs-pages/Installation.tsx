import { Link } from "react-router";

export default function Installation() {

	return (<>
		<p className="mt-2 text-(--text-second-color) tracking-widest">
			This section explains how to download and install the plugin, to your minecraft server.
		</p>

		<h3 className="text-xl mt-10 font-bold">Downloads</h3>
		<p>
			You can download the plugin from <Link to={"/downloads"} className="text-(--special-color) hover:text-amber-700">this site</Link> or the
			<a href="https://github.com/KatyTye/SEssentials" className="text-(--special-color) hover:text-amber-700" target="_blank"> repository </a>
			and websites such as
			<a href="https://dev.bukkit.org/projects/sessentials" className="text-(--special-color) hover:text-amber-700" target="_blank"> Bukkit</a>,
			<a href="https://hangar.papermc.io/Squirrels/SEssentials" className="text-(--special-color) hover:text-amber-700"target="_blank"> Paper</a>
			, and <a href="https://www.curseforge.com/minecraft/bukkit-plugins/sessentials" className="text-(--special-color) hover:text-amber-700"
			target="_blank">CurseForge</a> they also have the offical versions.
		</p>
		<h3 className="text-xl mt-10 font-bold">Server Types</h3>
		<p>
			This plugin officially supports Paper, Bukkit, and Spigot. Other server types that support plugins may work but are not tested or guaranteed; use them at your own risk and report any issues so they can be evaluated.
		</p>
		<h3 className="text-xl mt-10 font-bold">Server Versions</h3>
		<p>
			This plugin requires a specific Java and Minecraft version range. It is fully supported only on servers running Minecraft 1.19.1 through 1.21.11 (inclusive). Do not expect the plugin to work on versions outside this range.
		</p>
		<p className="mt-5">
			Ensure your server uses a compatible Java runtime and test the plugin before deploying to a public server.
		</p>
	</>)
}
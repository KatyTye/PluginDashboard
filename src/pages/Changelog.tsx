import { Link, useParams, useRouteLoaderData } from "react-router";
import { findSpeficObject } from "../helpers/findSpeficObject";
import type { downloadObject } from "../lib/utils";
import Versions from "../components/Versions";
import { IoArrowBack } from "react-icons/io5";
import NotFound from "./NotFound";

export default function Changelog() {
	const downloadsData = useRouteLoaderData("primary")
	const version = useParams().version || "0.0.0"

	const data: downloadObject = findSpeficObject(downloadsData.result, "version", version)

	return ((Object.keys(data).length !== 0) && <>
		<Link to={"/downloads"} className="flex tracking-wider gap-2 mt-10 items-center transition-all duration-500
		 focus:text-(--special-color) hover:text-(--special-color) mb-10" rel="alternate"><IoArrowBack />
			<span>Return to downloads</span></Link>

		<article className="flex flex-col">
			<h1 className="text-4xl font-bold text-center flex self-center items-center gap-3">
				<span>{version}</span> <span className="text-xs scale-70 p-2.5 tracking-widest border-2 rounded-lg">
					{data.released ? "RELEASE" : "BETA/ALPHA"}
				</span>
			</h1>
			<p className="mt-2 text-(--text-second-color) max-w-250 m-auto tracking-widest text-center">
				The changelog for this version of the plugin is below, along with some other information about it.
			</p>

			<div className="grid mt-10 lg:grid-cols-[1fr_1fr] gap-10">
				<div className="bg-(--box-background-color) border-(--border-color) p-5 border-2 rounded-2xl">
					<h2 className="text-2xl font-bold mb-5">
						Server Types
					</h2>
					<ul className="flex gap-4">
						{Versions(data.server_types, 0, true, false)}
					</ul>
				</div>
				<div className="bg-(--box-background-color) border-(--border-color) p-5 border-2 rounded-2xl">
					<h2 className="text-2xl font-bold mb-5">
						Minecraft Versions
					</h2>
					<ul className="flex gap-4">
						{Versions(data.minecraft_versions, 0, true, false)}
					</ul>
				</div>
			</div>

			<div className="bg-(--box-background-color) mt-10 border-(--border-color) p-5 border-2 rounded-2xl">
				<h2 className="text-2xl mt-5 font-bold mb-5">
					Version Notes
				</h2>
				{data.notes ? <p className="mb-5 tracking-wider">{data.notes}</p> :
					<p className="text-red-400 font-bold mb-5 tracking-wider">
						Could not find any notes/messages for this version!
					</p>}
			</div>

			<section className="w-full mt-10 bg-(--box-background-color) border-(--border-color) p-5 border-2 rounded-2xl">
				<h2 className="text-2xl mt-5 font-bold mb-5">
					Changes
				</h2>
				{
					data?.changelog?.map((change, idx) => <div key={"changelog-" + idx}>
						<h3 className={`font-bold ${change.type.toLowerCase() == "added" ? "text-green-600" :
							change.type.toLowerCase() == "changed" ? "text-yellow-600" : "text-red-600"
							}`}>{change.type}{change.changes <= 1 ? " " : ` ${change.changes} `}{change.name}:</h3>
						<ul className="list-disc ml-5 mb-5">
							{
								change.list.map((item, index) => <li key={"changelog-" + idx + "-" + index}>
									{item}
								</li>)
							}
						</ul>
					</div>) || <p className="text-red-400 mb-5 font-bold tracking-wider">
						Could not find any changes for this version!
					</p>
				}
			</section>
		</article>

		{data.downloadable ? <a href={`./files/sessentials-${version}.jar`} download={true}
			className="w-full text-center ml-auto bg-(--special-color) mt-10 rounded-lg p-4 pl-10
			pr-10 font-bold transition-all duration-500 hover:bg-amber-700 mb-10">
			Download
		</a> : <button
			className="w-full text-center ml-auto rounded-lg p-4 pl-10
			pr-10 font-bold bg-gray-700 mt-10 mb-10">
			Not Released
		</button>}
	</> || <NotFound />)
}
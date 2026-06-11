import type { downloadObject } from "../lib/utils"
import { useRouteLoaderData } from "react-router"
import Versions from "../components/Versions"

export default function Downloads() {
	const downloadsData = useRouteLoaderData("primary")

	return (<article>
		<h1 className="text-center text-4xl font-bold mt-10">Version Downloads</h1>

		<p className="mt-2 text-(--text-second-color) tracking-widest text-center">
			On this page, you can download the different versions of the plugin. You can also see the upcoming version. Click on a version to view the changelog for that version.
		</p>

		{
			downloadsData ? <ul className="grid gap-6 mt-10 mb-10">
				{downloadsData.result.map((element: downloadObject, index: number) =>
					<li key={"download-item-" + index} className="rounded-2xl p-5 items-center gap-5 border-2
					flex flex-col custom-grid bg-(--box-background-color) border-(--border-color)">
						<p className="text-center lg:text-left">
							<span className="font-bold mr-2">
								Plugin Version:
							</span>
							<span>
								{element.version}
							</span>
						</p>

						<div className="flex gap-4 justify-center">
							{Versions(element.server_types, index, true)}
						</div>

						<div className="flex gap-4 justify-center lg:justify-start custom-text">
							{Versions(element.minecraft_versions, index, false)}
						</div>

						{element.downloadable ? <a href={`./files/sessentials-${element.version}.jar`} download={true}
							className="w-full text-center ml-auto bg-(--special-color) rounded-lg p-2 pl-7
							pr-7 font-bold transition-all duration-500 hover:bg-amber-700">
							Download
						</a> : <button
							className="w-full text-center ml-auto rounded-lg p-2 pl-7
							pr-7 font-bold bg-gray-700">
							Not Released
						</button>}
					</li>)}
			</ul> : <>
			</>
		}
	</article>)
}
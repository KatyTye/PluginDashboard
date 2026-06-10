import type { downloadObject } from "../lib/utils"
import { useRouteLoaderData } from "react-router"
import Versions from "../components/Versions"

export default function Downloads() {
	const downloadsData = useRouteLoaderData("primary")

	return (<article>
		{
			downloadsData ? <ul className="grid gap-6">
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

						<a href={`./files/sessentials-${element.version}.jar`} download={true}
							className="w-full text-center ml-auto bg-(--special-color) rounded-lg p-2 pl-7
							pr-7 font-bold hover:bg-orange-600 transition-all duration-500">
							Download
						</a>
					</li>)}
			</ul> : <>
			</>
		}
	</article>)
}
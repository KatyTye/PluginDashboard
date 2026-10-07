"use client"

import { useDownloadInfoData } from "@/src/components/contexts/downloads";
import type { downloadObject } from "@/src/lib/types"
import Versions from "@/src/components/ui/Versions"
import Link from "next/link"

export default function Downloads() {
    const { downloadsList } = useDownloadInfoData();

	return (
		<article>
			<h1 className="text-center text-4xl font-bold mt-10">Version Downloads</h1>

			<p className="mt-2 text-(--text-second-color) max-w-250 m-auto tracking-widest text-center light:text-gray-600">
				On this page, you can download the different versions of the plugin. You can also see the upcoming version. Click on a version to view the changelog for that version.
			</p>

			{
				downloadsList ? <ul className="grid gap-6 mt-10 mb-10">
					{downloadsList.map((element: downloadObject, index: number) =>
						<li key={"download-item-" + index} className="rounded-2xl p-5 items-center gap-5 border-2
						flex flex-col custom-grid bg-(--box-background-color) border-(--border-color) light:bg-gray-300 light:border-gray-400">
							<Link href={"/changelog/" + element.version} className="text-center lg:text-left">
								<span className="font-bold mr-2">
									Plugin Version:
								</span>
								<span>
									{element.version}
								</span>
							</Link>

							<div className="flex gap-4 justify-center">
								{Versions(element.server_types, index, true)}
							</div>

							<div className="flex gap-4 justify-center lg:justify-start custom-text">
								{Versions(element.minecraft_versions, index, false)}
							</div>

							{element.downloadable ? <a href={`./files/sessentials-${element.version}.jar`} download={true}
								className="w-full text-center ml-auto bg-(--special-color) rounded-lg p-2 pl-7
								pr-7 font-bold transition-all duration-500 hover:bg-amber-700 light:text-white">
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
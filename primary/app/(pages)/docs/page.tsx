"use client"

import { useDownloadInfoData } from "@/src/components/contexts/downloads"
import Installation from "@/src/components/ui/docs-pages/Installation"
import { IoArrowBack, IoArrowForward } from "react-icons/io5"
import Intro from "@/src/components/ui/docs-pages/Intro"
import Setup from "@/src/components/ui/docs-pages/Setup"
import { Suspense, useEffect, useState } from "react"
import Api from "@/src/components/ui/docs-pages/Api"
import { useSearchParams } from "next/navigation"

export default function Documentation() {
	return <Suspense fallback={<div className="text-center">Loading documentation...</div>}>
		<DocumentationContent />
	</Suspense>
}

function DocumentationContent() {
	const BasicStages = ["intro", "setup", "installation"]
	const { downloadsList } = useDownloadInfoData()
	const section  = useSearchParams().get("")

	const paramSection = section? `${section}` : "intro"

	const [version, setVersion] = useState<number | undefined>(undefined)
	const [selected, setSelected] = useState(paramSection.toLowerCase())
	const [currentStage, setCurrentStage] = useState(0)

	useEffect(() => {
		document.querySelector(`#top`)?.scrollIntoView({
			behavior: "smooth"
		})
		if (BasicStages.includes(selected)) {
			history.replaceState(null, "", `/docs?=${selected.toLowerCase()}`)
		}
	}, [selected])

	useEffect(() => {
		if (downloadsList) {
			setVersion(Number(downloadsList[0].version.replaceAll(".", "")))
		}
	}, [downloadsList])

	function changeSelected(evt: React.MouseEvent<HTMLElement>) {
		const elm = evt.target as HTMLElement

		history.replaceState(null, "", `/docs?=${elm.textContent.toLowerCase()}`)
		setSelected(elm.textContent.toLowerCase())

		if (BasicStages.includes(elm.textContent)) {
			setCurrentStage(BasicStages.findIndex(val => val == elm.textContent))
		}
	}

	return (<>
		<article>
			<h1 className="text-center text-4xl font-bold mt-10">
				Documentation
			</h1>
			<p className="mt-2 text-(--text-second-color) max-w-250 m-auto tracking-widest text-center light:text-gray-600">
				This page provides a comprehensive inventory of all available features, describes each feature’s purpose and functionality in detail, explains how to access and configure them.
			</p>
		</article>

		<div className="md:flex m-auto mt-10 gap-10 max-w-375">
			<div className="bg-(--box-background-color) mb-10 h-fit border-(--border-color) p-5 pl-15 pr-15 border-2 rounded-2xl
				light:border-gray-400 light:bg-gray-300">
				<p className="font-bold">Basic:</p>
				<ol className="mt-2">
					<li onClick={evt => changeSelected(evt)} className={`transition-all ml-2.5 pl-2.5 border-l-2 duration-500 cursor-pointer
						${selected == "intro" ? " text-(--special-color)" : ""}`}>Intro</li>
					<li onClick={evt => changeSelected(evt)} className={`transition-all ml-2.5 pl-2.5 border-l-2 duration-500 cursor-pointer
						${selected == "setup" ? " text-(--special-color)" : ""}`}>Setup</li>
					<li onClick={evt => changeSelected(evt)} className={`transition-all ml-2.5 pl-2.5 border-l-2 duration-500 cursor-pointer
						${selected == "installation" ? " text-(--special-color)" : ""}`}>Installation</li>
				</ol>
				<p className="font-bold mt-5">Managements:</p>
				<ol className="mt-2">
					<li onClick={evt => changeSelected(evt)} className={`transition-all ml-2.5 pl-2.5 border-l-2 duration-500 cursor-pointer
						${selected == "rank" ? " text-(--special-color)" : ""}`}>Rank</li>
					<li onClick={evt => changeSelected(evt)} className={`transition-all ml-2.5 pl-2.5 border-l-2 duration-500 cursor-pointer
						${selected == "economy" ? " text-(--special-color)" : ""}`}>Economy</li>
					<li onClick={evt => changeSelected(evt)} className={`transition-all ml-2.5 pl-2.5 border-l-2 duration-500 cursor-pointer
						${selected == "messages" ? " text-(--special-color)" : ""}`}>Messages</li>
					<li onClick={evt => changeSelected(evt)} className={`transition-all ml-2.5 pl-2.5 border-l-2 duration-500 cursor-pointer
						${selected == "sessentials" ? " text-(--special-color)" : ""}`}>SEssentials</li>
				</ol>
				<p className="font-bold mt-5">Commands:</p>
				<ol className="mt-2">
					<li onClick={evt => changeSelected(evt)} className={`transition-all ml-2.5 pl-2.5 border-l-2 duration-500 cursor-pointer
						${selected == "give" ? " text-(--special-color)" : ""}`}>Give</li>
					<li onClick={evt => changeSelected(evt)} className={`transition-all ml-2.5 pl-2.5 border-l-2 duration-500 cursor-pointer
						${selected == "spawn" ? " text-(--special-color)" : ""}`}>Spawn</li>
				</ol>
				<p className="font-bold mt-5">Other:</p>
				<ol className="mt-2">
					<li onClick={evt => changeSelected(evt)} className={`transition-all ml-2.5 pl-2.5 border-l-2 duration-500 cursor-pointer
						${selected == "api" ? " text-(--special-color)" : ""}`}>Api</li>
				</ol>
			</div>

			<div id="top" className="bg-(--box-background-color) border-(--border-color) p-10 border-2 rounded-2xl
				light:border-gray-400 light:bg-gray-300">

				<h2 className="font-bold text-3xl">{selected.replace(selected.charAt(0), selected.charAt(0).toUpperCase())}</h2>

				{
					selected == "intro" ? <Intro /> :
					selected == "setup" ? <Setup version={version || 1} /> :
					selected == "installation" ? <Installation /> :
					selected == "api" ? <Api /> :
				<></>}

				<div className="flex w-full justify-between mt-20 gap-25">
					{ BasicStages.includes(selected) ? <>
						{currentStage != 0 && <button className="flex tracking-wider gap-2 items-center transition-all duration-500 focus:text-(--special-color)
						hover:text-(--special-color) cursor-pointer" onClick={() => { setCurrentStage(currentStage - 1); setSelected(BasicStages[currentStage - 1]) }}>
							<IoArrowBack /><span>Go to last stage</span></button>}

						<select name="version" id="version" className="p-2 pl-5 pr-5 tracking-widest border-2 border-[#ffffff1a]
							bg-[#252729] light:bg-gray-400 rounded-xl" value={version} onChange={event => setVersion(Number(event.target.value))}>
							{ downloadsList?.map((download, index) => download.downloadable &&
								<option value={Number(download.version.replaceAll(".", ""))} key={"version-" + index}>
									{download.version}
								</option>
							)}
						</select>

						{currentStage != BasicStages.length - 1 && <button className="flex tracking-wider gap-2 items-center transition-all duration-500 focus:text-(--special-color)
						hover:text-(--special-color) cursor-pointer" onClick={() => { setCurrentStage(currentStage + 1); setSelected(BasicStages[currentStage + 1]) }}>
							<span>Go to next stage</span><IoArrowForward /></button>}</>

						: <>
							<button className="flex tracking-wider gap-2 items-center transition-all duration-500 focus:text-(--special-color)
							hover:text-(--special-color) cursor-pointer" onClick={() => { setCurrentStage(0); setSelected(BasicStages[0]) }}>
							<IoArrowBack /><span>Return to the basics</span></button>

							<select name="version" id="version" className="p-2 pl-5 pr-5 tracking-widest border-2 border-[#ffffff1a]
								bg-[#252729] light:bg-gray-400 rounded-xl" value={version} onChange={event => setVersion(Number(event.target.value))}>
								{ downloadsList?.map((download, index) => download.downloadable &&
									<option value={Number(download.version.replaceAll(".", ""))} key={"version-" + index}>
										{download.version}
									</option>
								)}
							</select>
						</>
					}
				</div>
			</div>
		</div>
	</>)
}
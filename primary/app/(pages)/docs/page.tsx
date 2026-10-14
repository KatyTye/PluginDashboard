"use client"

import InstallationDocsComponent from "@/src/components/ui/docs-pages/Installation"
import { IoArrowBack, IoArrowForward, IoChevronDownOutline } from "react-icons/io5"
import EconomyDocsComponent from "@/src/components/ui/docs-pages/Economy"
import { useDownloadInfoData } from "@/src/components/contexts/downloads"
import SetupDocsComponent from "@/src/components/ui/docs-pages/Setup"
import IntroDocsComponent from "@/src/components/ui/docs-pages/Intro"
import RankDocsComponent from "@/src/components/ui/docs-pages/Rank"
import ApiDocsComponent from "@/src/components/ui/docs-pages/Api"
import { Suspense, useEffect, useState } from "react"
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

	const [selected, setSelected] = useState(paramSection.toLowerCase())
	const [currentStage, setCurrentStage] = useState(0)
	const [version, setVersion] = useState(1)

	const [toggles, setToggles] = useState<string[]>([])

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

	function handleToggleEvent(name: string) {
		if (toggles.includes(name)) {
			setToggles(toggles.filter(itm => itm !== name))
		} else setToggles([...toggles, name])

		console.log(toggles)
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

		<div className="flex not-lg:justify-center not-lg:flex-wrap m-auto mt-10 gap-10 max-w-[100%]">
			<div className="bg-(--box-background-color) mb-10 h-fit border-(--border-color) p-5 w-500 border-2 rounded-2xl
				light:border-gray-400 light:bg-gray-300 lg:max-w-62.5 max-w-2/5 min-w-62.5">
				<button className="font-bold flex gap-5 justify-between items-center w-full cursor-pointer" onClick={() => 
					handleToggleEvent("Basic")}>
					<span>Basic:</span>
					<IoChevronDownOutline className={`transition-transform min-w-5 min-h-5 duration-300 ${
						toggles.includes("Basic") ? "rotate-0" : "rotate-180"}`} />
				</button>
				<ol className={`mt-2 overflow-hidden transition-all duration-500 ${toggles.includes("Basic") ? "h-0" : "h-18"}`}>
					<li onClick={evt => changeSelected(evt)} className={`transition-all ml-2.5 pl-2.5 border-l-2 duration-500 cursor-pointer
						${selected == "intro" ? " text-(--special-color)" : ""}`}>Intro</li>
					<li onClick={evt => changeSelected(evt)} className={`transition-all ml-2.5 pl-2.5 border-l-2 duration-500 cursor-pointer
						${selected == "setup" ? " text-(--special-color)" : ""}`}>Setup</li>
					<li onClick={evt => changeSelected(evt)} className={`transition-all ml-2.5 pl-2.5 border-l-2 duration-500 cursor-pointer
						${selected == "installation" ? " text-(--special-color)" : ""}`}>Installation</li>
				</ol>
				<button className="font-bold mt-5 flex gap-5 justify-between items-center w-full cursor-pointer" onClick={() => 
					handleToggleEvent("Managements")}>
					<span>Managements:</span>
					<IoChevronDownOutline className={`transition-transform min-w-5 min-h-5 duration-300 ${
						toggles.includes("Managements") ? "rotate-0" : "rotate-180"}`} />
				</button>
				<ol className={`mt-2 overflow-hidden transition-all duration-500 ${toggles.includes("Managements") ? "h-0" : "h-18"}`}>
					<li onClick={evt => changeSelected(evt)} className={`transition-all ml-2.5 pl-2.5 border-l-2 duration-500 cursor-pointer
						${selected == "rank" ? " text-(--special-color)" : ""}`}>Rank</li>
					<li onClick={evt => changeSelected(evt)} className={`transition-all ml-2.5 pl-2.5 border-l-2 duration-500 cursor-pointer
						${selected == "economy" ? " text-(--special-color)" : ""}`}>Economy</li>
					<li onClick={evt => changeSelected(evt)} className={`transition-all ml-2.5 pl-2.5 border-l-2 duration-500 cursor-pointer
						${selected == "sessentials" ? " text-(--special-color)" : ""}`}>SEssentials</li>
				</ol>
				<button className="font-bold mt-5 flex gap-5 justify-between items-center w-full cursor-pointer" onClick={() => 
					handleToggleEvent("Commands")}>
					<span>Commands:</span>
					<IoChevronDownOutline className={`transition-transform min-w-5 min-h-5 duration-300 ${
						toggles.includes("Commands") ? "rotate-0" : "rotate-180"}`} />
				</button>
				<ol className="mt-2">
					<li onClick={evt => changeSelected(evt)} className={`transition-all ml-2.5 pl-2.5 border-l-2 duration-500 cursor-pointer
						${selected == "give" ? " text-(--special-color)" : ""}`}>Give</li>
					<li onClick={evt => changeSelected(evt)} className={`transition-all ml-2.5 pl-2.5 border-l-2 duration-500 cursor-pointer
						${selected == "spawn" ? " text-(--special-color)" : ""}`}>Spawn</li>
				</ol>
				<button className="font-bold mt-5 flex gap-5 justify-between items-center w-full cursor-pointer" onClick={() => 
					handleToggleEvent("Other")}>
					<span>Other:</span>
					<IoChevronDownOutline className={`transition-transform min-w-5 min-h-5 duration-300 ${
						toggles.includes("Other") ? "rotate-0" : "rotate-180"}`} />
				</button>
				<ol className="mt-2">
					<li onClick={evt => changeSelected(evt)} className={`transition-all ml-2.5 pl-2.5 border-l-2 duration-500 cursor-pointer
						${selected == "api" ? " text-(--special-color)" : ""}`}>Api</li>
				</ol>
			</div>

			<div id="top" className="bg-(--box-background-color) border-(--border-color) p-10 border-2 rounded-2xl
				light:border-gray-400 light:bg-gray-300 max-w-400">

				<h2 className="font-bold text-3xl">{selected.replace(selected.charAt(0), selected.charAt(0).toUpperCase())}</h2>

				{
					selected == "intro" ? <IntroDocsComponent /> :
					selected == "setup" ? <SetupDocsComponent version={version} /> :
					selected == "installation" ? <InstallationDocsComponent /> :
					selected == "api" ? <ApiDocsComponent /> :
					selected == "economy" ? <EconomyDocsComponent version={version} /> :
					selected == "rank" ? <RankDocsComponent version={version} /> :
				<></>}

				<div className="flex w-full justify-between mt-20 gap-10">
					{ BasicStages.includes(selected) ? <>
						{currentStage != 0 && <button className="flex tracking-wider gap-2 items-center transition-all duration-500 focus:text-(--special-color)
						hover:text-(--special-color) cursor-pointer" onClick={() => { setCurrentStage(currentStage - 1); setSelected(BasicStages[currentStage - 1]) }}>
							<IoArrowBack className="min-w-5 min-h-5" /><span>Go to last stage</span></button>}

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
							<IoArrowBack className="min-w-5 min-h-5" /><span>Return to the basics</span></button>

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
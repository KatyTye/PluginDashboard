import Installation from "../components/docs-pages/Installation"
import { IoArrowBack, IoArrowForward } from "react-icons/io5"
import Intro from "../components/docs-pages/Intro"
import Setup from "../components/docs-pages/Setup"
import { useEffect, useState } from "react"
import { useParams } from "react-router"

export default function Documentation() {
	const BasicStages = ["intro", "setup", "installation"]
	const { section } = useParams()

	const [selected, setSelected] = useState(section?.toLowerCase() || "intro")
	const [currentStage, setCurrentStage] = useState(0)

	useEffect(() => {
		document.querySelector(`#top`)?.scrollIntoView({
			behavior: "smooth"
		})
	}, [selected])

	function changeSelected(evt: React.MouseEvent<HTMLElement>) {
		const elm = evt.target as HTMLElement

		history.replaceState(null, "", `/docs/${elm.textContent.toLowerCase()}`)
		setSelected(elm.textContent.toLowerCase())

		if (BasicStages.includes(elm.textContent)) {
			setCurrentStage(BasicStages.findIndex(val => val == elm.textContent))
		}
	}

	return (<>
		<article>
			<h1 id="top" className="text-center text-4xl font-bold mt-10">
				Features Documentation
			</h1>
			<p className="mt-2 text-(--text-second-color) max-w-250 m-auto tracking-widest text-center">
				This page provides a comprehensive inventory of all available features, describes each feature’s purpose and functionality in detail, explains how to access and configure them.
			</p>
		</article>

		<div className="md:flex mt-10 gap-10">
			<div className="bg-(--box-background-color) mb-10 h-fit border-(--border-color) p-5 pl-15 pr-15 border-2 rounded-2xl">
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
			</div>

			<div className="bg-(--box-background-color) border-(--border-color) p-10 border-2 rounded-2xl">

				<h2 className="font-bold text-3xl">{selected.replace(selected.charAt(0), selected.charAt(0).toUpperCase())}</h2>

				{
					selected == "intro" ? <Intro /> :
						selected == "setup" ? <Setup /> :
							selected == "installation" ? <Installation /> :
								<></>}

				{BasicStages.includes(selected) ? <div className="flex w-full">
					{currentStage != 0 && <button className="flex tracking-wider gap-2 mt-15 items-center transition-all duration-500 focus:text-(--special-color)
					hover:text-(--special-color) cursor-pointer" onClick={() => { setCurrentStage(currentStage - 1); setSelected(BasicStages[currentStage - 1]) }}>
						<IoArrowBack /><span>Go to last stage</span></button>}

					{currentStage != BasicStages.length - 1 && <button className="flex tracking-wider gap-2 ml-auto mt-15 items-center transition-all duration-500 focus:text-(--special-color)
					hover:text-(--special-color) cursor-pointer" onClick={() => { setCurrentStage(currentStage + 1); setSelected(BasicStages[currentStage + 1]) }}>
						<span>Go to next stage</span><IoArrowForward /></button>}</div>

					: <button className="flex tracking-wider gap-2 ml-auto mt-15 items-center transition-all duration-500 focus:text-(--special-color)
					hover:text-(--special-color) cursor-pointer" onClick={() => { setCurrentStage(0); setSelected(BasicStages[0]) }}>
						<IoArrowBack /><span>Return to the basics</span></button>}
			</div>
		</div>
	</>)
}
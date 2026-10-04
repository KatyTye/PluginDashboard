"use client"

import { BiErrorAlt } from "react-icons/bi";
import { useEffect } from "react";
import { IoReload } from "react-icons/io5";

type ErrorPageProps = {
	error: Error & {
		digest?: string;
	};
	reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {

	return (<div className="w-full h-full flex flex-col items-center justify-center">
		<div className="w-50">
			<BiErrorAlt className="text-red-600 mb-10" />
		</div>
		<h2 className="text-2xl font-bold">Something went wrong...</h2>
		<p className="text-(--text-second-color) mt-5 text-center">
			<span className="block">
				We got an error happened and could not
			</span>
			<span className="block">
				contiune, please try the following options below.
			</span>
		</p>

		<div className="flex gap-5 mt-10 flex-wrap justify-center pl-5 pr-5">
			<div className="w-75 bg-(--box-background-color) border-(--border-color) p-5 border-2 rounded-2xl">
				<h2 className="font-bold uppercase mb-2.5">Contact Support</h2>
				<p className="text-(--text-second-color) tracking-widest">
					Click <a href={`mailto:support@sessentials.org?subject=Error At Plugin Management (${error.digest})&
					&body=Type: ${error.message} - Cause: ${error.cause}`} target="_blank"
						className="text-(--special-color) hover:text-amber-700">
						here</a> to report the error.
				</p>
			</div>
			<div className="w-75 bg-(--box-background-color) border-(--border-color) p-5 border-2 rounded-2xl">
				<h2 className="font-bold uppercase mb-2.5">Try Again</h2>
				<button className="flex items-center gap-2.5 cursor-pointer w-full bg-(--special-color) p-2.5
					font-bold rounded-lg" onClick={() => reset()}>
					<span className="w-5"><IoReload /></span>
					<span className="translate-0.5">Reload</span>
				</button>
			</div>
		</div>
	</div>)
}
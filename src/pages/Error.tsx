import { BiSolidErrorAlt } from "react-icons/bi"
import { useRouteError } from "react-router"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function ErrorPage() {
	const error = useRouteError()

	return (<>
		<Header />
		<main className="page-content flex flex-col p-4 md:p-20 pt-10 pb-10">
			<div className="m-auto mt-10 mb-10 full-image p-2 bg-(--background-color) w-2/3 max-w-50 shadow-red-400">
				<BiSolidErrorAlt className="text-red-400" />
			</div>
			<h2 className="text-2xl text-center font-bold">
				Something went wrong!
			</h2>
			<p className="text-(--text-second-color) mt-5 text-center bg-(--box-background-color)
			border-(--border-color) border-2 p-3 rounded-lg">
				<span className="text-red-400 mr-1 font-bold tracking-wider">
					Error:
				</span>
				<span>
					{(
						error instanceof Error ? error.message : "Unknown"
					)}
				</span>
			</p>
		</main>
		<Footer />
	</>)
}
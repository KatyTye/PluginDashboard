import { TbError404 } from "react-icons/tb";

export default function NotFoundPage() {

	return (<div className="w-full h-full flex flex-col items-center justify-center">
		<div className="w-50">
			<TbError404 className="text-(--special-color)" />
		</div>
		<h2 className="text-2xl font-bold">Page Not Found</h2>
		<p className="text-(--text-second-color) mt-5 text-center">
			<span className="block">
				We couldn't find the page your searching for,
			</span>
			<span className="block">
				navigate using the buttons provided.
			</span>
		</p>
	</div>)
}
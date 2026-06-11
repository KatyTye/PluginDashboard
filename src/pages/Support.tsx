import { CiCoffeeCup } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router";

export default function Support() {

	return (<>
		<div className="grid mt-10 lg:grid-cols-[2.06fr_1fr] gap-10 justify-center">
			<div className="w-full bg-(--box-background-color) border-(--border-color) p-5 border-2 rounded-2xl">
				<div className="w-15 h-15 rounded-2xl bg-[#2d3134] flex">
					<CiCoffeeCup className="m-auto h-7 w-7" />
				</div>

				<h2 className="text-2xl font-bold mt-4">Community</h2>
				<p className="mt-2 text-(--text-second-color) tracking-widest">
					If you have any general questions about how to do things, please check the <Link to={"/docs"}
						className="text-(--special-color) hover:text-amber-700" rel="alternate">
						documentation</Link> or ask the <a href="https://discord.gg/xxxxxxxx" rel="noopener noreferrer"
							target="_blank" className="text-(--special-color) hover:text-amber-700">
						community</a> for assistance.
				</p>
			</div>
			<div className="w-full bg-(--box-background-color) border-(--border-color) p-5 border-2 rounded-2xl">
				<div className="w-15 h-15 rounded-2xl bg-[#2d3134] flex">
					<MdEmail className="m-auto h-7 w-7" />
				</div>

				<h2 className="text-2xl font-bold mt-4">E-Mail</h2>
				<p className="mt-2 text-(--text-second-color) tracking-widest">
					You can contact us for support at our email: <a href="mailto:support@sessentials.org"
						className="text-(--special-color) hover:text-amber-700" rel="noopener noreferrer">
						support@sessentials.org</a>. Please note that it may take several days to receive a response.
				</p>
			</div>
		</div>
	</>)
}
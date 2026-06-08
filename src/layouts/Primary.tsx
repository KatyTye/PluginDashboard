import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PrimaryLayout() {

	return (<>
		<Header />
		<main className="page-content flex flex-col p-4 md:pl-20 md:pr-20">
			<Outlet />
		</main>
		<Footer />
	</>)
}
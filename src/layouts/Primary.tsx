import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PrimaryLayout() {

	return (<>
		<Header />
		<main className="page-content flex flex-col p-4 md:p-20 pt-10 pb-10">
			<Outlet />
		</main>
		<Footer />
	</>)
}
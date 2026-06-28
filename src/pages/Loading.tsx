import Footer from "../components/Footer";
import Header from "../components/Header";
import LoadingComponent from "../components/LoadingComponent";

export default function Loading() {

	return (<>
		<Header />
		<main className="page-content flex flex-col p-4 md:p-20 pt-10 pb-10">
			<LoadingComponent />
		</main>
		<Footer />
	</>)
}
import { createBrowserRouter, Navigate, RouterProvider } from "react-router"
import { returnPluginDownloads } from "./helpers/downloads"
import PrimaryLayout from "./layouts/Primary"
import Downloads from "./pages/Downloads"
import Changelog from "./pages/Changelog"
import NotFound from "./pages/NotFound"
import ErrorPage from "./pages/Error"
import Support from "./pages/Support"
import Loading from "./pages/Loading"
import Terms from "./pages/Terms"
import Home from "./pages/Home"
import Documentation from "./pages/Documentation"

function App() {

	const BrowserRouter = createBrowserRouter([
		{
			id: "primary",
			element: <PrimaryLayout />,
			errorElement: <ErrorPage />,
			loader: returnPluginDownloads,
			hydrateFallbackElement: <Loading />,
			children: [
				{
					index: true,
					element: <Home />
				},
				{
					path: "/terms",
					element: <Terms />
				},
				{
					path: "/support",
					element: <Support />
				},
				{
					path: "/downloads",
					element: <Downloads />
				},
				{
					path: "/changelog/:version",
					element: <Changelog />
				},
				{
					path: "/docs",
					children: [
						{
							index: true,
							element: <Navigate to={"intro"} />
						},
						{
							path: ":section",
							element: <Documentation />
						},
					]
				},
				{
					path: "*",
					element: <NotFound />
				}
			]
		},
		{
			id: "layout",
			path: "/edit",
			element: <PrimaryLayout />,
			errorElement: <ErrorPage />,
			hydrateFallbackElement: <Loading />,
		}
	])

	return (
		<RouterProvider router={BrowserRouter} />
	)
}

export default App

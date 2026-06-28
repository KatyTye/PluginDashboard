import { createBrowserRouter, Navigate, RouterProvider } from "react-router"
import LoadingComponent from "./components/LoadingComponent"
import { returnPluginDownloads } from "./helpers/downloads"
import Documentation from "./pages/Documentation"
import PrimaryLayout from "./layouts/Primary"
import Downloads from "./pages/Downloads"
import Changelog from "./pages/Changelog"
import NotFound from "./pages/NotFound"
import ErrorPage from "./pages/Error"
import Support from "./pages/Support"
import Loading from "./pages/Loading"
import Profile from "./pages/Profile"
import Terms from "./pages/Terms"
import Home from "./pages/Home"

function App() {

	const BrowserRouter = createBrowserRouter([
		{
			element: <PrimaryLayout />,
			errorElement: <ErrorPage />,
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
					id: "primary",
					loader: returnPluginDownloads,
					hydrateFallbackElement: <LoadingComponent />,
					children: [
						{
							path: "/downloads",
							element: <Downloads />
						},
						{
							path: "/changelog/:version",
							element: <Changelog />
						}
					]
				},
				{
					id: "profile",
					path: "/profile",
					element: <Profile />
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

import { createBrowserRouter, RouterProvider } from "react-router"
import { returnPluginDownloads } from "./helpers/downloads"
import PrimaryLayout from "./layouts/Primary"
import Downloads from "./pages/Downloads"
import NotFound from "./pages/NotFound"
import ErrorPage from "./pages/Error"
import Terms from "./pages/Terms"
import Home from "./pages/Home"

function App() {

	const BrowserRouter = createBrowserRouter([
		{
			id: "primary",
			element: <PrimaryLayout />,
			loader: returnPluginDownloads,
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
					path: "/downloads",
					element: <Downloads />
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
			errorElement: <ErrorPage />
		}
	])

	return (
		<RouterProvider router={BrowserRouter} />
	)
}

export default App

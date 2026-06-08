import { createBrowserRouter, RouterProvider } from "react-router"
import PrimaryLayout from "./layouts/Primary"
import NotFound from "./pages/NotFound"
import ErrorPage from "./pages/Error"
import Home from "./pages/Home"
import Terms from "./pages/Terms"

function App() {

	const BrowserRouter = createBrowserRouter([
		{
			element: <PrimaryLayout />,
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
					path: "*",
					element: <NotFound />
				}
			]
		},
		{
			id: "primary",
			element: <PrimaryLayout />,
			errorElement: <ErrorPage />
		}
	])

	return (
		<RouterProvider router={BrowserRouter} />
	)
}

export default App

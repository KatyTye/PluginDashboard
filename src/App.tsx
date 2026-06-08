import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "./pages/Home"
import Layout from "./Layout"
import NotFound from "./pages/NotFound"
import ErrorPage from "./pages/Error"

function App() {

	const BrowserRouter = createBrowserRouter([
		{
			index: true,
			element: <Home />
		},
		{
			id: "primary",
			element: <Layout />,
			errorElement: <ErrorPage />
		},
		{
			path: "*",
			element: <NotFound />
		}
	])

	return (
		<RouterProvider router={BrowserRouter} />
	)
}

export default App

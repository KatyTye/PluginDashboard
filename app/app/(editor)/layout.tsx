import DashboardComponent from "@/src/components/layouts/dashboard";
import DataProvider from "./provider";

export default function Layout({ children }: { children: React.ReactNode }) {

	return (
		<DashboardComponent>
			<DataProvider>
				{children}
			</DataProvider>
		</DashboardComponent>
	)
}
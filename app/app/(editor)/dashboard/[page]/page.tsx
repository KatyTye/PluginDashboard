import DashboardSlugProvider from "@/src/provider";

export default function DashboardSlugPage({ params } : { params: Promise<{ page: string }> }) {

	return (
		<DashboardSlugProvider promise={params} />
	)
}
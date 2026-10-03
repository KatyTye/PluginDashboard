import PlayersPage from "@/app/(editor)/dashboard/[page]/players"
import DashboardPage from "@/app/(editor)/dashboard/page"

export default async function DashboardSlugProvider({ promise } : { promise: Promise<{ page: string }> }) {
	const { page } = await promise

	switch (page) {
		case "players": return <PlayersPage />
		default: return <DashboardPage />
	}
}
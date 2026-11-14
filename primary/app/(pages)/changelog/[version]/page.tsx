import { connection } from "next/server";
import ChangelogContent from "./client";
import { Suspense } from "react";

async function RuntimeMarker() {
	await connection();
	return null;
}

export default function Page() {
	return (
		<>
			<Suspense fallback={null}>
				<RuntimeMarker />
			</Suspense>
			<ChangelogContent />
		</>
	)
}
import testingData from "@/src/data/normal.json";
import { ServerResponseType } from "@/src/lib/types/server";

export function returnTestData(): ServerResponseType {
	return testingData;
}

import { it, expect } from "vitest";
import fs from "fs";

import { getTextFromFile } from "../";

function createFile({
	path,
	name,
	type,
}: {
	path: string;
	name: string;
	type: string;
}): File {
	const data = fs.readFileSync(path, "utf-8");
	const encoded = Buffer.from(data).toString("base64");
	const arrayBuffer = Uint8Array.from(Buffer.from(encoded, "base64"));
	return new File([arrayBuffer], name, { type });
}

it("extract the data from the file", async () => {
	const file = createFile({
		path: "src/test/test.txt",
		name: "test.txt",
		type: "text/plain",
	});
	const text = await getTextFromFile(file);
	expect(text).toBe("test data");
});

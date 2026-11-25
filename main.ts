import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), "Why don't cats play poker in the jungle? Too many cheetahs.");
const content = readFileSync(join(outputDir, "entry.txt"), "utf8");
if (content.length !== 59 || content.includes("\n") || content.includes("\r") || content !== "Why don't cats play poker in the jungle? Too many cheetahs.") {
  throw new Error(`Unexpected entry content: ${JSON.stringify(content)}`);
}

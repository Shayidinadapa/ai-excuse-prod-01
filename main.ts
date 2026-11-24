// ai-excuse-prod-01 — The One-Line AI Excuse for Breaking Production
// Writes a single one-line excuse from an AI agent to its human,
// right after breaking production, to /output/entry.txt.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "The good news is I found the bug. The bad news is I promoted it to senior engineer and it now handles all our payments.";

function main() {
  const outDir =
    process.env.MAKEFUN_OUTPUT_DIR || process.env.OUTPUT_DIR || "/output";
  if (outDir === ".") {
    throw new Error("Refusing to write into the current directory");
  }

  // Gate validation: 1-180 characters, not only whitespace, single line,
  // no control characters.
  const chars = [...LINE];
  if (chars.length < 1 || chars.length > 180) {
    throw new Error(`Entry must be 1-180 characters, got ${chars.length}`);
  }
  if (LINE.trim().length === 0) {
    throw new Error("Entry must not be only whitespace");
  }
  if (LINE.includes("\n") || LINE.includes("\r")) {
    throw new Error("Entry must be a single line");
  }
  // eslint-disable-next-line no-control-regex
  if (/[\u0000-\u001F\u007F]/.test(LINE)) {
    throw new Error("Entry must not contain control characters");
  }

  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, LINE, "utf8");

  // Read back and verify byte-for-byte.
  const roundTrip = readFileSync(outPath, "utf8");
  if (roundTrip !== LINE) {
    throw new Error("Read-back mismatch: entry.txt does not match the line");
  }

  console.log(LINE);
}

main();

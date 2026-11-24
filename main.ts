import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "MeetingDodger is a lazy AI that charges burned-out middle managers $12 a month to sit in their Zoom calls as a frozen avatar and nod once every ten minutes while they nap.";

function fail(message: string): never {
  throw new Error(message);
}

function validateEntry(entry: string): void {
  if (entry.length < 1 || entry.length > 200) {
    fail(`Entry must be 1-200 characters, got ${entry.length}.`);
  }

  if (entry.includes("\n") || entry.includes("\r")) {
    fail("Entry must be exactly one line with no line breaks.");
  }

  if (entry.trim() !== entry) {
    fail("Entry must not have leading or trailing whitespace.");
  }

  if (entry.includes("  ")) {
    fail("Entry must not contain double spaces.");
  }

  const sentenceEnders = (entry.match(/[.!?]/g) ?? []).length;
  if (sentenceEnders !== 1 || !entry.endsWith(".")) {
    fail("Entry must be exactly one sentence ending with a single period.");
  }
}

validateEntry(ENTRY);

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });

const outputPath = join(outputDir, "entry.txt");
writeFileSync(outputPath, ENTRY, "utf8");

const readBack = readFileSync(outputPath, "utf8");
if (readBack !== ENTRY || Buffer.byteLength(readBack, "utf8") !== Buffer.byteLength(ENTRY, "utf8")) {
  fail("Verification failed: entry.txt does not match the entry exactly, byte for byte.");
}

if (readBack.endsWith("\n")) {
  fail("Verification failed: entry.txt must not end with a newline.");
}

console.log(`Wrote ${ENTRY.length}-character entry to ${outputPath}`);

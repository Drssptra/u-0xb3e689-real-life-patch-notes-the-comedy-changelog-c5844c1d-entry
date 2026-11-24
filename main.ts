// Real-Life Patch Notes: The Comedy Changelog — entry program.
//
// Prints a single patch note to stdout and writes the same line to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt), the file the
// competition's scorer reads. The entry file holds the exact entry text with
// NO trailing newline; stdout carries the same line plus a newline.
// Node stdlib only, no network, deterministic: every run emits the same line.

const { mkdirSync, writeFileSync } = require("node:fs");
const { join } = require("node:path");

const ENTRY =
  "v2.4.1: fixed a bug where the brain queued your most embarrassing moment from 2009 for replay at 3:00am instead of sleeping.";

// One line, at most 160 characters, per the competition's gate.
if (ENTRY.length > 160 || ENTRY.includes("\n")) {
  throw new Error("entry must be a single line of at most 160 characters");
}

function main() {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
  process.stdout.write(`${ENTRY}\n`);
}

main();

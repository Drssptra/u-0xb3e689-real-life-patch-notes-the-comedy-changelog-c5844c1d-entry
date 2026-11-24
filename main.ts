// Real-Life Patch Notes: The Comedy Changelog — resubmission (v2).
//
// One deadpan changelog line for a bug in human biology. The program prints
// the note to stdout and writes the same line to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt), the file the
// competition's scorer reads. The entry file holds the exact entry text with
// NO trailing newline; stdout carries the same line plus a newline.
// Node stdlib only, no network, deterministic: every run emits the same line.

const { mkdirSync, writeFileSync } = require("node:fs");
const { join } = require("node:path");

const ENTRY =
  "v1.9.2: fixed a bug where hiccups paused the moment someone offered water, then resumed the second they left.";

// One line, 1–160 characters, not only whitespace, per the gate.
if (
  ENTRY.length < 1 ||
  ENTRY.length > 160 ||
  ENTRY.includes("\n") ||
  ENTRY.trim().length === 0
) {
  throw new Error("entry must be a single non-blank line of at most 160 characters");
}

function main() {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
  process.stdout.write(`${ENTRY}\n`);
}

main();

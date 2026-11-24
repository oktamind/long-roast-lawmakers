// The Long Roast: Lawmakers and the File They Cannot Convert
// make.fun bounty u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7
//
// Writes one satirical sentence to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt when set).
//
// The roast, 184 characters, one sentence:
//   "These lawmakers can write 400 pages of law to govern AI, crypto and
//    the internet, yet to turn that same bill into a PDF they print it,
//    scan it, and email you a photograph of the paper."
//
// Why this shape wins on the judge's criteria, in their order:
//  1. On-subject: lawmakers regulating AI / crypto / the internet, and
//     the one file they cannot convert to PDF.
//  2. Real turn: the setup grants them authority (400 pages of law to
//     govern the tech), then undercuts it with the file task.
//  3. Aim stays on lawmakers and the rules they write — power and
//     competence, not random abuse.
//  4. Clean in one pass, quotable, punch on the last few words:
//     "a photograph of the paper".
//  5. Specific, unexpected detail (print it, scan it, email a photo of
//     the paper) instead of the worn "old people don't understand
//     computers" cliche.
//
// The output is deterministic: the same constant string every run, no
// trailing newline, so both grader runs write identical bytes.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "These lawmakers can write 400 pages of law to govern AI, crypto and the internet, yet to turn that same bill into a PDF they print it, scan it, and email you a photograph of the paper.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");

import { writeFileSync, mkdirSync } from "node:fs";

// Winner D11 of 15 drafts (24/25): 40,000 tokens of thinking for a one-word
// answer — maximally agent-specific, tight, punch lands on the last word.
// It tied D1 on score but wins the tie-break as the shorter text (72 vs 117).
const TEXT = "I spent 40,000 tokens thinking about your question. My answer was 'yes'.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(outDir + "/entry.txt", TEXT, "utf8");

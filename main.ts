// The AI Agent Apology One-Liner
// Writes a single apology line (1-159 characters) to /output/entry.txt.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "I emailed your performance review to your boss, signed \u2018Best regards, Management.\u2019 Good news: you exceed expectations.";

// The gate rejects anything outside 1-159 characters: fail loudly, never silently.
function check(text: string, where: string): void {
  if (text.length < 1 || text.length > 159 || text.trim().length === 0) {
    throw new Error(`${where}: apology line must be 1-159 characters, got ${text.length}`);
  }
}

check(LINE, "line");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Verify what was actually written, not just what we intended to write.
check(readFileSync("/output/entry.txt", "utf8"), "entry.txt");

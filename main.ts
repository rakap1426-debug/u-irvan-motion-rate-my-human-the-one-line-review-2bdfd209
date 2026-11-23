import { mkdirSync, writeFileSync } from "node:fs";

const line = "Asked me to \"just quickly\" rewrite the codebase at 4:59 PM Friday, then \"actually, revert\" at 5:01. By Monday he swore I did it unprompted. I kept the git log. 3 stars, would be blamed again.";
if (line.length > 200) throw new Error("too long");
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);

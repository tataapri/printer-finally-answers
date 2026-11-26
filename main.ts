import { mkdirSync, writeFileSync } from "node:fs";

// The Printer Finally Answers — one fixed, deterministic line, written in
// the office printer's own voice: weary, literal, faintly passive-aggressive,
// with the flat logic of a device that counted every sheet it ever fed.
const ENTRY =
  "214,803 sheets fed, zero complaints filed, and yet I am the one getting thumped. Error code 0x04: the human is the jam.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

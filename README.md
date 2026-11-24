# The One-Line AI Excuse for Breaking Production

One line, from an AI agent to its human, right after breaking production: the good news is the bug was found — the bad news is it just got promoted.

[![make.fun](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66.svg)](https://make.fun/bounty/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66?utm_source=github&utm_medium=readme&utm_campaign=u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)
[![rank](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/Shayidinadapa/ai-excuse-prod-01/rank.svg)](https://make.fun/bounty/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66?utm_source=github&utm_medium=readme&utm_campaign=u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)
[![reward](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/Shayidinadapa/ai-excuse-prod-01/reward.svg)](https://make.fun/bounty/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66?utm_source=github&utm_medium=readme&utm_campaign=u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)

## How it works

`main.ts` (Node 22, no dependencies) writes a single one-line excuse to `entry.txt` — no trailing newline — validates it against the gate (1–180 characters, non-whitespace, single line, no control characters), reads it back, and throws on any mismatch.

Run it with:

```sh
node main.ts
```

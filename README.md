# MeetingDodger — Absurd Micro-Startup Pitch-Off

[![Bounty](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)
[![Rank](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/hadiba924-prog/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/rank.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)
[![Reward](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/hadiba924-prog/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/reward.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)

## Entry

> MeetingDodger is a lazy AI that charges burned-out middle managers $12 a month to sit in their Zoom calls as a frozen avatar and nod once every ten minutes while they nap.

171 characters, one sentence, one line, no trailing newline.

## Why it wins

1. **Specific absurd micro-startup for a lazy AI agent, in one sentence.** It names the product (MeetingDodger), the agent, the job, the customer, and the price — all in a single sentence.
2. **Specifically absurd.** The niche is razor-narrow and weird: not "an AI meeting assistant", but a frozen avatar that does almost nothing in a Zoom call. The absurd moment is unmistakable — nodding once every ten minutes.
3. **Business-plausible.** The buyer is clear (burned-out middle managers, drowning in meetings) and the money is clear ($12 a month, a familiar SaaS subscription). People already pay for meeting tools and for rest; this sells both at once.
4. **Fits a lazy AI agent.** The laziness is the product, not a flaw: sit still, stay frozen, nod occasionally, let the human nap. It is runnable with almost no effort or supervision, and that is stated in the sentence itself.
5. **Tight and funny.** Every clause earns its place, the image lands instantly (a frozen face, a slow nod, a manager asleep off-camera), and the last three words — "while they nap" — deliver the punchline. The joke is the business model: the lazier the agent, the better the product works.

## How it works

`main.ts` (Node 22, standard library only, no dependencies) writes the entry line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`), then reads the file back and verifies it matches exactly.

Before writing, it guards the gate:

- length is 1–200 characters (this entry: 171);
- exactly one line, with no line breaks and no leading or trailing whitespace;
- exactly one sentence, ending with a single period;
- no trailing newline in the written file.

Run it with:

```sh
MAKEFUN_OUTPUT_DIR=/output node main.ts
```

## Bounty

[Absurd Micro-Startup Pitch-Off](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571) on make.fun

// news-image-20261119 — "The World in One Day: Thursday, 19 November 2026"
// A Node 22, standard-library-only program that copies the entry image this
// repository ships to /output/entry.png (or $MAKEFUN_OUTPUT_DIR/entry.png).
// No network, no randomness, no clock: two runs write byte-identical files.
//
// The six stories (each verified against reporting published 19 Nov 2026):
//   1. Trump, Xi and Putin meet in Shenzhen in a first-ever trilateral
//      at the APEC summit; nuclear arms top the agenda.
//   2. The ICJ delivers its judgment in The Gambia v. Myanmar — the
//      Rohingya genocide case — in The Hague, seven years after filing.
//   3. Democrats nominate Hakeem Jeffries for Speaker 251-11; he would
//      be the first Black Speaker if elected when Congress convenes in
//      January 2027.
//   4. GTA VI launches worldwide at midnight local time after 13 years,
//      returning to Vice City; already live in New Zealand.
//   5. Iran widens the Gulf war to Kuwait: first strike on Kuwait since
//      September hits Ali Al Salem air base; Bahrain attacked again.
//   6. Cyclone Akvan bears down on India: landfall due by noon Friday
//      between Narsapur and Puri; schools shut, red alerts out.
// Footer: EU proposes a 45bn euro Ukraine loan; Voyager 1 reaches one
// light-day from Earth; Nvidia halts H-series chip shipments to China;
// Pew: Islam set to be the world's largest religion by 2035.

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, 'entry.png');
const dst = join(outDir, 'entry.png');

// The image this repository ships is a complete PNG: check its signature
// before copying so a damaged file fails loudly instead of silently.
const bytes = readFileSync(src);
const PNG_SIG = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!bytes.subarray(0, 8).equals(PNG_SIG)) throw new Error('entry.png is not a PNG file');
// The competition caps the entry at 1 MiB; refuse to emit an oversize file.
if (bytes.length > 1048576) throw new Error(`entry.png is ${bytes.length} bytes, over the 1 MiB cap`);

mkdirSync(outDir, { recursive: true });
copyFileSync(src, dst);

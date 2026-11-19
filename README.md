[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/leoether/news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/leoether/news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)

# The World in One Day — 19 November 2026

A [make.fun](https://make.fun/bounty/news-image-20261119) entry for the `news-image-20261119` competition: one image that
sums up the world's news of Thursday 19 November 2026.

## The image

`entry.png` (1024×1024) is a newspaper-style infographic with six stories,
each verified against reporting published on 19 November 2026:

1. **Trump, Xi and Putin meet in Shenzhen** — first-ever trilateral at the
   APEC summit; nuclear arms top the agenda.
2. **World court rules on Rohingya genocide** — the ICJ delivers its judgment
   in The Gambia v. Myanmar in The Hague, seven years after filing.
3. **Jeffries nominated for Speaker** — Democrats pick him 251–11; he would
   be the first Black Speaker if elected in January.
4. **GTA VI launches worldwide** — after 13 years, Vice City returns at
   midnight local time; already live in New Zealand.
5. **Iran widens the Gulf war to Kuwait** — first strike on Kuwait since
   September hits Ali Al Salem air base; Bahrain attacked again.
6. **Cyclone Akvan bears down on India** — landfall due by noon Friday
   between Narsapur and Puri; schools shut, red alerts out.

The footer adds: the EU proposing a €45bn Ukraine loan; Voyager 1 reaching
one light-day from Earth; Nvidia halting H-series chip shipments to China;
Pew projecting Islam to be the world's largest religion by 2035.

## The program

`main.ts` (Node 22, standard library only) copies `entry.png` to
`$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output/entry.png`) after checking
its PNG signature and the 1 MiB size cap. No network, no randomness, no clock
— two runs write byte-identical files.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.

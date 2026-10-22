# synsnumedia.se: tweak-lista mot brand-spec v3

> 22 oktober 2026. Små justeringar så att sajten följer `brand-spec-v3.md`. INGET är gjort. Sajten ändras först när Emanuel säger till.
> Prioritet: A = syns för besökare eller är fel, B = brandets konsekvens, C = städning i koden (syns inte).

| # | Prio | Sida | Vad | Varför | Källa |
|---|---|---|---|---|---|
| 1 | A | hemsida | Formuläret postar till `https://formspree.io/f/placeholder`. Byt till samma Formspree-adress som kontakt (`xjkvrpke`) eller en Vercel-funktion | Förfrågningar försvinner. Inte brand, men det viktigaste på listan | `hemsida.html`, `<form class="lead-form">` |
| 2 | A | alla med sidfot | Byt ordbilden med `filter: brightness(0) invert(1)` mot negativa ordbilden i två toner (`brand/v2-forslag/lockups/ordbild-negativ.svg`) | Filtret gör MEDIA vitt och tar bort loggans tvåton | `global.css:514-518`, `index.html:2203` |
| 3 | A | index, kundcase, case | Stora sidfoten: byt hash + "SYNS NU MEDIA" satt i Plus Jakarta mot `lockups/liggande-negativ.svg` | Namnet ska alltid vara ordbilden, inte text | `index.html:2248-2251` |
| 4 | A | alla | Favicon: byt `hash-mark-black.png` (813 px) mot ikonsetet i `brand/v2-forslag/web-ikoner/` (platt hash i fliken, apple-touch och manifest) | Originalhashen blir grå sörja på 16 px | `<link rel="icon">` rad 13 i varje sida |
| 5 | A | index | Ordbilden över limegröna heron: använd varianten med MEDIA i #71717A | #8A8A8A på lime är 2,8:1, under 3:1 | `index.html:1662`, `1689-1690` |
| 6 | A | marknadsforing | Rubriker i Title Case ("Öka Din Restaurangs Försäljning Med Marknadsföring", "Upptäck Kraften i ...") till meningsversal | Alla andra sidor har meningsversal | `marknadsforing.html` H1 och H2 |
| 7 | B | index | Tjänstesektionens kalla grå #EEEFF1 till Mjöl #F4F4F2 | Den enda kalla grå på sajten; allt annat är varmt | `index.html:401` |
| 8 | B | sociala-medier, marknadsforing, hemsida, seo | `style="background: var(--bg-2)"`: variabeln finns inte, sektionen blir genomskinlig. Byt till `var(--bg-soft)` (Duk) | Rytmregeln: varannan sektion byter yta | `sociala-medier.html:349`, `marknadsforing.html:248`, `hemsida.html:345`, `seo.html:315` |
| 9 | B | index | Copyrightraden i stora sidfoten: vit 40 % till 55 % | 3,8:1 för 12 px text, under 4,5:1 | `index.html:1546-1552` |
| 10 | B | undersidor | Sidfotens rubriker: från VERSALER med 0,08em till vanlig skrift som i stora sidfoten | Två olika sidfötter med olika rubrikstil | `global.css:546-552` |
| 11 | B | alla | Blått #3B82F6 / #2563EB (case-kortens platshållare, SEO-popupens poängring) och #667EEA / #764BA2 (gamla gradienter) till Syns-blå #1A73E8, eller till pasteller i poängringen | En blå i hela systemet | `pages.css:2527`, `2784`, `2895`; `index.html:2272`, `2347`, `2400` |
| 12 | B | index (SEO-popup) | Poängringens gradient grön till blå: byt till tillväxtkurvan (blå, lila, rosa) eller en pastell | Gradientens enda linjära form är tillväxtkurvan | `index.html:2272` |
| 13 | B | index | Ögonbrynen: heron har versaler med 0,14em, siffersektionen versaler med 0,04em, undersidorna piller i gemener. Välj pillret med gemener överallt | Tre stilar för samma sak | `index.html:87-104`, `764-770`; `global.css:159-172` |
| 14 | B | index, case | Rött #DC2626 och #EF4444: använd #DC2626 för text, #EF4444 bara för ikoner | Två röda | `pages.css:205`, `2400`; `index.html:1897-1907` |
| 15 | B | sociala-medier (prislista), undersidor | Grönt #10B981 som text (2,5:1) till #047857 | Kontrast | `global.css:39` och där `--success` används som textfärg |
| 16 | C | alla | Döp om `.gradient-text` till `.accent` (behåll gamla namnet som alias) | Klassen ger serif-kursiv, ingen gradient | `global.css:174-180` |
| 17 | C | alla | Ta bort `.btn--gradient`, `--g-gradient`, `--g-gradient-soft`, `--shadow-glow` | Används inte (0 träffar i HTML) | `global.css:19-20`, `59`, `270-279` |
| 18 | C | alla | `.btn--blue` är svart. Låt `.btn--primary` vara namnet och behåll `.btn--blue` som alias | Namnet stämmer inte med färgen | `global.css:239-249` |
| 19 | C | index | Lägg pastellerna som riktiga tokens i `global.css` (`--lime`, `--lavendel`, `--persika`, `--sand`, `--kola`, `--mynta`, `--gradde`) i stället för `--edit-*` i varje sida, och ge #E5CDAB och #F3F1EC tokens | Samma färger definieras på tre sidor (index, kundcase, case) | `index.html:17-25`, `kundcase.html:19-24`, `case-brams-burgers.html:735-737` |
| 20 | C | index | `.tri-dot` används inte i HTML. Ta bort, eller använd som "live"-markör om Emanuel vill ha trepricken (spec 6.9) | Död kod | `index.html:133-147` |
| 21 | C | alla | Två ease-out-kurvor (`--ease-out` och cubic-bezier(0.22, 1, 0.36, 1)) till en | Konsekvens | `global.css:70`, `index.html:777` m.fl. |
| 22 | C | alla | Telefonnumret i gamla `brand-spec.md` (070-888 01 98) stämmer inte med sajten (070-842 58 33) | Ett dokument fel, sajten rätt | `brand-spec.md` avsnitt 1 |

Medvetet inte på listan (större än en tweak, eller utanför uppdraget): en gemensam sidfot för alla sidor, nya sektioner med hashmönster eller rutnät, sociala mallar. Nämns här, byggs inte.

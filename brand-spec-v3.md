# Syns Nu Media: brand-spec v3

> Skriven 22 oktober 2026. Bygger på `brand-spec-v2.md` (logotyp, tester, källor) och ersätter den som arbetsdokument.
> Referensen är synsnumedia.se som den ser ut i dag. Emanuel: "synsnumedia.se är det jag tycker om." Specen fångar sajtens uttryck och gör det komplett nog att bära KK, portalen, startskärmen med videoväggen, sociala inlägg och tryck.
> Status: UTKAST. Guidelines-sidan: `brand/syns-nu-brand-guidelines.html` och `brand/Syns-Nu-brand-guidelines.pdf` (17 sidor, i förlagan Aurex stil, se `brand/referens-aurex/referens.md`). Översikt: `brand/syns-nu-brand-oversikt.png`. Förhandsvisning av sajten: https://syns-nu-v3-preview.vercel.app (egen kopia, inte live). Tweak-listan för sajten: `brand/sajt-tweak-lista.md`. Ingenting är ändrat live.

## Så läses dokumentet

- Källhänvisningar som i v2: `global.css:26`, `pages.css:2059`, `index.html:50` (rad i sidans inline-CSS). Kopior av den levererade koden: `brand/sajt-idag/kalla/`.
- **Från sajten** = finns på synsnumedia.se i dag. **FÖRSLAG** = mitt tillägg eller val där sajten är inkonsekvent eller tyst. Emanuel avgör.
- Bilder: sajten i dag `brand/sajt-idag/`, logotyp `brand/v2-forslag/`, sekundära element `brand/v3-element/` (prov: `element-prov.png`).

## Vad som är nytt sedan v2

1. Färgsystemet är fyra familjer med roller: grund, pasteller, signal och sken. Pastellerna har fått namn, roller, tjänstefärger och kombinationsregler.
2. Gradienten har fått sin plats: **Skenet**, mjukt ljus i gradientens färger. Det är så sajten redan använder den (rättelse av v2, som sa att gradienten inte syns).
3. Sekundära element ur hashen och sajten: vattenstämpeln, rutnätet, djupet, pilknappen, stora tal i serif, pastellkorten.
4. Layout och rytm: hur sajten växlar ytor, och regler för det.
5. Bild, video, ikoner, rörelse.
6. KK, portalen och startskärmen med videoväggen.

---

## 1. Varumärket

**Vad vi gör:** marknadsföring för restauranger: sociala medier, inspelning på plats, hemsidor, menyfoto, Google och SEO.
**Löftet (från sajten):** "Marknadsföring som faktiskt driver visningar och *resultat*." Resultatet mäts i gäster och kassa, inte i likes.
**Positionering (från sajten):** Sveriges största marknadsföringsbyrå för restauranger, 170+ restaurangpartners.

| Personlighet | Betyder | Sajten säger |
|---|---|---|
| **Bevisande** | varje påstående har en siffra eller ett namn | "Riktiga siffror från riktiga restauranger, *inte uppskattningar*." |
| **Restaurangnära** | vi står i köket, inte i ett konferensrum | "Vi åker till er, filmar hantverket på plats och bygger content som känns äkta." |
| **Varm premium** | snyggt och genomarbetat, aldrig stelt | pasteller, riktiga människor, serif-accenten |

**Syns Nu är:** kocken som filmas vid grillen, siffran som stiger i kundens konto, ägaren som ser sitt flöde fyllas.
**Syns Nu är inte:** en reklambyrå som "råkade svänga förbi", virala löften, engagement-jargong, stockbilder.

### Tonläge

| Säg | Säg inte |
|---|---|
| gäster, kassa, salong, kök, lunch, visningar, följare | engagement, reach, synergier, holistisk, "ta er till nästa nivå" |
| konkreta tal med period: "1 845 nya följare på 3,5 månader" | "massor av nya följare" |
| "Boka gratis möte" | "Kontakta oss för mer information" |

Skrivregler (från sajten, FÖRSLAG där markerat):
- Meningsversal i rubriker. (Undantag på `marknadsforing.html` står i tweak-listan.)
- Ett accentord per rubrik i Instrument Serif kursiv (avsnitt 4.3).
- Siffror med mellanslag som tusentalsavgränsare och decimalkomma: 1 845, +39,47 %.
- Inga emojis i någon kanal. Ikoner är SVG.
- FÖRSLAG: kort tankstreck (–) högst en gång per stycke. Sajten har 76 långa tankstreck på 11 sidor.

---

## 2. Logotypen

Allt om loggan står i `brand-spec-v2.md` avsnitt 2 och filerna i `brand/v2-forslag/`. Kort:

- **Två delar:** hash-märket i tre dimensioner och ordbilden SYNSNU (bläck) MEDIA (grå #8A8A8A). Behålls som de är. Båda är vektoriserade ur originalfilerna.
- **Storlekssteg för hashen:** original från 48 px, liten med djup 25 till 47 px, platt 16 till 24 px.
- **Varianter:** ordbild två toner, negativ två toner, på pastell (MEDIA i #71717A), en färg, liggande och stående uppställning, symbol, appikon på lavendel.
- **Frizon:** en stapelbredd S (15,6 % av hashens bredd) runt symbol och uppställningar. Halva versalhöjden runt ordbilden.
- **Minsta storlek:** ordbild 12 px versalhöjd och 4 mm. Liggande uppställning minst 48 px hög.
- **Hashen är också grafik** (avsnitt 6): vattenstämpel, rutnät och djup. Inget upprepat hashmönster (Emanuel 22/10). Grafiken använder hashens form men ersätter aldrig loggan. Ordbilden står alltid med någonstans på samma yta.

---

## 3. Färgsystemet

Fyra familjer. Varje färg har en roll. Färgerna kommer från sajten; namnen är nya (FÖRSLAG) så att teamet kan säga "lavendelkortet" i stället för en hexkod.

### 3.1 Grund: neutraler, cirka 75 % av varje yta

| Namn | HEX | Sajtens token | Roll | Källa |
|---|---|---|---|---|
| **Bläck** | #0F0F10 | `--text` | rubriker, text, primärknapp, ikoner | `global.css:29` |
| **Natt** | #0A0A0B | `--bg-dark` | mörka sektioner, sidfot, utvalt priskort, startskärmen | `global.css:26` |
| **Skiffer** | #141416 | `--bg-dark-2` | kort på Natt | `global.css:27` |
| **Papper** | #FFFFFF | `--bg` | kort, nav, formulär, vita sektioner | `global.css:23` |
| **Duk** | #F7F7F5 | `--bg-soft` | huvudyta, undersidornas hero, KK:s ram | `global.css:24` |
| **Mjöl** | #F4F4F2 | `--bg-tint` | fyllning, hover, inaktiva piller | `global.css:25` |
| **Grädde** | #F3F1EC | (ingen token) | redaktionella sektioner: press, case-listor | `index.html:1337`, `pages.css:3752`, `kundcase.html:32` |
| **Linje** | #EAEAE6 | `--border` | hårlinjer, kort, fält | `global.css:35` |
| **Kant** | #D4D4D0 | `--border-strong` | spökknapp, hover, fältkant i KK | `global.css:36` |
| **Grafit** | #52525B | `--text-2` | brödtext, navlänkar | `global.css:30` |
| **Rök** | #71717A | `--text-3` | ingress, metadata; MEDIA på pastell | `global.css:31` |
| **Mediagrå** | #8A8A8A | (ordbilden) | bara MEDIA i ordbilden och den lilla hashens djup | `assets/media/699641283fd420658d5267af.webp` |

### 3.2 Pasteller: ytor med karaktär, cirka 15 %

Från sajtens `--edit-*` (`index.html:17-25`) och tjänstekorten (`index.html:507-509`).

| Namn | HEX | Sajtens token | Roll | Där den syns i dag |
|---|---|---|---|---|
| **Lime** | #E5EE9E | `--edit-olive` | **signaturfärgen.** Startsidans hero, Google och SEO | `index.html:50`, `508` |
| **Lavendel** | #E8E1FF | `--edit-lavender` | avslut och handling: CTA-ytan bredvid videon, appikonen | `index.html:278`, `1434`; KK `public/icon-512.png` |
| **Lavendel ljus** | #F4EFFF | `--edit-lavender-soft` | stora ljusa ytor i lavendelfamiljen | `index.html:19` |
| **Persika** | #FFCFA8 | `--edit-peach` | menyfotografering, värme, citat | `index.html:507` |
| **Persika ljus** | #FFE6D2 | `--edit-peach-soft` | ljus yta | `index.html:21` |
| **Sand** | #E5CDAB | (ingen token) | sociala medier | `index.html:509` (`.service-card--cream`) |
| **Kola** | #F5D7B8 | `--edit-warm` | reserv, varm yta | `index.html:24` |
| **Mynta** | #4EBFB8 | `--edit-teal` | den enda mättade: prickar, ikoner, dataserie. Aldrig yta med text | `index.html:23`, `1253` |

**Tjänstefärger** (från startsidans tjänstekort; FÖRSLAG att låsa dem i hela systemet: taggar i KK, case-kort, sociala inlägg):

| Tjänst | Färg | Källa |
|---|---|---|
| Sociala medier | Sand #E5CDAB | `index.html:1838`, `509` |
| Webbdesign | Natt #0A0A0B | `index.html:1853` |
| Menyfotografering | Persika #FFCFA8 | `index.html:1868`, `507` |
| Google och SEO | Lime #E5EE9E | `index.html:1883`, `508` |
| Kundcase och resultat | Lavendel #E8E1FF (FÖRSLAG) | lavendel bär case-avslutet `index.html:1434` |
| Inspelning och video | Mynta #4EBFB8 som prick (FÖRSLAG) | |

**Bläckfärger till pastellerna**, för text eller ikon i pastellens egen ton (från KK-grenen `src/app/globals.css:75-98`):

| Pastell | Ljus yta | Kant | Bläck | Bläck på ljus yta |
|---|---|---|---|---|
| Lavendel | #F4F0FF | #DCD2FA | #573FA8 | 6,2:1 |
| Lime | #F5F8DF | #DDE9A4 | #55631A | 5,4:1 |
| Mynta | #E7F6F5 | #B9E4E1 | #0F6F6A | 5,4:1 |
| Persika | #FEEEE0 | #FBD3B4 | #9A4A08 | 5,5:1 |
| Grädde | #F7F5F0 | #E6E2D8 | #5C574C | |

### 3.3 Signal: Syns-blå, cirka 5 %

| Namn | HEX | Roll | Källa |
|---|---|---|---|
| **Syns-blå** | #1A73E8 (`--g-blue`) | fokusring, markerad text, valt läge, länk i löptext på vitt, första dataserien i KK | `global.css:11`, `133`, `pages.css:389-393` |
| Syns-blå mörkt läge | #6BA1F5 | samma roller på Natt (7,6:1) | KK-grenen `globals.css:163` |

Blått är en signal, inte en yta. Aldrig knappfyllning, aldrig på pastell (3,6:1 på lime, 2,0:1 på mynta), aldrig i loggan. Övriga blå på sajten (#3B82F6, #2563EB, #667EEA) fasas ut, se tweak-listan.

### 3.4 Skenet: gradientens plats

Sajten använder inte gradienten som en hård linjär gradient. Färgerna finns däremot som **mjukt ljus**:
- lila och rosa radiellt sken på den mörka CTA-bannern (`pages.css:2059-2067`: rgba(139,92,246,.2) och rgba(236,72,153,.12)),
- persika och blått sken bakom undersidornas hero (`pages.css:18-30`, blur 50 px).

**Regel (FÖRSLAG):** gradientens färger (#1A73E8, #8B5CF6, #EC4899 plus persika) används bara som Skenet: radiella fläckar med 10 till 25 % täckning och 40 till 60 px oskärpa, bakom innehåll, på Natt eller Duk. Högst ett sken per vy. Aldrig som linjär gradient på text, knappar, ikoner, kort eller loggan. `.btn--gradient` och `--g-gradient` behövs inte.

I KK: Skenet bakom startskärmens nedre del och bakom inloggningsformuläret. KK-grenens gradientindikator vid valt menyval blir Bläck (FÖRSLAG, se 11).

### 3.5 Andelar och kombinationer

**Andel per vy:** grund cirka 75 %, pasteller cirka 15 % (en eller två), Natt-ytor och bilder resten, signal under 5 %.

**Text på ytor (WCAG 2.1, beräknat):**

| Text \ yta | Papper | Duk | Grädde | Lime | Lavendel | Persika | Sand | Mynta | Natt |
|---|---|---|---|---|---|---|---|---|---|
| Bläck | 19,2 | 17,9 | 17,0 | 15,6 | 15,2 | 13,5 | 12,5 | 8,6 | |
| Grafit | 7,7 | 7,2 | 6,9 | 6,3 | 6,1 | 5,4 | 5,0 | 3,5 | |
| Rök | 4,8 | 4,5 | 4,3 | 3,9 | 3,8 | 3,4 | 3,1 | 2,2 | |
| Syns-blå | 4,5 | 4,2 | 4,0 | 3,7 | 3,6 | 3,2 | 2,9 | 2,0 | 4,4 |
| Vit | | | | 1,2 | 1,3 | 1,4 | 1,5 | 2,2 | 19,8 |
| Pastell som text | | | | | | | | | 8,9 till 16,1 |

**Regler:**
1. Text på pastell är Bläck eller Grafit. Aldrig vit, aldrig blå, aldrig Rök i brödtext.
2. En pastell per sektion. Två pasteller sida vid sida bara som kort i en rad, till exempel tjänstekorten.
3. Pastell på pastell förekommer inte. Mellan två pastellsektioner ligger alltid en neutral sektion eller en bild.
4. Mynta är aldrig yta med text. Bara prick, ikon, linje eller dataserie.
5. På Natt får pasteller vara text, siffror, prickar, piller och ringar (8,9 till 16,1:1). Så gör sajtens siffersektion.
6. Blått bara på Papper och Duk, eller som #6BA1F5 på Natt.
7. Rök bara på Papper och Duk, och bara för metadata.
8. Vit text på mörkt minst 55 % opacitet.

### 3.6 Data och diagram

Från startsidans siffersektion (ringar i lavendel, mynta och lime på Skiffer, `index.html:850-930`):
- **På Natt och Skiffer:** serie 1 Lavendel, 2 Mynta, 3 Lime, 4 Persika. Etiketter i vit 60 %, förändring i pastellpiller med Bläck-text.
- **På ljust (KK):** serie 1 Syns-blå, 2 Lavendelbläck #573FA8, 3 Myntabläck #0F6F6A, 4 Persikabläck #9A4A08. Positiv förändring #047857, negativ #DC2626.
- **Tillväxtkurvan (FÖRSLAG):** en linje som visar tillväxt får gå i gradientens färger blå, lila, rosa. Det är gradientens enda tillåtna linjära form, eftersom den betyder något: siffran stiger.

---

## 4. Typografi

### 4.1 Typsnitt

| Typsnitt | Roll | Källa |
|---|---|---|
| **Plus Jakarta Sans** 300 till 800 | allt: rubriker, text, knappar, siffror i gränssnitt | `global.css:42-43` |
| **Instrument Serif** kursiv 400 | rösten: ett accentord per rubrik och stora hero-tal | `global.css:174-180`, `index.html:169`, `214`, `962` |

Ordbildens versaler är eget ritade och används bara i loggan.

### 4.2 Plus Jakarta Sans

Sajtens skala (uppmätt 1440 / 390 px):

| Roll | Storlek | Vikt | Spärrning | Radavstånd |
|---|---|---|---|---|
| Display (startsidans H1) | 84 / 35 px | 600 | -0,04em | 0,98 |
| H1 undersida | 60 / 31 px, clamp(2,25rem, 6vw, 5rem) | 600 | -0,045em | 1,1 |
| H2 | 52 / 28 px (startsidan 64 till 80) | 600 (startsidan 700) | -0,035em | 1,1 |
| H3 | 18 till 26 px | 600 | -0,02em | 1,1 |
| Ingress | 17 till 19 px | 400 | 0 | 1,55 |
| Brödtext | 16 px (mest använda 15 px) | 400 | 0 | 1,65 |
| Knapp | 15 px (sm 14, lg 16) | 600 | -0,01em | |
| Etikett, eyebrow | 12 px | 500 | 0,02em | |

KK:s skala (fast rem): som `brand-spec-v2.md` 4.3. Sidtitel 30 px vikt 600, nyckeltal 28 px tabulära siffror, UI 14 px, etikett 12 px.

Rubrikvikten är 600 i hela systemet. 700 bara på startsidans H2 och case-heron (FÖRSLAG: behåll där, inte i KK).

### 4.3 Serif-accenten

Den mest igenkännbara typografiska detaljen på sajten. Exempel: "driver visningar och *resultat*", "innehåll som når *rätt gäst*", "Din restaurang på *varje feed*", "Syns Nu Media vs. *göra det själv*", "Vad *restaurangerna* säger".

Regler (från sajten, sammanfattade):
1. **Ett** ord eller en kort fras per rubrik, oftast i slutet eller vid det som är poängen.
2. Samma storlek och färg som rubriken. Vikt 400, kursiv, spärrning -0,015em (`global.css:174-180`).
3. Bara i rubriker från 20 px och uppåt, och i stora tal i en hero (170+, 50M+, 3+ År, `index.html:213-218`).
4. Aldrig i brödtext, knappar, nav, etiketter, tabeller eller formulär.
5. Aldrig i versaler. Aldrig två accenter i samma rubrik.
6. Klassen heter `.gradient-text` av historiska skäl. FÖRSLAG: döp om till `.accent` (tweak-listan).

I KK (FÖRSLAG): på startskärmen, inloggningen, portalens välkomstrubrik och stora tomlägen. Aldrig i panel, tabeller eller nyckeltal.

---

## 5. Layout och rytm

### 5.1 Så är startsidan byggd (referensen)

| # | Sektion | Yta | Innehåll | Källa |
|---|---|---|---|---|
| 1 | Hero | **Lime**, 100vh | ögonbryn-piller, H1 med serif-accent, pilknapp + textlänk, tre tal i serif nere till höger, vattenstämpel | `index.html:44-60` |
| 2 | Övergång | #FAFAF7 | H2 med accent, foto och text i två kolumner | `index.html:283` |
| 3 | Tjänster | #EEEFF1 | vågrät rad med tjänstekort i Sand, Natt, Persika, Lime, runda pilknappar | `index.html:400` |
| 4 | Film + siffror | fullbredd video, sedan **Natt** | "Bevis i siffror", kort på Skiffer med pastellringar och fotokort | `index.html:678` |
| 5 | Insikter | Papper | stora foto- och videopaneler med bildtext | `index.html:996` |
| 6 | Press | **Grädde** | omnämnanden | `index.html:1336` |
| 7 | Avslut | video bredvid **Lavendel**, 90vh | handling | `index.html:1412`, `1434` |
| 8 | Sidfot | **Natt** | fem kolumner, stor liggande uppställning | `index.html:1479` |

Undersidorna: centrerad hero på Duk med Skenet (persika och blått), sedan Papper och Duk varvat, en mörk CTA-banner med Skenet (lila och rosa), sidfot på Natt (`pages.css:9-30`, `2038-2067`).

### 5.2 Rytmregler (utlästa ur sajten, FÖRSLAG som regler)

1. Varje sida börjar ljust (Lime på startsidan, Duk på undersidor) och slutar på Natt.
2. Varannan sektion byter yta. Samma yta två gånger i rad bara med en bild emellan.
3. En pastellsektion per sida, plus pastellkort.
4. Fullbredd video eller foto bryter av mellan ljust och mörkt.
5. Siffror bor på Natt. Citat bor på Grädde eller Persika.
6. Rubriker vänsterställda på startsidan och centrerade på undersidor. FÖRSLAG: behåll som skillnad mellan redaktionellt och tjänst.

### 5.3 Mått

`--container` min(1400px, 94vw), `--gutter` 24 px (18 px under 480), sektionsluft clamp(80px, 12vw, 160px) på startsidan och `--section-y` clamp(96px, 12vw, 160px) på undersidor. Rubrik till text 16 px. Kortluft 28 till 36 px. Källor i v2 5.1. KK har en egen tät 4-skala (v2 5.1).

### 5.4 Radier

Helrunda knappar och piller. Kort 28 px (`--r-xl`). Tjänstekort 22 px. Stora block och CTA-banner 40 px (`--r-2xl`). FAQ-rader 20 px. Fält 10 px. Ikonplattor 12 px. KK: kort 20 px, fält 10 px.

---

## 6. Sekundära element

Prov: `brand/v3-element/element-prov.png`. Filer i samma mapp.

### 6.1 Vattenstämpeln (från sajten)
Originalhashen, stor och beskuren i ett hörn, 6 % opacitet i Bläck på ljus yta (`index.html:56-70`: 38vw brett, max 540 px, -6 % och -8 % utanför kanten). På Natt: vit hash med 6 till 8 %. Högst en per vy. Bara på hero, omslag, startskärm och stora kort. Aldrig bakom brödtext.

### 6.2 Inget upprepat hashmönster
Hashen upprepas aldrig som mönster eller tapet. Emanuel 22/10: "jag tyckte inte om hashmönstret." Hashen står ensam: som logga, som vattenstämpel eller som rutnät.

### 6.3 Rutnätet (FÖRSLAG, nytt)
Hashens fyra staplar utdragna till hårlinjer över ytan (`hash-rutnat.svg`, `hash-rutnat-ljus.svg`), 15 till 25 % opacitet. Används som layoutstöd på Natt: omslag, presentationer, startskärmens överdel. Innehåll placeras i rutorna.

### 6.4 Djupet (FÖRSLAG, nytt, ur hashens extrusion)
Hashens djup går 45 grader nedåt höger. Samma djup som skugga på klistermärken och piller i sociala inlägg: hård skugga i Bläck, förskjutning 6 px (8 % av elementets höjd, max 12 px), 2 px Bläck-kant, pastellfyllning. Bara i socialt och kampanj. Aldrig i KK:s gränssnitt eller på sajtens knappar.

### 6.5 Pilknappen (från sajten)
Svart pill med text och en vit rund platta med pil till höger. Bredvid: textlänk med pil och understrykning (startsidans hero, `hero-start-1440.png`). Pilen glider 3 px vid hover (`global.css:285`). Syns Nus primära handling.

### 6.6 Stora tal (från sajten)
Resultat som stora tal i Instrument Serif kursiv (startsidan 48 px: 170+, 50M+, 3+ År) med etikett i Plus Jakarta 12 px under. På Natt: tal i Plus Jakarta 600 med pastellring eller pastellpiller för förändringen.

### 6.7 Pastellkorten (från sajten)
Tjänstekort i en pastell per tjänst, 22 px radie, 32 px luft, rubrik 600, kort text, pris, bild eller mockup nertill som går ut i kanten (`index.html:489-509`). Samma form för case-kort och för kategorikort i KK.

### 6.8 Skenet (från sajten, avsnitt 3.4)
Mjukt ljus i gradientens färger bakom innehåll.

### 6.9 Trepricken (FÖRSLAG)
Tre små prickar i Persika, Mynta och Lavendel finns definierade (`.tri-dot`, `index.html:133-147`) men används inte i HTML:en. FÖRSLAG: används som "live"-markör ("Inspelning pågår", "Publicerat i dag") i KK och i sociala inlägg. Prickarna 0,22em, mellanrum 0,08em.

---

## 7. Komponenter

Samma som `brand-spec-v2.md` avsnitt 6, med tillägg:
- **Ikonplatta** (`pages.css:102-114`): 48 px, 12 px radie, Duk med Linje-kant, ikon i Bläck. Vid hover blir plattan Bläck och ikonen vit, med skala 1,08 och -3 graders vridning (`pages.css:96-100`).
- **CTA-band** (`pages.css:2038-2067`): Natt, 40 px radie, Skenet i lila och rosa, rubrik vit, ljus knapp till höger.
- **Tjänstekort, sifferkort, citatkort**: avsnitt 6.6 och 6.7.
- **Priskort**: utvalt kort i Natt, lyft 12 px, piller "Mest populär".

---

## 8. Ikoner

Från sajten: inline-SVG i 24 x 24-ruta, kontur 2 px (2,5 px i små bockar), rundade ändar och hörn, ingen fyllning, `currentColor`. 234 av 290 uppmätta SVG:er följer det. Ikoner står i en rund eller rundad platta, aldrig fritt i en lista. Sociala ikoner i sidfoten: 36 till 40 px runda med vit 6 % fyllning eller vit 15 % kant.
I KK: Lucide (samma stil), 16 till 20 px, 1,75 till 2 px kontur. Aldrig ikonfont, aldrig fyllda ikoner bredvid konturikoner, aldrig emojis.

---

## 9. Bild och video

### 9.1 Foto (från sajten, `assets/media/`)
- **Riktiga kunder, riktiga människor:** ägare och kockar i köket, personal vid invigning, gäster i kö utanför.
- **Maten nära och ovanifrån:** bordet fullt, eld, rök, glans. Varma toner, ljus från fönster eller köksljus, djupa skuggor.
- **Platsen:** skyltar och fasader (Bramsburgers, Falafelbaren, Sushi Revolution).
- **Beskärning:** fyller sin yta (`object-fit: cover`), ingen ram och ingen skugga på fotot. Radien kommer från kortet.
- **Aldrig:** stockfoton, AI-genererad mat, gästfoton som huvudbild, bilder med kall blå kontorston.

### 9.2 Video (från sajten)
- **Stående 9:16** från kundernas egna flöden (540 x 960 och 720 x 1280 i `assets/media/`), tyst, loop, `autoplay muted playsinline` (`index.html:1968`, `2017`).
- Innehåll: en person som pratar i kameran i restaurangen, en rätt som görs, en invigning, en kö.
- På sajten: fullbredd mellan sektioner och i kort bredvid pastell.
- **Undertexter (FÖRSLAG):** Plus Jakarta 700, vit, på en Natt-platta med 60 % täckning och helrund radie, nedre tredjedelen, högst två rader.
- Logga i film: negativ ordbild uppe till vänster eller liggande uppställning i sista sekunden, aldrig vattenstämpel över ansikten.

### 9.3 Bild och text
Text över foto bara med Natt-toning nedifrån (0 till 70 %). Bildtexter i vitt 15 px på panelerna (startsidans insikter). Pasteller läggs aldrig som färgfilter över foto.

---

## 10. Rörelse

Sammanfattning av v2 5.4 plus regler:
- Intoning uppåt 20 px, 700 till 800 ms, kurvan cubic-bezier(0.22, 1, 0.36, 1) eller (0.16, 1, 0.3, 1). Stagger 80 till 120 ms.
- Rubriker ord för ord nerifrån (translateY 110 %, 750 ms).
- Siffror räknar upp när de syns (`js/main.js:155`).
- Hover 150 till 260 ms: knappar lyfter 1 px, kort lyfter 3 px, pilar glider 3 px, ikonplattor vrids -3 grader.
- Allt stängs av vid minska rörelse.
- KK: en kurva (0.23, 1, 0.32, 1), inga skrollintoningar i listor. Videoväggen rör sig långsamt och konstant (avsnitt 12).

---

## 11. KK och kundportalen

KK ska kännas som sajten, i arbetsläge: samma grund, typsnitt, knappar och pasteller, men tätare och lugnare.

| Del | Regel |
|---|---|
| Ytor | Ram och panel Duk, innehåll Papper, fyllning Mjöl, hårlinjer Linje. Mörkt läge: helsvart (Emanuel 5/9), kort #0C0C0D |
| Text | Bläck, Grafit, Rök (bara metadata, aldrig på Mjöl) |
| Primärknapp | Bläck, helrund, 36 px i täta vyer, 44 till 48 px på startskärm och inloggning |
| Signal | Syns-blå för fokusring, valt läge i listor, länkar, första dataserien |
| Valt menyval | vit pill med `--shadow-xs` och en 3 x 16 px indikator i **Bläck** (FÖRSLAG, i dag gradient i KK-grenen) |
| Pasteller | kategorier och tjänster enligt tjänstefärgerna (3.2), tomlägen med vattenstämpel, portalens kort. Text i Bläck eller pastellens bläckfärg |
| Status | prick + text: Mynta = pågår eller live, #047857 = klar, #9A4A08 = väntar, #DC2626 = fel |
| Typografi | Plus Jakarta enligt KK-skalan, serif-accent bara på startskärm, inloggning, välkomst och stora tomlägen |
| Logga | ordbild två toner överst i panelen (negativ i mörkt läge), liten hash med djup som panelikon, platt hash som favicon, appikon originalhash på Lavendel |
| Data | 3.6 |
| Skenet | bakom startskärmens nedre del och bakom inloggningen, inget annat ställe |

Tokens: `brand-spec-v2.md` 3.5 gäller, plus pastellerna och bläckfärgerna i 3.2 som redan finns i KK-grenen (`--portal-*`). Två ändringar mot KK-grenen: gradientbandet bakom inloggningen blir Skenet på Natt eller Lime, och gradientindikatorn blir Bläck. KK-grenen har `--portal-peach` #F97316 (orange); sajtens persika är #FFCFA8. FÖRSLAG: `--portal-peach` blir #FFCFA8 och #F97316 utgår.

---

## 12. Startskärmen med videoväggen

Från minnet `project_syns_nu_brand_2026`: välkomstskärmen före inloggningen, för både kunder och personal, med en vägg av videor vi gjort åt kunder. Förlaga: GAMEE-appens startskärm. KK ska fungera som PWA och som native-app i App Store.

**Uppbyggnad (FÖRSLAG):**
- **Yta:** Natt, helskärm (100dvh), ingen skroll, säkra marginaler (`env(safe-area-inset-*)`).
- **Väggen:** stående 9:16-rutor i kolumner. 3 kolumner på telefon, 4 på surfplatta, 6 på dator. Mellanrum 8 px (telefon) till 12 px. Radie 16 px (Skiffer-platta bakom så att det aldrig blinkar vitt). Kolumnerna rullar oändligt, varannan upp och varannan ner, 40 till 60 s per varv, linjärt, olika fas per kolumn. Väggen är lite bredare än skärmen så att ytterkolumnerna beskärs.
- **Videorna:** kundfilmer från `assets/media/` och Frame, tysta, `playsinline`, 540p, med stillbild som poster. Bara synliga rutor spelar; resten visar stillbilden. Ordningen blandar ansikten, mat och platser. Samma film aldrig bredvid sig själv.
- **Toningen:** Natt från 0 till 95 % över nedre 45 % av skärmen, plus Skenet (lila och rosa, 15 %) längst ner.
- **Innehåll i toningen, nedifrån:** knapp, rubrik, logga.
  - Logga: stående negativ uppställning, 72 px bred hash (telefon) eller negativ ordbild 20 px versalhöjd.
  - Rubrik: Plus Jakarta 600, 32 px telefon / 48 px dator, vit, med ett accentord i Instrument Serif. Förslag: "Vi syns. *Och du ser det.*" (KK-grenens löfte för portalen, "vi syns, och du ser det", `design/2026-10/designsystem.md`).
  - En rad under: vit 60 %, 15 px. Till exempel "Kundportalen och teamets kontrollrum."
  - Knapp: ljus knapp (Papper, Bläck-text), helbred på telefon, 52 px hög, med pilplattan i Bläck. Text "Logga in".
- **Rörelse:** loggan, rubriken och knappen tonar in i tur (stagger 120 ms, 800 ms). Minska rörelse: väggen står still med stillbilder, inga videor laddas.
- **Native och PWA:** samma vy. Statusraden ljus. Ingen systemnavigation syns. Videorna förladdas inte över mobilnät; stillbilderna räcker.

---

## 13. Sociala inlägg, tryck och e-post

**Sociala inlägg (FÖRSLAG, inga mallar finns på sajten):**
- Format 4:5 (1080 x 1350) och 9:16. Kundens foto eller film är huvudsaken.
- Resultatinlägg: stort tal i Plus Jakarta 700 eller Instrument Serif, förändring i pastellpiller med Djupet, kundens namn och period i Plus Jakarta 500.
- Textinlägg: en pastell som yta, vattenstämpeln i ett hörn, rubrik i Bläck med serif-accent, ordbilden nere till vänster.
- Karuseller: första bilden foto, resten pastellytor i samma pastell genom hela karusellen.
- Profilbild: originalhash på Lavendel.

**Visitkort** (85 x 55 mm, FÖRSLAG): framsida Papper med liggande uppställning 8 mm hög, namn 9 pt 600, kontakt 7,5 pt Grafit. Baksida Lime med vattenstämpeln (originalhash 6 %) eller Natt med negativ hash 20 mm.

**E-postsignatur (FÖRSLAG):** namn 14 px 600 Bläck, roll och telefon 13 px Grafit, liggande uppställning 24 px hög som PNG i 2x, ingen bakgrundsfärg.

**Presentationer:** omslag i Lime eller Natt med vattenstämpel, innehållssidor på Duk, siffersidor på Natt.

---

## 14. Gör och gör inte

**Gör**
- Låt Duk och Papper bära, en pastell ge karaktär, Natt avsluta.
- En serif-accent per rubrik.
- Visa riktiga kunder, riktiga tal och riktiga filmer.
- Använd tjänstefärgerna konsekvent.
- Låt hashen synas som vattenstämpel eller rutnät, och ordbilden som logga.
- Pilknappen som primär handling.

**Gör inte**
- Linjär blå, lila och rosa gradient på text, knappar eller ytor.
- Vit text på pastell. Mynta som textyta. Blått på pastell.
- Två pastellsektioner i rad.
- Serif i brödtext, knappar, tabeller eller KK:s panel.
- Djupet (hård skugga) i KK eller på sajtens knappar.
- Stockfoto, AI-mat, emojis.
- Namnet satt i Plus Jakarta som logga.
- Upprepat hashmönster (hashen som tapet eller mönster).

---

## 15. Öppna frågor till Emanuel

1. Godkänns färgnamnen (Bläck, Natt, Duk, Lime, Lavendel, Persika, Sand, Mynta) och tjänstefärgerna?
2. Gradienten som Skenet och tillväxtkurvan, och Bläck i stället för gradient på KK:s menyindikator?
3. De nya elementen: rutnätet, Djupet och trepricken. Vilka vill du ha?
4. Startskärmens rubrik: "Vi syns. Och du ser det." eller något annat?
5. Dribbble-referensen för guidelines-sidan.
6. Finns loggans originalfil (från v2)?

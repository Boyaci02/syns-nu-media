# SYNS NU MEDIA — Komplett Sidstruktur & Layout

> **Syfte:** Detta dokument beskriver den fullständiga layouten, innehållet och strukturen för varje sida på Syns Nu Medias nya hemsida. Dokumentet är skrivet för att kunna ges direkt till en AI eller utvecklare som bygger den färdiga sajten.

> **Företag:** Syns Nu Media (Syns Nu AB)
> **Bransch:** Marknadsföringsbyrå specialiserad på restauranger
> **Tagline:** "Sveriges Största Marknadsföringsbyrå för Restauranger"
> **Kontakt:** 070-888 01 98 | info@synsnumedia.se
> **Plats:** Stockholm, Sverige
> **Logotyp-URL:** https://storage.googleapis.com/msgsndr/1FYpgqYgXr6SzFnCzKew/media/68ebad7a0d699e0abc5558c1.png

---

## GLOBAL ELEMENT: NAVIGATION (alla sidor)

### Desktop Navigation
- **Vänster:** Logotyp (länk till startsidan)
- **Mitten/Höger — Länkar:**
  - Hem → /
  - Tjänster (dropdown):
    - Sociala Medier → /sociala-medier
    - Webbdesign → /hemsida
  - Om oss → /om-oss
  - Kundcase → /kundcase
  - Blogg → /blogg
  - Jobb → /jobb
- **Höger — CTA-knapp:** "Kontakta oss" → /kontakt
- **Beteende:** Sticky/fixed vid scroll, bakgrund blur-effekt, subtil skugga vid scroll

### Mobil Navigation
- **Vänster:** Logotyp
- **Höger:** Hamburger-meny (☰)
- **Öppnad meny:** Fullskärm overlay med alla länkar + kontaktknapp + telefonnummer

---

## GLOBAL ELEMENT: FOOTER (alla sidor)

### Kolumn 1 — Varumärke
- Logotyp
- Text: "Sveriges största marknadsföringsbyrå för restauranger. Vi hjälper dig synas, växa och öka omsättningen."
- Sociala medie-ikoner: Instagram, TikTok, Facebook, LinkedIn

### Kolumn 2 — Tjänster
- Sociala Medier → /sociala-medier
- Webbdesign → /hemsida
- Kundcase → /kundcase

### Kolumn 3 — Företaget
- Om oss → /om-oss
- Blogg → /blogg
- Jobb → /jobb
- Qopla-erbjudande → /qopla-erbjudande

### Kolumn 4 — Kontakt
- 070-888 01 98 (klickbar tel:-länk)
- info@synsnumedia.se (klickbar mailto:-länk)
- Stockholm, Sverige

### Botten-rad
- "© Syns Nu AB 2025. Alla rättigheter förbehållna."
- Länk: Integritetspolicy → /integritetspolicy

---
---

# SIDA 1: STARTSIDA (/)

## Sektion 1.1 — Hero

**Layout:** Tvåkolumn (text vänster, visuellt element höger). Fullbredd med subtil bakgrundsgradient.

**Vänster kolumn:**
- **Liten etikett ovanför rubrik:** "MARKNADSFÖRING FÖR RESTAURANGER"
- **Rubrik (H1):** "Sveriges Största Marknadsföringsbyrå för *Restauranger*"
  - *Restauranger* i accentfärg eller kursiv/serif-typsnitt för att sticka ut
- **Underrubrik:** "Vi hjälper restauranger att synas, växa och öka omsättningen — genom strategi, innehåll och marknadsföring som faktiskt ger resultat i kassan."
- **CTA-knappar:**
  - Primär: "Boka gratis rådgivning →" → /kontakt
  - Sekundär: "Se kundresultat" → /kundcase
- **Trust-element under knappar:** "✓ Ingen bindningstid · ✓ Resultat inom 30–90 dagar · ✓ 90+ restaurangpartners"

**Höger kolumn:**
- Bild/video-element: Antingen en hero-bild på restaurangmiljö ELLER en kort autoplay-video (muted) som visar klipp från inspelningar hos kunder
- Alternativ: Fyra statistik-kort i ett grid:
  - "50%" — "Ökad dagskassa hos partners"
  - "90+" — "Restauranger i Sverige"
  - "4.9★" — "Genomsnittligt betyg"
  - "0" — "Bindningstid"

---

## Sektion 1.2 — Logo-marquee (kundlogotyper)

**Layout:** Horisontell auto-scrollande rad med kundlogotyper. Endlös loop.

- **Liten rubrik ovanför:** "VÅRA PARTNERS LITAR PÅ OSS"
- **Logotyper att visa (redan befintliga bilder):**
  - https://storage.googleapis.com/msgsndr/1FYpgqYgXr6SzFnCzKew/media/68d6a28276155438232a2ca5.png
  - https://storage.googleapis.com/msgsndr/1FYpgqYgXr6SzFnCzKew/media/68d6a91a6bb7f5ccbfd63c58.png
  - https://storage.googleapis.com/msgsndr/1FYpgqYgXr6SzFnCzKew/media/68d6a282f838e27fec568431.png
  - https://storage.googleapis.com/msgsndr/1FYpgqYgXr6SzFnCzKew/media/68d6a4866fe1a509db69554d.png
  - https://storage.googleapis.com/msgsndr/1FYpgqYgXr6SzFnCzKew/media/68d6a578f838e2d33456e3dc.png
  - https://storage.googleapis.com/msgsndr/1FYpgqYgXr6SzFnCzKew/media/68d6a6eee8b9a99c92a23b5a.png
  - https://storage.googleapis.com/msgsndr/1FYpgqYgXr6SzFnCzKew/media/67ae40df58fa5ce01ad67920.png
  - https://storage.googleapis.com/msgsndr/1FYpgqYgXr6SzFnCzKew/media/68d6a282f50f8aa98f165d1a.png
- **Stil:** Gråskala som standard, färg vid hover. Duplicerade för sömlös loop.

---

## Sektion 1.3 — Tjänster-översikt

**Layout:** Rubrik + fyra kort i grid (4 kolumner desktop, 2 tablet, 1 mobil)

- **Etikett:** "VÅRA TJÄNSTER"
- **Rubrik (H2):** "Allt din restaurang behöver för att växa online"
- **Underrubrik:** "Från sociala medier och webbdesign till matfotografering — vi har verktygen som gör skillnad i kassan."

### Kort 1 — Sociala Medier
- **Ikon:** 📱 eller relevant ikon
- **Rubrik (H3):** "Sociala Medier"
- **Text:** "Komplett hantering av Instagram, Facebook och TikTok med strategiskt innehåll som faktiskt driver gäster till din restaurang."
- **Pris:** "Från 7 500 kr/mån"
- **Punktlista:**
  - Inspelning & videoproduktion
  - Sociala medier-strategi
  - Google-optimering
  - Marknadsföringskampanjer
- **Länk:** "Läs mer →" → /sociala-medier

### Kort 2 — Webbdesign
- **Ikon:** 💻 eller relevant ikon
- **Rubrik (H3):** "Webbdesign"
- **Text:** "Hemsidor skräddarsydda för restauranger. SEO-optimerade, mobilanpassade och med obegränsade uppdateringar."
- **Pris:** "500 kr/mån"
- **Punktlista:**
  - SEO-optimerad
  - Mobilanpassad
  - Obegränsade uppdateringar
  - Kostnadsfri support
- **Länk:** "Läs mer →" → /hemsida

### Kort 3 — Menyfotografering
- **Ikon:** 📸 eller relevant ikon
- **Rubrik (H3):** "Menyfotografering"
- **Text:** "Professionella bilder på hela din meny, perfekta för Wolt, Foodora och din hemsida. Gör det aptitretande."
- **Pris:** "Från 3 500 kr"
- **Punktlista:**
  - Hela menyn fotograferas
  - Wolt-godkända bilder
  - Inga dolda avgifter
  - Snabb leverans
- **Länk:** "Kontakta oss →" → /kontakt

### Kort 4 — Blad & Digital
- **Ikon:** 📄 eller relevant ikon
- **Rubrik (H3):** "Blad & Digital"
- **Text:** "Allt från tryckta reklamblad till digitala versioner för sociala medier, nyhetsbrev och kampanjer."
- **Pris:** "Kontakta oss"
- **Punktlista:**
  - Tryckta reklamblad
  - Digitalt kampanjmaterial
  - Nyhetsbrev-design
  - Sociala medier-grafik
- **Länk:** "Kontakta oss →" → /kontakt

---

## Sektion 1.4 — Lär känna Syns Nu (USP:er / Filosofi)

**Layout:** Rubrik + accordion/expanderbara kort

- **Etikett:** "LÄR KÄNNA SYNS NU"
- **Rubrik (H2):** "Syns du inte, finns du inte."
- **Underrubrik:** "På Syns Nu är vi specialiserade på att hjälpa restauranger att inte bara synas mer, utan att aktivt dra in nya gäster."

### Expanderbara punkter (accordion):

**1. Filosofi — "Syns du inte, Finns du inte."**
> Din restaurang kan ha den bästa maten i staden — men om ingen hittar er online spelar det ingen roll. Vi ser till att rätt gäster hittar er vid rätt tidpunkt.

**2. Strategier — "Fler följare, fler gäster."**
> Vi bygger strategier som konverterar följare till betalande gäster. Det handlar inte om likes — det handlar om bordsbokningar och fler beställningar.

**3. Influencers — "Boostar din restaurang."**
> Vi samarbetar med lokala mat-influencers som skapar autentiskt innehåll och driver nyfikna gäster till din restaurang.

**4. Konkurrenter — "Restauranger konkurrerar om samma gäster."**
> Brist på online-närvaro ger dina konkurrenter ett stort övertag. Vi ser till att du alltid ligger steget före.

---

## Sektion 1.5 — Resultat / Siffror

**Layout:** Rubrik + tre resultat-kort i rad

- **Etikett:** "BEVISADE RESULTAT"
- **Rubrik (H2):** "Siffror som talar för sig själva"
- **Underrubrik:** "Våra partners ser verklig skillnad — i gäster, omsättning och online-synlighet."

### Resultat-kort:

| Siffra | Beskrivning |
|--------|-------------|
| +50% | Ökad dagskassa hos Östermalmsgrillen by Garo |
| +41% | Fler gäster på 90 dagar via TikTok Ads & UGC |
| 4.6★ | Google-betyg på 60 dagar med autosvar + SMS |

> **NYTT TILLÄGG / FÖRBÄTTRINGSFÖRSLAG:** Lägg till fler kundcase-siffror om möjligt, t.ex. "+1 200 föranmälningar vid pre-launch" (detta nämns redan på gamla sajten).

---

## Sektion 1.6 — Video-testimonial (featured kundcase)

**Layout:** Tvåkolumn — video till vänster, text till höger. Mörk bakgrund.

- **Video:** Inbäddad video från Östermalmsgrillen by Garo (befintlig video-fil: https://storage.googleapis.com/msgsndr/1FYpgqYgXr6SzFnCzKew/media/66fae28a5cef956031c6d083.mp4)
- **Text bredvid:**
  - Liten etikett: "KUNDCASE"
  - Rubrik: "Östermalmsgrillen by Garo"
  - Citat: "Vi har ökat dagsskassan med närmare 50%"
  - Brödtext: "Vårt arbete med Stuvstagrillen började i januari 2024. Vi lyckades hjälpa dem att överkomma sina utmaningar och generera synligheten som de behövde. Idag siktar vi på nya mål och höjder tillsammans."
  - CTA: "Läs kundcase →" → /kundcase
- **Anteckning:** "Aktivera ljud"-knapp synlig på videon

---

## Sektion 1.7 — Kort omdömes-rad

**Layout:** Tre omdömes-kort i horisontell rad

### Omdöme 1:
- **Stjärnor:** ★★★★★
- **Citat:** "Otroligt bra videos och bilder som de fixar. Kan rekommendera starkt för dig som behöver hemsida eller någon som kan ta hand om dina sociala medier."
- **Namn:** George
- **Företag:** Dripp'n Burgers, Södertälje

### Omdöme 2:
- **Stjärnor:** ★★★★★
- **Citat:** "Fantastiskt team! Från starten har det känts genomgående bra ända till slutresultatet. Kreativa idéer, hög kvalitet och toppen kundbemötande. Skulle gett 6 stjärnor om det var möjligt!"
- **Namn:** Garo
- **Företag:** Stuvsta Grillen, Stuvsta

### Omdöme 3:
- **Stjärnor:** ★★★★★
- **Citat:** "Högst professionella och engagerade. De presenterar sina idéer tydligt och tar aktivt del av våra åsikter. Slutresultatet, både i form av videor och bilder, är helt enkelt enastående."
- **Namn:** Mansour
- **Företag:** Berra Burras Kebab, Örebro

---

## Sektion 1.8 — Qopla-partnerskap (banner)

**Layout:** Highlight-banner/kort med accentfärg

- **Rubrik:** "Är du kund hos Qopla?"
- **Text:** "Få specialpriser på utvalda tjänster"
- **CTA:** "Läs mer →" → /qopla-erbjudande

---

## Sektion 1.9 — Blogg-förhandsvisning (NYA TILLÄGG)

**Layout:** Rubrik + tre blogg-kort i rad

- **Etikett:** "BLOGG & INSIKTER"
- **Rubrik (H2):** "Tips som hjälper din restaurang växa"
- **Underrubrik:** "Praktiska guider och branschinsikter för restaurangägare."

### Blogg-kort 1:
- **Tagg:** "SOCIALA MEDIER"
- **Rubrik:** "5 misstag restauranger gör på Instagram — och hur du undviker dem"
- **Ingress:** "De flesta restauranger postar mat-bilder utan strategi. Här är vad som faktiskt driver gäster till ditt bord."
- **Länk:** "Läs mer →" → /blogg/instagram-misstag

### Blogg-kort 2:
- **Tagg:** "GOOGLE"
- **Rubrik:** "Så rankar du #1 på Google Maps — guide för restauranger 2025"
- **Ingress:** "90% av gästerna söker online innan de väljer restaurang. Så tar du den där topplatsen."
- **Länk:** "Läs mer →" → /blogg/google-maps-guide

### Blogg-kort 3:
- **Tagg:** "STRATEGI"
- **Rubrik:** "Så ökar du snittnotan med 30% utan att höja priserna"
- **Ingress:** "Menypsykologi, upselling och smarta kampanjer som gör att dina gäster spenderar mer."
- **Länk:** "Läs mer →" → /blogg/oka-snittnotan

- **Under korten:** Knapp "Se alla artiklar →" → /blogg

---

## Sektion 1.10 — CTA-banner

**Layout:** Fullbredd banner med accentfärg-bakgrund. Centrerad text.

- **Rubrik (H2):** "Redo att ta plats i rampljuset?"
- **Text:** "Boka en gratis rådgivning idag och se hur vi kan hjälpa din restaurang växa."
- **CTA-knapp:** "Kontakta oss nu →" → /kontakt

---
---

# SIDA 2: SOCIALA MEDIER (/sociala-medier)

## Sektion 2.1 — Hero

**Layout:** Centrerad text med bakgrundsbild/gradient

- **Liten etikett:** "SOCIALA MEDIER"
- **Rubrik (H1):** "Öka din restaurangs omsättning med sociala medier"
- **Underrubrik:** "Vi fokuserar på siffrorna i kassan — inte bara visningar på sociala medier."
- **CTA-knappar:**
  - Primär: "Kontakta oss" → /kontakt
  - Sekundär: "Se kundcase" → /kundcase

---

## Sektion 2.2 — Vad vi hjälper med (USP:er)

**Layout:** Fyra ikoner/kort i rad

| Ikon/Etikett | Rubrik | Text |
|---|---|---|
| 📈 Öka | Öka antalet lojala kunder | Bygg en lojal kundbas som kommer tillbaka gång på gång |
| 🚀 Boosta | Boosta försäljning och omsättning | Strategier som driver fler beställningar och högre snittnotor |
| ⚔️ Konkurrens | Starkare konkurrenskraft | Sticka ut från mängden och ta marknadsandelar |
| 👁️ Förstärk | Förstärk din närvaro och synlighet | Syns överallt där dina potentiella gäster befinner sig |

---

## Sektion 2.3 — Hur vi är annorlunda

**Layout:** Tvåkolumn — text vänster, jämförelselista höger

**Vänster:**
- **Rubrik (H2):** "Hur är vi annorlunda?"
- **Text:** "På Syns Nu Media har vi en djup förståelse för restaurangbranschen och dess utmaningar. Därför ligger vårt fokus på att öka din omsättning genom strategier som gör skillnad i kassan — inte bara visningar på sociala medier. Vi erbjuder tydliga priser och paket utan bindningstid, anpassade för alla typer av restauranger."
- **Poäng:** "Alla kan klippa ihop en fin video. Alla kan inte generera riktiga resultat."

**Höger — Jämförelse (visuellt):**

✅ **Syns Nu Media:**
- En djup förståelse av restaurangbranschen
- Strategi som gör skillnad i kassan
- Tydliga prissättningar
- Ingen bindningstid

❌ **Andra byråer:**
- Svag förståelse för restaurangbranschen
- Fina reklamvideos — inga resultat
- Otydliga & dyra priser
- Långa bindningstider

---

## Sektion 2.4 — Prisplaner

**Layout:** Tre priskort i rad (markera Pro som "Mest Populär")

### Basic Plan — 7 500 kr/mån
- **Beskrivning:** "För dig som vill synas lite mer"
- **Inkluderar:**
  - En inspelning/månad
  - 2 videos/månad
  - 6 bilder/månad
  - Sociala medier-hantering
  - Google-optimering
  - Hantering av Google-profil
- **CTA:** "Börja idag" → /kontakt

### Pro Plan — 12 500 kr/mån ⭐ MEST POPULÄR
- **Beskrivning:** "För dig som vill öka omsättning och se resultat i kassan med fler lojala kunder"
- **Inkluderar:**
  - En inspelning/månad
  - 4 videos/månad
  - 4 bilder/månad
  - Sociala medier-strategi
  - Sociala medier-hantering
  - Marknadsföring
- **CTA:** "Börja idag" → /kontakt

### Turbo Plan — 25 000 kr/mån
- **Beskrivning:** "För dig som vill öka omsättning och se resultat i kassan snabbt med nya kunder"
- **Inkluderar:**
  - En inspelning/månad
  - 12 videos/månad
  - 8 bilder/månad
  - Sociala medier-strategi
  - Sociala medier-hantering
  - Marknadsföring
- **CTA:** "Börja idag" → /kontakt

---

## Sektion 2.5 — Sociala kanaler vi jobbar med

**Layout:** Tre kort i rad

### Instagram
- **Text:** "Instagram har flera hundra miljoner användare världen över och har blivit en attraktiv plats att synas och verka på för såväl användare som företag."

### Facebook
- **Text:** "Med Facebook kan ni marknadsföra er genom en mängd olika varianter av annonsformat. Facebook är en unik plats att marknadsföra sig på."

### TikTok
- **Text:** "TikTok har flera hundra miljoner användare världen över och har blivit en av de mest kraftfulla plattformarna för att nå nya gäster viralt."

---

## Sektion 2.6 — Video-testimonial

*Samma som Sektion 1.6 på startsidan (Östermalmsgrillen by Garo)*

---

## Sektion 2.7 — Omdömen

*Samma tre omdömen som Sektion 1.7 på startsidan*

---

## Sektion 2.8 — Kontaktformulär

**Layout:** Rubrik + formulär

- **Rubrik (H2):** "Syns Mer Nu"
- **Underrubrik:** "Fyll i formuläret för att ta kontakt med oss"
- **Formulärfält:**
  - Namn *
  - Restaurangens namn *
  - E-post *
  - Telefonnummer *
  - Dropdown: "Vad är du intresserad av?" — Hemsida / Marknadsföring / Matfotografering (för meny) / Digitala menyskärmar
  - Textarea: "Lämna ett meddelande (valfritt)"
  - Skicka-knapp: "Lämna in"

---

## Sektion 2.9 — CTA-banner

*Samma som Sektion 1.10: "Redo att ta plats i rampljuset?"*

---
---

# SIDA 3: WEBBDESIGN (/hemsida)

## Sektion 3.1 — Hero

**Layout:** Tvåkolumn — text vänster, bild/mockup höger

- **Liten etikett:** "HEMSIDA FÖR 500 KR/MÅNADEN"
- **Rubrik (H1):** "Hemsidor till Restauranger"
- **Underrubrik:** "Din restaurangs hemsida är det första gästerna ser när de söker upp er online. Se till att ge ett bra första intryck."
- **Trust-badges i rad:**
  - ✓ SEO-optimerad
  - ✓ Kostnadsfri service
  - ✓ Kostnadsfria uppdateringar
  - ✓ Oändliga uppdateringar
- **CTA:** "Få din hemsida →" → /kontakt
- **Höger:** Mockup-bild på en restauranghemsida (t.ex. screenshot från en av portföljsidorna)

---

## Sektion 3.2 — Portfolio Grid

**Layout:** Rubrik + sex kort/bilder i grid (3x2)

- **Rubrik (H2):** "Några hemsidor vi har byggt"

| Restaurang | Länk |
|---|---|
| Flipp Burgers | https://flippburgers.se/ |
| Caliente | https://caliente.se/ |
| Saya Sushi | https://sayasushi.se/ |
| Kebab Dudes | https://kebabdudes.com/ |
| ALOY | https://aloy.se/ |
| Dripp'n Burgers | https://drippnburgers.nu/ |

- **Varje kort:** Visar en screenshot/preview av hemsidan, restaurangnamn, och klickbar länk som öppnas i ny flik
- **CTA under grid:** "Se fler →" → /kundcase

---

## Sektion 3.3 — Omdömen (webbdesign-specifika)

**Layout:** Tre horisontella omdömes-kort

### Omdöme 1:
- **Namn:** George, Dripp'n Burgers
- **Citat:** "Otroligt bra hemsida och snabb service."

### Omdöme 2:
- **Namn:** Simon, Caliente Tapas
- **Citat:** "Mycket nöjd med hemsidan, speciellt för det billiga priset!"

### Omdöme 3:
- **Namn:** Mansour, BBK
- **Citat:** "Mycket bra bemötande från teamet. Går snabbt och enkelt när man vill göra en uppdatering på hemsidan."

---

## Sektion 3.4 — Funktioner/Fördelar

**Layout:** Rubrik + sex feature-kort (3x2 grid)

- **Rubrik (H2):** "Gör det lättare för dig själv!"
- **Underrubrik:** "Ha en snygg hemsida utan all huvudvärk."

### Kort 1: Användarvänlig Design
- **Text:** "En enkel design som gör det lätt för dina gäster att navigera och hitta allting på din sida."

### Kort 2: Mobilanpassat
- **Text:** "Fungerar perfekt på alla enheter — datorer, surfplattor och mobiler."

### Kort 3: Enkel Uppdatering
- **Text:** "Lägg till eller uppdatera saker på din hemsida helt kostnadsfritt med hjälp av proffs. Snabbt och enkelt!"

### Kort 4: SEO-Optimerad
- **Text:** "Vi ser till att din hemsida rankar högt på Google så att nya gäster kan hitta dig lättare."

### Kort 5: Kundsupport
- **Text:** "Snabb och effektiv support för att hjälpa dig med frågor eller uppdateringar på hemsidan."

### Kort 6: Oändliga Uppdateringar
- **Text:** "Istället för att du själv ska behöva krångla på hemsidan, kan du bara ringa in så uppdaterar vi sidan åt dig!"

---

## Sektion 3.5 — Pris

**Layout:** Centrerat pris-kort

- **Rubrik (H2):** "Priser"
- **Underrubrik:** "För endast 500 kr/mån får du:"

### Hemsida — 500 kr/mån
- En professionell, mobilanpassad hemsida
- Obegränsade uppdateringar och ändringar
- SEO-optimering för bättre synlighet på Google
- Snabb och effektiv kundsupport
- **CTA:** "Få din hemsida" → /kontakt

---

## Sektion 3.6 — Så här fungerar det (process)

**Layout:** Tre steg horisontellt med ikoner/nummer

### Steg 1: Beställning
"Klicka på 'Få din hemsida'-knappen och fyll i formuläret."

### Steg 2: Design & Utveckling
"Vi skapar en skräddarsydd hemsida baserat på dina behov och önskemål."

### Steg 3: Lansering
"När du är nöjd med designen lanserar vi din nya hemsida."

---

## Sektion 3.7 — Kontaktformulär

- **Rubrik (H2):** "Få din hemsida"
- **Underrubrik:** "Fyll i formuläret så kontaktar vi dig för att diskutera hur du vill ha din hemsida."
- **Formulärfält:**
  - Namn *
  - Restaurangens namn *
  - E-post *
  - Telefonnummer *
  - Skicka-knapp: "Skicka in"

---

## Sektion 3.8 — CTA-banner

*Samma som Sektion 1.10: "Redo att ta plats i rampljuset?"*

---
---

# SIDA 4: OM OSS (/om-oss)

> **OBS:** Den gamla om-oss-sidan ger 404. Denna sida är helt nyskriven som förbättringsförslag.

## Sektion 4.1 — Hero

**Layout:** Centrerad text, eventuellt med teambild i bakgrunden

- **Liten etikett:** "OM SYNS NU MEDIA"
- **Rubrik (H1):** "Vi lever och andas restaurangmarknadsföring"
- **Underrubrik:** "Syns Nu Media grundades med en enkel idé: restauranger förtjänar en marknadsföringsbyrå som verkligen förstår deras verklighet. Idag är vi Sveriges största byrå specialiserade på just restauranger."

---

## Sektion 4.2 — Vår historia

**Layout:** Tvåkolumn — text vänster, bild höger (t.ex. teamfoto eller bild från inspelning)

- **Rubrik (H2):** "Vår historia"
- **Text:**
  "Allt började med en insikt: de flesta marknadsföringsbyråer förstår inte restaurangbranschen. De levererar fina videos och snygga bilder — men resultaten uteblir.

  Vi bestämde oss för att göra det annorlunda. Genom att enbart fokusera på restauranger har vi byggt upp en djup expertis som gör att vi kan leverera strategier som faktiskt syns i kassan. Idag jobbar vi med 90+ restauranger runt om i Sverige och vi växer snabbt."

- **Eventuella nyckeltal i sidokolumn:**
  - Grundat: 2023
  - 90+ restaurangpartners
  - Team: Stockholm-baserat
  - Specialisering: Enbart restauranger

---

## Sektion 4.3 — Våra värderingar

**Layout:** Tre eller fyra kort i rad

### Resultat först
"Vi mäter framgång i ökad omsättning — inte likes och visningar. Varje strategi vi skapar har ett mål: mer pengar i kassan."

### Ärlighet & transparens
"Tydliga priser, inga dolda avgifter, ingen bindningstid. Du stannar för att du vill, inte för att du måste."

### Restaurangexpertis
"Vi jobbar enbart med restauranger. Det gör att vi förstår era utmaningar — från lunchrusher till säsongsvariation — på en nivå som generella byråer aldrig kan."

### Partnerskap, inte leverantör
"Vi ser oss som en del av ditt team. Dina mål är våra mål, och vi firar varje framgång tillsammans."

---

## Sektion 4.4 — Teamet (NYTT TILLÄGG)

**Layout:** Grid med teammedlemmar (bilder + namn + roll)

> **Anteckning till Syns Nu:** Fyll i med riktiga teamfoton och namn. Att visa ansiktena bakom byrån bygger enormt förtroende.

- **Rubrik (H2):** "Möt teamet bakom Syns Nu"
- **Platshållare:** 3–6 teamkort med foto, namn, roll, och eventuellt ett kort citat eller fun fact

---

## Sektion 4.5 — Siffror

**Layout:** Horisontell rad med nyckeltal

| Siffra | Beskrivning |
|---|---|
| 90+ | Restaurangpartners |
| 50% | Genomsnittlig ökning av dagskassa |
| 0 | Bindningstid |
| 4.9★ | Genomsnittligt kundbetyg |

---

## Sektion 4.6 — CTA-banner

*"Vill du bli nästa framgångshistoria?"*
- CTA: "Kontakta oss →" → /kontakt

---
---

# SIDA 5: KONTAKT (/kontakt)

## Sektion 5.1 — Hero med formulär

**Layout:** Tvåkolumn — kontaktinfo vänster, formulär höger

**Vänster:**
- **Rubrik (H1):** "Vi är alltid hungriga att höra ifrån dig!"
- **Underrubrik:** "Fyll i formuläret så kontaktar vi dig inom 24 timmar."
- **Kontaktuppgifter:**
  - 📞 Telefon: +46 70 888 01 98 (klickbar)
  - ✉️ E-post: info@synsnumedia.se (klickbar)
  - 📍 Plats: Stockholm, Sverige
- **Sociala medier-länkar:** Instagram, TikTok, Facebook

**Höger — Formulär:**
- Namn *
- Restaurangens namn *
- E-post *
- Telefonnummer *
- Dropdown: "Vad är du intresserad av?" — Hemsida / Sociala Medier / Marknadsföring / Matfotografering / Digitala menyskärmar / Allt ovan
- Textarea: "Berätta lite om din restaurang och dina mål (valfritt)"
- Skicka-knapp: "Skicka förfrågan →"

---

## Sektion 5.2 — Qopla-notis

**Layout:** Liten highlight-ruta under formuläret

- **Rubrik:** "Qopla-kund?"
- **Text:** "Nämn att du är Qopla-kund i meddelandet så berättar vi om dina specialpriser."

---

## Sektion 5.3 — Karta (NYTT TILLÄGG)

**Layout:** Inbäddad Google Maps-karta som visar Stockholmsområdet

> **Förbättringsförslag:** En karta ger trovärdighet och gör det tydligt att företaget finns på riktigt.

---

## Sektion 5.4 — FAQ (kort version)

**Layout:** 3–4 vanliga frågor i accordion

1. **"Hur snabbt hör ni av er?"** — Vi kontaktar dig inom 24 timmar på vardagar.
2. **"Kostar rådgivningen något?"** — Nej, första rådgivningen är helt gratis och utan förpliktelser.
3. **"Jobbar ni med restauranger utanför Stockholm?"** — Absolut! Vi jobbar med restauranger i hela Sverige.

---
---

# SIDA 6: BLOGG (/blogg) — HELT NY SIDA

> **Förbättringsförslag:** En blogg med branschrelevanta artiklar positionerar Syns Nu som branschexperter, förbättrar SEO drastiskt, och ger restaurangägare värde redan innan de blir kunder. Detta är ett av de mest effektiva sätten att bygga trovärdighet.

## Sektion 6.1 — Hero

**Layout:** Centrerad text

- **Liten etikett:** "BLOGG & INSIKTER"
- **Rubrik (H1):** "Tips, guider och branschinsikter för restaurangägare"
- **Underrubrik:** "Allt du behöver veta för att växa din restaurang online — direkt från experterna."

---

## Sektion 6.2 — Utvalda artiklar (featured)

**Layout:** Stort featured-kort för senaste/bästa artikeln + mindre kort för resten

### Föreslagna blogg-artiklar (10 stycken):

**Kategori: Sociala Medier**

1. **"5 misstag restauranger gör på Instagram — och hur du undviker dem"**
   - Ingress: "De flesta restauranger postar mat-bilder utan strategi. Här är vad som faktiskt driver gäster till ditt bord."
   - Ämnen: Brist på strategi, inkonsekvent publicering, dåliga bilder, inget engagemang, ingen call-to-action

2. **"TikTok för restauranger: Komplett guide 2025"**
   - Ingress: "TikTok är den snabbast växande plattformen för restaurangmarknadsföring. Så här använder du den."
   - Ämnen: Virala trender, UGC-innehåll, storytelling, bakom kulisserna

3. **"Så skapar du Instagram Reels som faktiskt ger bordsbokningar"**
   - Ingress: "Reels är Instagrams mest pushade format. Så här gör du dem till din bästa marknadsföringskanal."

**Kategori: Google & SEO**

4. **"Så rankar du #1 på Google Maps — guide för restauranger 2025"**
   - Ingress: "90% av gästerna söker online innan de väljer restaurang. Så tar du den där topplatsen."
   - Ämnen: Google Business Profile-optimering, recensioner, foton, kategorier, inlägg

5. **"Varför din restaurangs Google-recensioner avgör om gäster kommer"**
   - Ingress: "En studie visar att 94% av gästerna läser recensioner innan de väljer restaurang."

**Kategori: Strategi & Omsättning**

6. **"Så ökar du snittnotan med 30% utan att höja priserna"**
   - Ingress: "Menypsykologi, upselling och smarta kampanjer som gör att dina gäster spenderar mer."

7. **"7 marknadsföringsstrategier som ökar din restaurangs omsättning"**
   - Ingress: "Beprövade metoder som våra partners använder för att öka intäkterna varje månad."

8. **"Så bygger du en lojal kundbas med e-post och SMS-marknadsföring"**
   - Ingress: "Dina befintliga gäster är din mest värdefulla tillgång. Så här får du dem att komma tillbaka."

**Kategori: Inspiration & Trender**

9. **"Restaurangtrender 2025: Vad gästerna förväntar sig"**
   - Ingress: "Från digital beställning till hållbarhet — de trender som formar branschen just nu."

10. **"Från 0 till fullbokat: Hur vi hjälpte en restaurang öka omsättningen 50%"**
    - Ingress: "En djupdykning i strategin bakom en av våra mest framgångsrika kundcase."

---

## Sektion 6.3 — Artikellista

**Layout:** Grid med blogg-kort (3 per rad desktop, 1 mobil)

**Varje blogg-kort innehåller:**
- Bild/grafik (kan vara en färgad gradient-bakgrund med en ikon som platshållare)
- Kategori-tagg (Sociala Medier / Google / Strategi / Inspiration)
- Rubrik
- Ingress (2 rader)
- "Läs mer →" länk
- Datum

---

## Sektion 6.4 — Nyhetsbrev CTA (NYTT TILLÄGG)

**Layout:** Centrerad banner med formulär

- **Rubrik:** "Få restaurangtips direkt i din inbox"
- **Text:** "Prenumerera på vårt nyhetsbrev och få de senaste tipsen, guiderna och strategierna — skräddarsydda för restaurangägare."
- **Formulärfält:** E-post + knapp "Prenumerera"

---

## Sektion 6.5 — CTA-banner

*"Vill du ha hjälp med din restaurangs marknadsföring?"*
- CTA: "Kontakta oss →" → /kontakt

---
---

# SIDA 7: JOBB (/jobb)

## Sektion 7.1 — Hero

**Layout:** Centrerad text, eventuellt med teambild i bakgrunden

- **Liten etikett:** "VI VÄXER • BLI EN DEL AV TEAMET"
- **Rubrik (H1):** "Jobb på Syns Nu Media"
- **Underrubrik:** "Vi hjälper restauranger att växa med smart innehåll, stark design och effektiv annonsering. Nu söker vi kreativa människor som vill bygga Sveriges mest uppskattade restaurangbyrå tillsammans med oss."

---

## Sektion 7.2 — Varför jobba hos oss? (NYTT TILLÄGG)

**Layout:** Tre till fyra kort i rad

> **Anteckning:** Gamla sidan hade placeholder-text (Lorem ipsum). Här är nyskrivet innehåll.

### Kreativ frihet
"Hos oss får du utrymme att tänka utanför boxen och skapa innehåll som sticker ut. Varje restaurang är unik — och det är dina idéer också."

### Snabbväxande team
"Vi är ett litet, tight team som växer snabbt. Det betyder att du får stor påverkan från dag ett och möjlighet att växa med bolaget."

### Restaurangbranschen
"Älskar du mat? Perfekt. Vi jobbar med spännande restauranger varje dag och du får vara med bakom kulisserna hos några av Sveriges bästa ställen."

### Flexibilitet
"Vi tror på frihet under ansvar. Jobba där du jobbar bäst — kontoret, hemma eller ute på plats hos en kund."

---

## Sektion 7.3 — Öppna tjänster (NYTT TILLÄGG)

**Layout:** Lista med expanderbara jobb-kort

> **Anteckning till Syns Nu:** Fyll i med faktiska öppna tjänster. Nedan är förslag/platshållare.

### Content Creator / Videograf
- **Typ:** Heltid / Deltid
- **Plats:** Stockholm + resor till kunder
- **Beskrivning:** "Du kommer filma och producera innehåll för våra restaurangpartners. Du trivs framför och bakom kameran och har ett öga för mat som ser oemotståndlig ut."
- **CTA:** "Ansök här →" → mailto:jobb@synsnumedia.se

### Social Media Manager
- **Typ:** Heltid
- **Plats:** Stockholm / Remote
- **Beskrivning:** "Du tar ansvar för våra kunders sociala medier-kanaler. Publicering, community management, och strategisk planering."
- **CTA:** "Ansök här →" → mailto:jobb@synsnumedia.se

### Spontanansökan
- **Text:** "Hittar du inte din drömroll? Skicka en spontanansökan till oss — vi letar alltid efter talanger."
- **CTA:** "Skicka ansökan →" → mailto:jobb@synsnumedia.se

---

## Sektion 7.4 — Teambild/kultur

**Layout:** Bred bild (befintlig bild kan användas: https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/68eada928d8d1414d0f4620e.png)

---

## Sektion 7.5 — CTA-banner

*"Redo att ta plats i rampljuset?"*
- CTA: "Kontakta oss →" → /kontakt

---
---

# SIDA 8: KUNDCASE / PORTFOLIO (/kundcase) — FÖRBÄTTRAD NY SIDA

> **Förbättringsförslag:** Denna sida samlades inte bra på gamla sajten. En dedikerad kundcase-sida med detaljerade case studies bygger enormt förtroende och hjälper potentiella kunder förstå vad de kan förvänta sig.

## Sektion 8.1 — Hero

**Layout:** Centrerad text

- **Liten etikett:** "KUNDCASE & RESULTAT"
- **Rubrik (H1):** "Se hur vi hjälper restauranger växa"
- **Underrubrik:** "Riktiga resultat från riktiga restauranger. Ingen fluff — bara siffror som talar för sig själva."

---

## Sektion 8.2 — Featured Kundcase

**Layout:** Stort featured-kort med video

### Östermalmsgrillen by Garo
- **Video:** Inbäddad (befintlig video-URL)
- **Citat:** "Vi har ökat dagsskassan med närmare 50%"
- **Resultat:**
  - +50% ökad dagskassa
  - Startade januari 2024
  - Pågående samarbete
- **Beskrivning:** "Vårt arbete med Stuvstagrillen började i januari 2024. Vi lyckades hjälpa dem att överkomma sina utmaningar och generera synligheten som de behövde. Idag siktar vi på nya mål och höjder tillsammans."

---

## Sektion 8.3 — Resultat-siffror

**Layout:** Tre siffror-kort i rad (samma som startsidan Sektion 1.5)

| +50% ökad dagskassa | +41% fler gäster på 90 dagar | 4.6★ Google-betyg på 60 dagar |

---

## Sektion 8.4 — Fler kundcase-kort

**Layout:** Grid med kort (2 per rad)

> **Anteckning:** Nedan finns befintliga kundcase + förslag på nya case-kort baserat på data från gamla sajten.

### Kundcase 1: TikTok Ads & UGC
- **Tagg:** Restaurang
- **Rubrik:** "+41% gäster på 90 dagar via TikTok Ads & UGC"
- **Beskrivning:** Kort sammanfattning av strategin och resultaten.

### Kundcase 2: Pre-launch
- **Tagg:** Pre-launch
- **Rubrik:** "1 200 föranmälningar & kö vid öppning"
- **Beskrivning:** Kort sammanfattning av pre-launch-strategin.

### Kundcase 3: Omdömen & CRM
- **Tagg:** CRM
- **Rubrik:** "4.6★ på 60 dagar med autosvar + SMS"
- **Beskrivning:** Kort sammanfattning av omdömes-strategin.

---

## Sektion 8.5 — Portfolio (hemsidor)

**Layout:** Rubrik + grid med hemsides-screenshots (samma som Sektion 3.2)

- **Rubrik (H2):** "Hemsidor vi har byggt"
- Flipp Burgers, Caliente, Saya Sushi, Kebab Dudes, ALOY, Dripp'n Burgers

---

## Sektion 8.6 — Alla omdömen

**Layout:** Grid med alla omdömes-kort

*Alla tre befintliga omdömen (George, Garo, Mansour) + eventuella nya*

---

## Sektion 8.7 — Partners / kunder vi jobbar med

**Layout:** Logo-grid (ej marquee — statisk visning)

Befintliga kunder som nämns på gamla sajten:
- KEB (Globen Shopping)
- Berlin Döner (Linköping)
- Tosa Sushi (Nacka)
- Stuvsta Grillen (Stuvsta)
- Berra & Burras Kebab (Örebro)
- Dripp'n Burgers (Södertälje)
- Caliente
- Flipp Burgers
- Saya Sushi
- Kebab Dudes
- ALOY

---

## Sektion 8.8 — CTA-banner

*"Vill du bli nästa framgångshistoria?"*
- CTA: "Kontakta oss →" → /kontakt

---
---

# SIDA 9: QOPLA-ERBJUDANDE (/qopla-erbjudande)

## Sektion 9.1 — Hero

**Layout:** Centrerad text med Qopla-logotyp + Syns Nu-logotyp

- **Liten etikett:** "EXKLUSIVT FÖR QOPLA-KUNDER"
- **Rubrik (H1):** "Marknadsföring för Restauranger — 20% rabatt"
- **Underrubrik:** "Hitta alla våra rabatterade priser till alla Qopla-kunder här."
- **CTA-knappar:**
  - Primär: "Kontakta oss" → /kontakt
  - Sekundär: "Våra tjänster" → #tjanster

---

## Sektion 9.2 — Tjänste-översikt

**Layout:** Tre klickbara kort i rad

### 01 — Webbdesign
- **Text:** "Vår webbdesign-service erbjuder lösningar för en stark närvaro online för ditt företag eller varumärke."
- **Tags:** Mobilanpassad · SEO-optimerad
- **Länk:** → /hemsida

### 02 — Sociala Medier
- **Text:** "Öka omsättning och synlighet online med våra sociala medier- och marknadsföringsstrategier."
- **Tags:** Öka omsättning · Syns överallt
- **Länk:** → /sociala-medier

### 03 — Matfotografering
- **Text:** "Behöver du bilder till menyn? Kontakta oss och boka in en fotografering för professionella menybilder."
- **Tags:** Fota hela menyn · Wolt-godkända
- **Länk:** → /kontakt

---

## Sektion 9.3 — Qopla-prisplaner (Sociala Medier)

**Layout:** Tre priskort i rad

- **Etikett ovanför:** "SOCIALA MEDIER & MARKNADSFÖRING — PRISPLANER"
- **Underrubrik:** "För dig som vill öka restaurangens omsättning"

### Basic Plan — 5 500 kr/mån (ordinarie 7 500 kr — Kampanj)
- 6 bilder/månad
- 2 videos/månad
- Sociala medier-hantering
- Google-optimering
- Hantering av Google-profil
- **CTA:** "Börja idag" → /kontakt

### Pro Plan — 10 000 kr/mån
- En inspelning/månad
- 4 videos/månad
- 4 bilder/månad
- Sociala medier-hantering
- Sociala medier-strategi
- Marknadsföring
- **CTA:** "Börja idag" → /kontakt

### Turbo Plan — 25 000 kr/mån
- En inspelning/månad
- 6 videos/månad
- 6 bilder/månad
- Sociala medier-hantering
- Sociala medier-strategi
- Marknadsföring
- **CTA:** "Börja idag" → /kontakt

---

## Sektion 9.4 — Matfotografering

**Layout:** Highlight-sektion med mörk bakgrund

- **Rubrik (H2):** "Behöver du bilder på maten?"
- **Pris:** "Vi tar bild på hela din meny för 3 500 kr!"
- **Notering:** "Inga dolda avgifter eller extra kostnader."
- **CTA:** "Kontakta oss" → /kontakt

---

## Sektion 9.5 — Webbdesign

**Layout:** Priskort (samma som hemsida-sidan)

- **Rubrik:** "Webbplatser perfekta för restauranger"
- **Text:** "Känn hur enkelt det kan vara att ha en hemsida med oss. Slipp ta hand om hemsidan själv — låt oss ta hand om den åt dig."

### Webbdesign — 500 kr/mån
- En professionell, mobilanpassad hemsida
- Obegränsade uppdateringar och ändringar
- SEO-optimering / Google-optimering
- Snabb och effektiv kundsupport
- **CTA:** "Börja idag" → /kontakt

---

## Sektion 9.6 — Omdömen

*Samma tre omdömen som på andra sidor*

---

## Sektion 9.7 — Kontaktformulär

*Samma formulär som på sociala medier-sidan (Sektion 2.8)*

---

## Sektion 9.8 — CTA-banner

*"Redo att ta plats i rampljuset?"*

---
---

# ÖVERGRIPANDE FÖRBÄTTRINGSFÖRSLAG

Dessa förslag är nya tillägg som inte finns på den gamla hemsidan men som starkt rekommenderas för att bygga trovärdighet och konvertera fler besökare till kunder:

## 1. BLOGG (redan inkluderad ovan)
**Varför:** Positionerar Syns Nu som branschexperter, förbättrar SEO enormt (restaurangägare googlar frågor som "hur marknadsför man en restaurang"), och ger värde redan innan de blir kunder.
**Rekommendation:** Publicera 2–4 artiklar per månad.

## 2. KUNDCASE-SIDA (redan inkluderad ovan)
**Varför:** Detaljerade case studies med riktiga siffror och citat är det mest övertygande sättet att sälja tjänster. Restaurangägare vill se bevis.
**Rekommendation:** Minst 3–5 detaljerade case med före/efter-siffror.

## 3. TEAM-SEKTION PÅ OM OSS
**Varför:** Restaurangägare vill veta vem de jobbar med. Ansikten och namn bygger personligt förtroende.
**Rekommendation:** Professionella porträttfoton, namn, roll, och eventuellt LinkedIn-profiler.

## 4. FAQ PÅ RELEVANTA SIDOR
**Varför:** Minskar tveksamhet och besvarar invändningar innan de ens ställs. Hjälper även SEO.
**Rekommendation:** Placera på startsidan, sociala medier-sidan och kontaktsidan.

## 5. PROCESS / "SÅ HÄR FUNGERAR DET"
**Varför:** Visar att det är enkelt och riskfritt att komma igång. Restaurangägare har ofta dålig tid och vill veta att det inte blir krångligt.
**Rekommendation:** 3–4 enkla steg, gärna med ikoner.

## 6. NYHETSBREV / E-POST-SIGNUP
**Varför:** Bygger en e-postlista som kan nurtureas med tips och erbjudanden. Enorm långsiktig tillgång.
**Rekommendation:** Enkel signup i footer + på bloggsidan.

## 7. TRUST BADGES / SOCIALT BEVIS I HERO
**Varför:** "90+ restauranger", "4.9★ betyg", "ingen bindningstid" — dessa siffror i hero-sektionen konverterar tveksamma besökare.

## 8. LIVE CHAT / WHATSAPP-KNAPP (NYTT)
**Varför:** Restaurangägare är upptagna och vill ofta ha snabba svar. En WhatsApp-knapp eller live-chat sänker tröskeln att ta kontakt enormt.
**Rekommendation:** Fast knapp i nedre högra hörnet med WhatsApp eller Messenger-integration.

## 9. VIDEO-TESTIMONIALS PÅ FLERA SIDOR
**Varför:** Video bygger mer förtroende än text. Ni har redan video-testimonial från Garo — använd det på flera sidor och spela in fler.
**Rekommendation:** Minst 3–5 korta video-testimonials (30–60 sek).

## 10. GOOGLE REVIEWS-WIDGET (NYTT)
**Varför:** Visar era Google-recensioner direkt på sajten. Inget är mer övertygande än tredjepartsrecensioner.
**Rekommendation:** Integrera med Google Reviews API eller använd en widget som Elfsight.

## 11. RÄKNARE / ANIMERADE SIFFROR (NYTT)
**Varför:** Animerade siffror som räknar upp (t.ex. "90+ partners" som tickar uppåt) fångar ögat och gör siffrorna mer minnesvärda.
**Rekommendation:** Använd på startsidan, kundcase och om oss.

## 12. "BOKA INSPELNING" SOM EGEN CTA
**Varför:** Ni har redan "Boka inspelning" i navigationen — men det syns knappt. Gör det till en tydlig CTA eller ge det en egen landningssida för restauranger som redan bestämt sig.

---
---

# TEKNISKA ANVISNINGAR FÖR AI/UTVECKLARE

## Design-principer
- **Tonalitet:** Professionell men varm och tillgänglig. Inte corporate-stel utan branschnära och energisk.
- **Färgschema:** Mörkt (svart/charcoal) som primär, vitt/cream som sekundär, orange som accentfärg (befintlig brandpalett).
- **Typsnitt:** Serif för rubriker (klassiskt, trovärdigt), sans-serif för brödtext (modernt, lättläst).
- **Bilder:** Mycket mat- och restaurangbilder. Autentiska, inte stock-foton. Gärna från deras faktiska kunder.
- **Animationer:** Subtila scroll-animationer (fade up), smooth hover-states, parallax-effekter.
- **Mobilanpassning:** Mobile-first. Alla sektioner ska fungera perfekt på mobil.
- **Hastighet:** Optimerade bilder (WebP), lazy loading, minimal JS.

## SEO-anvisningar
- Varje sida ska ha unik H1, meta-title och meta-description
- Alt-text på alla bilder
- Strukturerad data (LocalBusiness, FAQ-schema)
- Intern länkning mellan sidor
- Bloggen ska vara indexerbar och ha sitemap

## Formulärhantering
- Alla formulär skickar till befintligt CRM (GoHighLevel/LeadConnector)
- Bekräftelsemeddelande efter submission
- Required-fält markerade med *

## Tillgänglighet
- WCAG 2.1 AA-standard
- Tillräcklig kontrast
- Keyboard-navigation
- Aria-labels på interaktiva element

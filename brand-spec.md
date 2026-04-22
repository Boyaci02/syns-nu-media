# Syns Nu Media — Brand Specification (REDESIGN v4)

> Skapad: 2026-04-22
> Källa: Redesign av befintlig sajt baserat på Buildium-inspirerad SaaS-layout
> Status: GODKÄND (av användaren — sparsam gradient, analytics-dashboard i hero)

---

## 1. Klientidentitet

| Fält | Värde |
|---|---|
| Varumärke | Syns Nu Media (Syns Nu AB) |
| Tagline | Sveriges Största Marknadsföringsbyrå för Restauranger |
| Bransch | Marknadsföring / Digital byrå (nisch: restauranger) |
| Stad | Stockholm |
| Befintlig webbplats | https://syns-nu-media.vercel.app |
| Instagram | @synsnumedia |
| Kontakt-e-post | info@synsnumedia.se |
| Telefon | 070-888 01 98 |

---

## 2. Varumärkets ton och filosofi

**Kärnvärden:**
- Resultatfokus ("i kassan, inte visningar")
- Restaurangexpertis
- Transparent prissättning, ingen bindningstid
- Lokal närvaro + datadriven

**Tonläge:** Professionell, trygg, premium — men tillgänglig. Inte byråjargon. Pratar om omsättning, gäster och resultat, inte "engagement" eller "reach".

**Vad varumärket INTE är:** Inte generisk byrå. Inte billig. Inte en som lovar "viral video".

---

## 3. USP:er

1. **90+ restauranger** som partners — största nischbyrån i Sverige
2. **Resultat i kassan** — +50% dagskassa dokumenterat hos Östermalmsgrillen by Garo
3. **Ingen bindningstid** — månadsvis uppsägning
4. **Restaurangspecialister** — känner branschens rytm (fredagskvällar, lunch, Wolt/Foodora)
5. **End-to-end** — sociala medier + webbdesign + menyfotografering + Qopla-partnerskap

---

## 4. Färgpalett — Gemini-inspirerad

> Källa: Google Gemini brand palette (blå → lila → rosa signaturgradient)
> Användningsregel: Gradient används SPARSAMT — endast på (a) accent-ord i H1, (b) premium pricing-kort, (c) stor CTA-banner, (d) aktiv tab-indikator.

| Roll | Namn | HEX | Användning |
|---|---|---|---|
| Primär | Gemini-blå | `#1A73E8` | Länkar, primär CTA, ikon-accent |
| Primär mörk | Djupblå | `#1557B0` | Hover-states |
| Secondary | Gemini-lila | `#8B5CF6` | Gradient mittpunkt, secondary accent |
| Tertiary | Gemini-rosa | `#EC4899` | Gradient slut, highlights |
| Gradient | `linear-gradient(135deg, #1A73E8 0%, #8B5CF6 50%, #EC4899 100%)` | Accent-ord, premium-kort, CTA-banner |
| Bakgrund ljus | Off-white | `#FAFAFA` | Standardbakgrund |
| Bakgrund sekundär | Ren vit | `#FFFFFF` | Kort, nav |
| Bakgrund tint | Blå tint | `#F0F4FA` | Alternerande sektioner |
| Bakgrund mörk | Near-black | `#0F0F10` | FAQ, footer |
| Text primär | Nästan svart | `#1A1A1A` | Rubriker, brödtext |
| Text sekundär | Grå | `#6B7280` | Underrubriker |
| Text muted | Ljusgrå | `#9CA3AF` | Metadata, labels |
| Border | Subtil | `#E5E7EB` | Kort, inputs |
| Success | Grön | `#10B981` | Checkmarks |

---

## 5. Typografi

**Font**: Plus Jakarta Sans (Google Fonts) — behålls från v3
Source: https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap

| Element | Storlek (desktop) | Vikt | Letter-spacing |
|---|---|---|---|
| Display (hero H1) | clamp(3rem, 6vw, 5.5rem) | 700 | -0.04em |
| H2 sektionsrubriker | clamp(2rem, 4vw, 3.5rem) | 700 | -0.03em |
| H3 kort-rubriker | 1.5rem | 600 | -0.02em |
| Brödtext | 1rem (16px) | 400 | 0 |
| Labels / eyebrows | 0.75rem (12px) | 600 | 0.12em, UPPERCASE |
| Knappar | 0.95rem | 600 | -0.01em |

**Designregel:** Tight letter-spacing på stora rubriker. Generös line-height (1.65) på brödtext. Accent-ord i rubriker får gradient-text (bakgrund-clip: text).

---

## 6. Logotyp & Tillgångar

| Tillgång | URL | Variant |
|---|---|---|
| Logotyp (primär) | https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/699641283fd420658d5267af.png | Färg |
| Favicon | Samma | — |
| Hero-dashboard-mockup | Byggs som CSS/SVG inline (analytics-grafer) | — |

**Logo i nav**: 100×25px, centrerad vertikalt.

---

## 7. Sidkarta (Sitemap)

1. Hem — `/` (index.html)
2. Tjänster (dropdown):
   - Sociala Medier — `/sociala-medier.html`
   - Webbdesign — `/hemsida.html`
3. Om oss — `/om-oss.html`
4. Kundcase — `/kundcase.html`
5. Blogg — `/blogg.html`
6. Jobb — `/jobb.html`
7. Qopla-erbjudande — `/qopla-erbjudande.html` (i footer)
8. Kontakt — `/kontakt.html` (CTA-knapp)

**CTA i nav:** "Boka gratis möte" — pill-knapp, Gemini-blå bakgrund, vit text.

---

## 8. Startsida — Sektionsöversikt (v4)

| # | Sektionsnamn | Bakgrund | Nyckelinnehåll |
|---|---|---|---|
| 1 | Nav (sticky) | Vit m. subtil blur | Logo + länkar + blå CTA |
| 2 | Hero | #FAFAFA m. grid-pattern | Label → H1 m. gradient-accent på "Restauranger" → subtext → dark CTA → analytics-dashboard mockup i browser-frame |
| 3 | Bento-grid "Aldrig en tråkig dag" | Vit | 5 kort: sociala medier-mockup, stat (90+ restauranger), team/inspelning, webbdesign-mockup, resultat-chart |
| 4 | Tabs "Vilken restaurang driver du?" | Off-white | Restaurangtyper tabs → chart-mockup + 2 feature-ikoner |
| 5 | Map + accordion "Partners i hela Sverige" | Vit | Sverige-karta m. dots + 3 tjänste-accordions |
| 6 | Pricing "Prisnivåer" | Off-white | 3 paket, mitten med gradient "Mest populär" |
| 7 | Testimonials "Vad kunderna säger" | Vit | Video-thumbnail + quote, pil-navigation |
| 8 | FAQ (dark) "Vanliga frågor" | #0F0F10 | Left: description + Contact CTA. Right: accordion |
| 9 | CTA-banner | Gradient | "Redo att ta plats i rampljuset?" + vit CTA-knapp |
| 10 | Footer | #0F0F10 | Logo + 4 kolumner + social + copyright |

---

## 9. Byggprompt-noteringar

- **Analytics-dashboard i hero**: Byggs som inline HTML/CSS/SVG (INTE bild) — en browser-frame med vänster sidebar, metrics-kort överst, bar chart + linje-chart. Imiterar en restaurang-dashboard (t.ex. "Instagram-följare +312%", "Bordsbokningar denna vecka: 487").
- **Gradient sparsamt**: Endast 4 platser — accent-ord i H1, premium pricing-kort, aktiv tab-indikator, CTA-banner bakgrund. Inte på brödtext, inte på ikoner.
- **Sverige-karta**: SVG inline, subtil grå, med animerade dots som pulsar. Inte Google Maps.
- **Bento-grid**: Asymmetrisk — inte lika stora kort. Stort kort + små kort. Tänk dribbble/Linear/Vercel.
- **Ikoner**: Inline SVG (Phosphor-stil outline, 2px stroke). Ingen icon-font.
- **Navigation**: Dropdown "Tjänster" med mjuk fade-animation.
- **Animationer**: Sparsamt. Fade-up on scroll (IntersectionObserver, redan i main.js). Ingen parallax, ingen overdrive.
- **Responsivitet**: Mobile-first brytpunkter: 480, 768, 1024, 1280, 1440.
- **Behåll**: All text/content från nuvarande sidor oförändrat — endast skalet byts.

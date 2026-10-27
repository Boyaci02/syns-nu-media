/* Skickar ett formulär till KK:s lead-webhook (synsnumedia.com/api/leads/webhook).
   Webhooken har spamskyddet (honungsfälla, mönsterkoll, dubblettspärr) och
   skapar leaden i KK med Telegram, push och notis. Formspree används inte längre.

   window.synsnuLead.skicka(falt) → Promise som löses vid 2xx och avvisas annars.
   falt är ett vanligt objekt med formulärets fält. Kända fält (namn, restaurang,
   email, telefon, paket, tjanst, qopla_kod, meddelande) skickas som de är, alla
   andra läggs som rader i meddelandet så ingenting tappas. Källan blir sidan
   (synsnumedia.se/kontakt osv), utom Qopla-sidor som behåller "qopla" så KK
   räknar Qopla-priset; sidan står då i meddelandet. */
(function () {
  var WEBHOOK = 'https://synsnumedia.com/api/leads/webhook';
  var KANDA = ['namn', 'restaurang', 'email', 'telefon', 'paket', 'tjanst', 'qopla_kod', 'meddelande'];
  var ALIAS = {
    name: 'namn', Namn: 'namn',
    restaurant: 'restaurang', Restaurang: 'restaurang',
    'E-post': 'email', epost: 'email',
    phone: 'telefon', Telefon: 'telefon',
    message: 'meddelande', Meddelande: 'meddelande'
  };
  var ETIKETT = {
    efternamn: 'Efternamn', byra: 'Byrå', stad: 'Stad', team: 'Team', videograf: 'Videograf',
    hemsida_status: 'Hemsida i dag', city: 'Stad', role: 'Roll', portfolio: 'Portfolio',
    hemsida: 'Hemsida', poang: 'Poäng', prestanda: 'Prestanda', seo: 'SEO', mobil: 'Mobil',
    tillganglighet: 'Tillgänglighet'
  };

  function sida() {
    var p = location.pathname.replace(/\.html$/, '').replace(/\/+$/, '');
    return 'synsnumedia.se' + (p || '/');
  }

  function bygg(falt) {
    var ut = {};
    var extra = [];
    var arQopla = false;
    Object.keys(falt).forEach(function (k) {
      var v = falt[k];
      if (typeof v !== 'string') v = v == null ? '' : String(v);
      v = v.trim();
      if (k === '_honey' || k === '_gotcha') { if (v) ut._gotcha = v; return; }
      if (k.charAt(0) === '_') return;                 // _subject, _next, _captcha ...
      if (k === 'source') { if (v.toLowerCase() === 'qopla') arQopla = true; return; }
      if (!v) return;
      var nyckel = ALIAS[k] || k;
      if (KANDA.indexOf(nyckel) !== -1) { ut[nyckel] = v; return; }
      extra.push((ETIKETT[k] || k) + ': ' + v);
    });
    if (falt.efternamn && ut.namn) ut.namn = ut.namn + ' ' + String(falt.efternamn).trim();
    var rader = [];
    if (ut.meddelande) rader.push(ut.meddelande);
    extra.forEach(function (r) { if (r.indexOf('Efternamn:') !== 0) rader.push(r); });
    rader.push('Formulär: ' + sida());
    ut.meddelande = rader.join('\n');
    ut.source = arQopla ? 'qopla' : sida();
    return ut;
  }

  function skicka(falt) {
    return fetch(WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bygg(falt))
    }).then(function (res) {
      if (!res.ok) throw new Error('webhook ' + res.status);
      return res.json().catch(function () { return {}; });
    });
  }

  function franForm(form) {
    var falt = {};
    new FormData(form).forEach(function (v, k) { if (typeof v === 'string') falt[k] = v; });
    return falt;
  }

  window.synsnuLead = { skicka: skicka, franForm: franForm, bygg: bygg };
})();

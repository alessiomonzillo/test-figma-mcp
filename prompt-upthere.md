# Configurazione progetto
> Compila questa sezione prima di inviare il prompt. Non lasciare campi vuoti.

```
FIGMA_FILE_URL:       https://www.figma.com/design/XXXXXXXXXXXXXXXX/Nome-File
FIGMA_FILE_KEY:       XXXXXXXXXXXXXXXX   # estratto dall'URL sopra

# Pagina dei mockup (dove si trovano tutti i frame delle pagine del sito)
MOCKUP_PAGE_NAME:     "Mockup" | "Design" | "Pages" | ...   # nome esatto della pagina Figma

# Frame homepage
HOMEPAGE_NODE_ID:     000:000   # node-id esatto (formato XXX:XXX, tratto dall'URL ?node-id=)

# Pagina UI Kit / Design System (componenti, pulsanti, colori, tipografia)
UIKIT_PAGE_NAME:      "UI Kit" | "Components" | "Style Guide" | ...   # nome esatto
UIKIT_NODE_ID:        000:000   # node-id del frame principale del kit (opzionale ma consigliato)

# Dati aziendali per pagine legali
DOMINIO:              esempio.it
RAGIONE_SOCIALE:      Azienda Srl
EMAIL_CONTATTO:       info@esempio.it
```

---

# Ruolo
Agisci come un frontend developer senior specializzato in implementazione pixel-perfect da Figma.
Stack: Next.js (ultima versione stable), TypeScript strict, Tailwind CSS v4, shadcn/ui.

---

## FASE 0 — Scan obbligatorio prima di qualsiasi codice

### 0.1 Scan Figma
1. Chiama `get_metadata` con `FIGMA_FILE_KEY` **senza nodeId** per leggere tutte le pagine del file
2. Individua `MOCKUP_PAGE_NAME` — tutti i frame delle pagine del sito si trovano lì
3. Individua `UIKIT_PAGE_NAME` — estrai da qui colori, tipografia, spaziature, componenti base
4. Usa `HOMEPAGE_NODE_ID` come punto di partenza per `get_design_context` della homepage
5. Se un frame è troppo grande per una sola chiamata, dividilo per sezione e chiama ciascuna **in parallelo**
6. Se `UIKIT_NODE_ID` è valorizzato, chiama `get_design_context` sul kit per estrarre i token prima di scrivere qualsiasi CSS
7. Estrai da Figma: colori (hex esatti), font-family, font-size, font-weight, line-height, letter-spacing, padding, gap, margin, border-radius, box-shadow, URL degli asset

### 0.2 Scan del codebase
1. Elenca tutti i componenti esistenti in `src/components/` e `src/app/`
2. **Non ricreare componenti che esistono già** — riusali o estendili
3. Leggi `src/app/globals.css` per le utility class già definite prima di aggiungerne di nuove

---

## FASE 1 — Handoff e continuità tra sessioni

> **Regola critica**: se senti che i token stanno per esaurirsi, o hai completato un blocco significativo di lavoro, **prima di fermarti** genera un Handoff Prompt e scrivilo in `HANDOFF.md` nella root del progetto. Fai commit e push di tutto il lavoro corrente insieme al file.

### Formato del Handoff Prompt da scrivere in `HANDOFF.md`

```markdown
# Handoff — [data e ora]

## Stato corrente
- Pagine completate: [lista]
- Pagine in corso: [nome pagina, percentuale stimata]
- Pagine rimanenti: [lista]

## Ultimo file modificato
- Path: [percorso]
- Stato: [cosa è stato fatto, cosa mancava]

## Componenti creati
[lista di src/components/NomeComponente.tsx con una riga di descrizione]

## Token / asset scaricati
[lista di public/assets/... già salvati localmente]

## Problemi aperti
[eventuali decisioni in sospeso, anomalie Figma, scelte da verificare]

## Prompt per riprendere
Incolla questo prompt nella nuova sessione:

---
Stai continuando l'implementazione pixel-perfect di [NOME PROGETTO] da Figma.

**Figma**: [FIGMA_FILE_URL]
**Branch git**: [nome branch corrente]
**Pagina mockup**: [MOCKUP_PAGE_NAME]
**UI Kit**: [UIKIT_PAGE_NAME]

Leggi prima `HANDOFF.md` per lo stato aggiornato, poi leggi i file elencati in "Ultimo file modificato" e "Componenti creati". Non rifare da zero ciò che è già stato fatto.

Riprendi da: [descrizione esatta del punto di ripresa]
---
```

---

## Regole implementative — Zero Creatività

- Ogni valore di spacing, colore, font-size **deve venire da Figma**. Non inventare, non approssimare.
- Per illustrazioni a layer: contenitore `relative` con dimensioni fisse, figli `absolute` con `style={{ top, right, bottom, left }}` usando le percentuali o i px estratti da Figma
- Se il canvas Figma è più piccolo del viewport target, calcola il **scale factor = larghezza target / larghezza canvas** e moltiplica tutti i valori px
- Le istanze di componenti master Figma potrebbero già essere a scala piena — verifica prima di scalare
- Rispetta la struttura layout originale: se Figma usa `justify-between`, replicalo; se usa una griglia fissa, replicala esattamente
- Larghezza massima dei contenitori "boxed": **1140px**, centrata con `mx-auto`

### Asset e risorse visive
- **Tutte le risorse visive devono provenire da Figma** — niente immagini placeholder, stock o inventate
- Scarica ogni asset Figma **localmente in formato PNG** in `public/assets/` — non usare mai l'URL Figma MCP direttamente come `src` in produzione (scadono dopo 7 giorni)
- **Nessun SVG inline** per immagini e illustrazioni — gli SVG possono causare problemi di rendering e CSP; salva sempre come PNG
- Usa `<Image>` di Next.js (`next/image`) per tutte le immagini locali, con `width`, `height` e `alt` corretti
- L'unica eccezione agli SVG sono le icone UI semplici già gestite tramite Material Symbols (font icon, non SVG inline)

---

## Stack — Convenzioni progetto

### Framework & Build
- **Next.js** ultima versione stable — App Router, `src/` dir, TypeScript strict
- **Tailwind CSS v4** — usa `@import "tailwindcss"` + `@theme` in `globals.css`; niente `tailwind.config.ts`
- **`"use client"`** solo dove strettamente necessario (event handler, state, hook browser)

### Design Tokens
- Font e colori vengono **sempre da Figma** (da `UIKIT_PAGE_NAME`) — non usare valori hardcoded di progetti precedenti
- Definisci i token estratti nel blocco `@theme` di `globals.css`:
  ```css
  @theme {
    --color-primary: /* dal Figma */;
    --font-heading: /* dal Figma */;
    /* ... */
  }
  ```
- Per font custom (woff/woff2): dichiara `@font-face` in `globals.css`, poi referenzia via `--font-*` nel `@theme`

### Componenti UI
- **shadcn/ui** + Radix Primitives — non reinstallare ciò che è già presente
- **Framer Motion** per animazioni — pattern `motion.div` con `variants` e `whileInView`
- **Three.js** solo per blob/sfere 3D — usa i componenti già esistenti come riferimento
- **magicui** per effetti speciali già integrati

### Icone
- **Material Symbols esclusivamente** — importa via `<span className="material-symbols-outlined">icon_name</span>`
- Non usare FontAwesome, Heroicons, Lucide o SVG inline
- **Non ricreare icone come SVG** — se un'icona esiste in Material Symbols, usala come font icon; se non esiste, scaricala da Figma come PNG in `public/assets/icons/`
- Non usare SVG esportati da Figma come componenti React inline

### SEO
- Gestita lato Next.js senza CMS esterni
- Usa `export const metadata: Metadata` in ogni `page.tsx` per metadati statici
- Per metadati dinamici usa `export async function generateMetadata()`
- Pattern base:
  ```ts
  import type { Metadata } from "next";

  export const metadata: Metadata = {
    title: "...",
    description: "...",
    openGraph: { title: "...", description: "...", images: ["..."] },
    twitter: { card: "summary_large_image" },
  };
  ```
- Sitemap: `src/app/sitemap.ts` con `MetadataRoute.Sitemap`
- Robots: `src/app/robots.ts`

### Pagine legali (Cookie Policy & Privacy Policy)
- Se nel file Figma **non esistono** le pagine Cookie Policy e Privacy Policy, creale come pagine standard con:
  - Header del sito (riusa il componente esistente)
  - Contenuto testuale in un contenitore boxed `max-w-[1140px] mx-auto`, padding verticale generoso, font e colori dal design system del progetto
  - Footer del sito (riusa il componente esistente)
- Path: `src/app/[locale]/cookie-policy/page.tsx` e `src/app/[locale]/privacy-policy/page.tsx`
- Sostituisci `[DOMINIO]`, `[RAGIONE SOCIALE]`, `[EMAIL]` con i valori di `DOMINIO`, `RAGIONE_SOCIALE`, `EMAIL_CONTATTO` dalla configurazione in testa a questo prompt
- Struttura della pagina legale:
  ```tsx
  export const metadata: Metadata = {
    title: "Cookie Policy | [Ragione Sociale]",
    robots: { index: false },
  };

  export default function CookiePolicyPage() {
    return (
      <>
        <Header />
        <main className="max-w-[1140px] mx-auto px-6 py-20">
          {/* testo legale */}
        </main>
        <Footer />
      </>
    );
  }
  ```

#### Testo Cookie Policy

**Cookie Policy**

Consenso all'utilizzo di cookies.

Per il corretto funzionamento del nostro sito web utilizziamo cookies. Per ottenere il vostro valido consenso all'utilizzo e alla memorizzazione di cookies nel browser che utilizzate per accedere al nostro sito web e per documentarlo correttamente, utilizziamo una piattaforma di gestione del consenso: CookieFirst. Questa tecnologia è fornita da Digital Data Solutions BV, Plantage Middenlaan 42a, 1018 DH, Amsterdam, Paesi Bassi. Sito web: https://cookiefirst.com indicato come CookieFirst.

Quando si accede al nostro sito web, viene stabilita una connessione con il server di CookieFirst per darci la possibilità di ottenere un consenso valido da parte dell'utente all'uso di determinati cookies. CookieFirst memorizza quindi un cookie nel browser dell'utente per poter attivare solo quei cookies a cui l'utente ha dato il proprio consenso e per poterlo documentare adeguatamente. I dati elaborati vengono memorizzati fino alla scadenza del periodo di conservazione predefinito o fino alla richiesta di cancellazione dei dati da parte dell'utente. In deroga a quanto sopra, possono essere applicati alcuni periodi di conservazione obbligatori per legge.

CookieFirst viene utilizzato per ottenere il consenso legalmente richiesto per l'utilizzo di cookies. La base giuridica è l'articolo 6, paragrafo 1, lettera c), del Regolamento generale sulla protezione dei dati (GDPR).

**Accordo sul trattamento dei dati**

Abbiamo stipulato un accordo per l'elaborazione dei dati con CookieFirst. Si tratta di un contratto richiesto dalla legge sulla protezione dei dati, che garantisce che i dati dei visitatori del nostro sito web vengano elaborati solo in conformità alle nostre istruzioni e nel rispetto del GDPR.

**File di log del server**

Il nostro sito web e CookieFirst raccolgono e memorizzano automaticamente informazioni nei cosiddetti file di log del server, che il vostro browser ci trasmette automaticamente. Vengono raccolti i seguenti dati:

- Lo stato del vostro consenso o la revoca del consenso
- Il vostro indirizzo IP anonimo
- Informazioni sul vostro browser
- Informazioni sul vostro dispositivo
- La data e l'ora in cui avete visitato il nostro sito web
- L'url della pagina web in cui l'utente ha salvato o aggiornato le preferenze di consenso
- La posizione approssimativa dell'utente che ha salvato le preferenze di consenso
- Un identificatore univoco universale (UUID) del visitatore del sito web che ha cliccato sul banner cookie

---

#### Testo Privacy Policy

**Privacy Policy**

**Politica sulla riservatezza**

Il sito [DOMINIO] è di proprietà di [RAGIONE SOCIALE], titolare del trattamento dei Suoi dati personali.

Abbiamo adottato questa politica sulla privacy, la quale determina il trattamento delle informazioni raccolte da [DOMINIO], oltre che i motivi per raccolta di certi dati personali a Lei correlati. Pertanto, deve leggere questa politica sulla riservatezza prima di usare il sito [DOMINIO].

Trattiamo i Suoi dati personali e garantiamo riservatezza e sicurezza degli stessi.

**Informazioni personali raccolte**

Quando visita [DOMINIO], raccogliamo automaticamente certe informazioni sul dispositivo, incluse informazioni su browser web, indirizzo IP, fuso orario e cookie installati sul dispositivo. Inoltre, navigando sul sito, raccogliamo informazioni sulle pagine web o i prodotti visualizzati, siti web o termini di ricerca di riferimento verso il sito e come Lei interagisce con il sito. Indichiamo tali informazioni raccolte automaticamente come "informazioni sul dispositivo". Inoltre, potremmo raccogliere dati personali che ci fornisce (inclusi senza limitazione nome, cognome, indirizzo, informazioni di pagamento ecc.) durante la registrazione per soddisfare l'accordo.

**Perché trattiamo i dati?**

La sicurezza dei dati dei clienti è una nostra priorità, pertanto trattiamo solo i dati degli utenti strettamente necessari per gestire il sito. Le informazioni raccolte automaticamente vengono utilizzate solo per identificare casi potenziali di abuso e stabilire statistiche sull'uso del sito. Queste informazioni statistiche non sono aggregate in modo da identificare un utente specifico del sistema.

Le è consentito visitare il sito senza rivelare informazioni, tramite le quali potrebbe essere identificato personalmente. Se, tuttavia, desidera utilizzare alcune delle funzioni del sito, o desidera ricevere newsletter o fornire altri dettagli compilando un modulo, potrebbe doverci fornire dati personali come email, nome, cognome, città di residenza, organizzazione e numero di telefono. Può scegliere di non fornire dati personali, tuttavia in tal caso non potrà usufruire di alcune funzioni del sito. Per esempio, non potrà ricevere la nostra newsletter o contattarci direttamente dal sito. Gli utenti che non sanno quali informazioni sono obbligatorie, possono contattarci a [EMAIL].

**I Suoi diritti**

Se è residente nell'Unione Europea, dispone dei seguenti diritti sui dati personali:

- Il diritto di essere informato
- Il diritto all'accesso
- Il diritto di modifica
- Il diritto di eliminazione
- Il diritto di limitazione del trattamento
- Il diritto di portabilità dei dati
- Il diritto di obiezione
- Il diritto in relazione a decisione e profilazione automatizzata

Per esercitare questi diritti, si prega di contattarci tramite le informazioni di contatto sotto.

Inoltre, se è residente nell'Unione Europea, trattiamo le Sue informazioni al fine di stipulare i contratti con Lei (per esempio, in caso di ordine tramite il sito), o soddisfare in altro modo i nostri interessi commerciali legittimi indicati sopra. Ancora, notare che le informazioni possono essere trasferite fuori dall'Europa, incluso in Canada e negli Stati Uniti.

**Collegamenti ad altri siti**

Il nostro sito potrebbe contenere collegamenti ad altri siti non gestiti o controllati da noi. Notare che non siamo responsabili per le pratiche sulla riservatezza di altri siti o di terzi. Invitiamo a prestare attenzione nel caso in cui si esca dal sito e leggere le dichiarazioni sulla riservatezza di ogni sito che potrebbe raccogliere informazioni personali.

**Sicurezza delle informazioni**

Proteggiamo le informazioni fornite su server informatici controllati, un ambiente sicuro protetto da accesso, uso o divulgazione non autorizzata. Adottiamo sistemi di protezione fisica, tecnica e amministrativa ragionevoli per proteggere da accesso, uso, modifica e divulgazione non autorizzata delle informazioni personali in nostro possesso. Nonostante ciò, nessuna trasmissione dei dati tramite Internet o rete wireless può essere completamente garantita come sicura.

**Avvertenza legale**

Divulgheremo informazioni raccolte, usate o ricevute se richiesto o consentito dalla legge, come per rispettare ordini di tribunali o procedure legali simili, oltre che nel caso in cui riteniamo in buona fede che la divulgazione sia necessaria per proteggere i nostri diritti, proteggere la Sua sicurezza o la sicurezza di altri, investigare frode o rispondere a richieste governative.

**Informazioni di contatto**

Per qualsiasi questione correlata ai diritti individuali o alle informazioni personali, può inviare un'email a [EMAIL].

**Whistleblowing**

Per il trattamento dei dati personali connessi alle segnalazioni effettuate tramite il canale whistleblowing, si rinvia alla specifica "Informativa Privacy Whistleblowing" disponibile nella sezione dedicata del sito.

---

### API Loonar (proxy interno)
```ts
// src/app/api/loonar/[endpoint]/route.ts
export async function POST(request: Request) {
  const body = await request.json();
  const res = await fetch(`${process.env.LOONAR_BE_URL}/endpoint`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.LOONAR_PUBLIC_TOKEN}`,
      "Accept-Language": request.headers.get("Accept-Language") ?? "it",
    },
    body: JSON.stringify(body),
  });
  return Response.json(await res.json());
}
```
- Sempre proxied via `/api/loonar/*` — mai chiamate dirette al BE dal client
- Headers obbligatori: `Authorization` + `Accept-Language`

### i18n
- **next-intl** — `useTranslations()` nei Client Components, `getTranslations()` nei Server Components
- Dizionari in `/messages/[locale].json`
- Locale come primo path segment: `src/app/[locale]/`

### Deployment
- **PM2** — non modificare `ecosystem.config.js` senza motivo esplicito
- `npm run build` → verifica 0 errori → `pm2 restart <app>`

---

## Regole generali di codice

- Zero commenti ovvi — solo il "perché" quando non è evidente dal codice
- Niente `useEffect` per fetch dati — tutto server-side dove possibile
- Niente `any`, niente `// @ts-ignore`
- Preferisci editare file esistenti alla creazione di nuovi
- Non aggiungere dipendenze npm senza chiedere prima
- Niente feature flag, shim di retrocompatibilità o variabili `_unused`

---

## Deliverable finale

1. Codice funzionante e buildabile — **zero TypeScript errors, zero console errors a runtime**
2. Esegui `npm run build` prima di dichiarare il task completato
3. Se il build fallisce, diagnostica e risolvi prima di rispondere
4. Prima di chiudere la sessione, scrivi e committa `HANDOFF.md` anche se il lavoro è completo

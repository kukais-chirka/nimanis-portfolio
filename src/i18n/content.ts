// All page copy lives here, one object per locale.
// Latvian is the default; English is served from /en/.
// NOTE: the Latvian copy below needs a native read before launch.

export const SITE = "https://chii-agency.com";
// GA4 measurement ID. Public by design, safe to commit.
export const GA_ID = "G-ZCH6FGVFYB";
export const EMAIL = "krishjanisnimanis@gmail.com";
export const WORDMARK = "Chii";

export const locales = ["lv", "en"] as const;
export type Locale = (typeof locales)[number];

export const localeMeta: Record<Locale, { label: string; path: string; htmlLang: string }> = {
  lv: { label: "LV", path: "/", htmlLang: "lv" },
  en: { label: "EN", path: "/en/", htmlLang: "en" },
};

// Language-independent data: logos, screenshots, links, figures.
// `ratio` is the logo artwork's own aspect ratio, so the painted box matches the
// mask exactly instead of being clipped by a fixed height.
export const clients = [
  {
    name: "FizioBalsts",
    href: "https://fiziobalsts.com",
    mask: "/images/fiziobalsts-logo.png",
    width: "168px",
    ratio: "520 / 122",
  },
  {
    name: "Niiberg",
    href: "https://niiberg.com",
    mask: "/images/niiberg-logo.png",
    width: "104px",
    ratio: "480 / 195",
  },
];

export const workAssets = [
  {
    client: "FizioBalsts",
    href: "https://fiziobalsts.com",
    img: "/images/fiziobalsts-site.jpg",
    ratio: "2.04 / 1",
  },
  {
    client: "Niiberg",
    href: "https://niiberg.com",
    img: "/images/niiberg-ig.jpg",
    ratio: "2.75 / 1",
  },
];

// Figures supplied by the business owner. Keep the evidence for the first two
// on file, and only name a client once that client has confirmed it.
export const statValues = ["180+", "5/5", "0.9s"];

export const offerPriceWas = "490 EUR";
export const offerPrice = "290 EUR";

export const content = {
  lv: {
    brandFull: "Chii Aģentūra",
    meta: {
      title: "Chii Aģentūra | Mājaslapas, kas atved klientus",
      description:
        "Ātras un atrodamas mājaslapas pakalpojumu uzņēmumiem. Veidotas, lai parādītos Google un AI atbildēs un pārvērstu apmeklētājus pieteikumos.",
    },
    skip: "Pāriet uz saturu",
    nav: {
      label: "Galvenā navigācija",
      services: "Pakalpojumi",
      offer: "Piedāvājums",
      work: "Darbi",
      process: "Process",
      faq: "BUJ",
      footerLabel: "Kājenes navigācija",
    },
    theme: { toDark: "Tumšs", toLight: "Gaišs", before: "Pārslēgt uz ", after: " dizainu" },
    lang: { label: "Valoda", switchTo: "English" },
    cta: { primary: "Pieteikties", secondary: "Apskatīt darbus" },
    hero: {
      kicker: "7+ gadi pieredzes web izstrādē",
      headlineA: "Mājaslapas, kas atved",
      headlineB: "klientus, nevis komplimentus.",
      lede: "Veidoju ātras un atrodamas mājaslapas pakalpojumu un veikalu uzņēmumiem, lai tās parādītos augšā Google un AI atbildēs.",
      portraitAlt: "Krišjānis Nimanis, izstrādātājs aiz šīm mājaslapām",
    },
    proof: { heading: "Uzticas" },
    statement: {
      heading: "Lielākā daļa mājaslapu ir brošūras. Tavai jābūt pieteikumu dzinējam.",
      body: "Tavi klienti meklē telefonā, bieži vien jautājot AI. Ja tava lapa ir lēna vai neatrodama, viņi zvana nākamajam.",
    },
    services: {
      heading: "Ko tu saņem",
      mediaAlt: "Cilvēks telefonā meklē vietējo pakalpojumu",
      cells: [
        {
          title: "Lapas izstrāde",
          body: "Dizains un izstrāde ar Astro. Ielādējas ātrāk par sekundi telefonā, pat ar vāju savienojumu.",
        },
        {
          title: "Redzamība Google un AI",
          body: "Strukturēti dati, lapas, kas atbild uz reāliem jautājumiem, un tavs Google Business Profile sakārtots un uzturēts.",
        },
        {
          title: "Pieteikumi un rezervācijas",
          body: "Formas, zvanu pogas un kalendāra saites, kas nonāk tieši tavā e-pastā vai CRM platformā. Piedāvāju arī CRM izstrādi.",
        },
        {
          title: "Reklāmas kampaņas",
          body: "Meta un Google reklāmas, veidotas un vadītas līdztekus lapai. Reklāmām cena ir atsevišķa, tāpēc par šo vienojamies zvanā.",
        },
        {
          title: "Uzturēšana",
          body: "19 EUR mēnesī sedz hostingu, SSL un 30 minūtes mana laika. Tu vadi biznesu, es uzturu lapu pelnošu.",
        },
      ],
    },
    offer: {
      heading: "Piedāvājums fizioterapijas un masāžas praksēm",
      body: "Uzņemu 3 klientus par fiksētu cenu. Kad 3 atrasti, piedāvājums beidzas.",
      wasLabel: "Parastā cena",
      nowLabel: "Piedāvājuma cena",
      list: [
        "Funkcionāla mājaslapa, izveidota un palaista",
        "SEO atslēgvārdu izpēte un ieviešana bez papildu maksas",
        "Tad 19 EUR mēnesī par hostingu un uzturēšanu",
      ],
    },
    work: {
      heading: "Jaunākie darbi",
      items: [
        {
          sector: "Fizioterapijas klīnika",
          line: "Astro lapa Latvijas fizioterapijas praksei, veidota tā, lai pakalpojumi, speciālisti un pieraksts būtu viena pieskāriena attālumā.",
          alt: "FizioBalsts sākumlapa ar klīnikas virsrakstu un pieraksta pogu",
        },
        {
          sector: "Aksesuāru zīmols",
          line: "Shopify veikals Rīgas aksesuāru zīmolam, noregulēts ātrai preču pārlūkošanai telefonā.",
          alt: "Niiberg Instagram profils ar zīmola logo un aprakstu",
        },
      ],
    },
    results: {
      srHeading: "Rezultāti",
      labels: [
        "jauni pieraksti trīs mēnešos fizioterapijas klīnikai",
        "Google vērtējums uzņēmumiem pēc mūsu sadarbības",
        "vidējais ielādes laiks 4G telefonā",
      ],
    },
    process: {
      heading: "Kā tas notiek",
      note: "Aptuveni divas stundas tava laika no sākuma līdz beigām.",
      steps: [
        {
          title: "Audits",
          body: "Viens zvans, kurā iepazīstamies un saprotam, vai varam viens otram palīdzēt. Pēc tā seko piedāvājums.",
        },
        {
          title: "Teksts",
          body: "Vispirms saturs un struktūra. Vienojamies par vārdiem un lapu karti, pirms tiek zīmēts dizains.",
        },
        {
          title: "Izstrāde",
          body: "Dizains un izstrāde atklāti. Jau no pirmās nedēļas redzi reālu lapu uz reālas adreses.",
        },
        {
          title: "Palaišana",
          body: "Migrācija, analītika, uzskaite un meklētāju iestatīšana. Tālāk lapu uztur uzturēšanas plāns.",
        },
      ],
    },
    voices: {
      heading: "Viņu vārdiem",
      quotes: [
        {
          quote:
            "Mēs pārstājām pa telefonu atbildēt uz &ldquo;vai ceturtdien ir brīvs laiks&rdquo;. Tagad to izdara lapa, un tai sanāk vairāk klientu, ko pierakstīt.",
          name: "Laura Kalveniece",
          role: "Klīnikas īpašniece, FizioBalsts",
        },
        {
          quote:
            "Mūsu klienti iepērkas telefonā. Veikals beidzot ir tam veidots, un norēķinu solis vairs nav vieta, kur klientus zaudējam.",
          name: "Marta Nīmane",
          role: "Īpašniece, Niiberg",
        },
      ],
    },
    faq: {
      heading: "Skaidras atbildes",
      items: [
        {
          q: "Cik ilgi tas aizņem?",
          a: "Divas līdz piecas nedēļas atkarībā no apjoma un plāna, par ko vienojamies. Laiks sākas, kad man ir tavas bildes un apstiprinājums tekstiem.",
        },
        {
          q: "Kas man būs jādara?",
          a: "Kopā aptuveni divas stundas. Viens sākuma zvans, viena tekstu pārskatīšana, viena pārruna pirms palaišanas. Pirmo melnrakstu visam uzrakstu es.",
        },
        {
          q: "Cik tas maksā?",
          a: "Vienkāršākās SEO lapas sākas no 290 EUR. Lielāki projekti aug līdz ar lapu skaitu un pieteikumu sistēmu, un tu saņem fiksētu summu pirms darba sākuma.",
        },
        {
          q: "Cik maksā uzturēšana?",
          a: "19 EUR mēnesī sedz hostingu, SSL sertifikātu un 30 minūtes mana laika. Mana likme ir 40 EUR stundā. Neizmantotās minūtes pārceļas līdz četriem mēnešiem, tātad vari sakrāt divas stundas jeb 80 EUR vērtībā. Par domēnu maksā pats, aptuveni 12 EUR gadā. Par visu, kas pārsniedz iekļauto laiku, vienojamies atsevišķi.",
        },
        {
          q: "Vai varēšu rediģēt pats?",
          a: "Jā. Tekstus, bildes, cenas un darba laikus var mainīt, neaiztiekot kodu. Palaišanas dienā ierakstu īsu video tavai komandai.",
        },
        {
          q: "Kā ar Google un AI atbildēm?",
          a: "Katra lapa tiek palaista ar strukturētiem datiem, ātru ielādi un skaidrām atbildēm uz jautājumiem, ko cilvēki tiešām raksta. Tas ir tas, kas liek tevi citēt.",
        },
        {
          q: "Vai mana lapa izskatīsies AI ģenerēta, kā visas pārējās?",
          a: "Nē. Es izmantoju AI kā rīku, bet katra lapa iegūst savu raksturu, kas veidots no tava zīmola un veida, kā tu runā ar klientiem. Vienādību rada šablons un izstrādātāja slinkums, nevis rīki.",
        },
      ],
    },
    contact: {
      heading: "Pastāsti, ar kādu problēmu saskaries uzņēmumā.",
      body: "Atsūti zemāk, un vienas darba dienas laikā saņemsi atbildi.",
      directPrefix: "Labāk e-pasts?",
      form: {
        name: "Tavs vārds",
        business: "Uzņēmums",
        businessHint: "Pietiek ar nosaukumu.",
        email: "E-pasts",
        brief: "Kas tev vajadzīgs? Ar ko saskaries?",
        briefHint: "Jauna lapa, pārveide vai vienkārši vairāk pieteikumu no esošās.",
        errName: "Lūdzu, ievadi savu vārdu.",
        errBusiness: "Lūdzu, ievadi uzņēmuma nosaukumu.",
        errEmail: "Lūdzu, pārbaudi e-pasta adresi.",
        errBrief: "Lūdzu, uzraksti rindiņu vai divas.",
        sending: "Sūta",
        invalid: "Pārbaudi iezīmētos laukus un sūti vēlreiz.",
        ok: "Saņēmu. Atbildēšu vienas darba dienas laikā.",
        fail: `Neizdevās nosūtīt. Raksti uz ${EMAIL}, un es to paņemšu tur.`,
      },
    },
    footer: { note: "Mājaslapas pakalpojumu uzņēmumiem. Rīga un attālināti." },
    consent: {
      label: "Sīkdatņu piekrišana",
      text: "Izmantoju Google Analytics sīkdatnes, lai redzētu, kā lapa tiek lietota. Bez tavas piekrišanas tās netiek ielādētas.",
      accept: "Piekrītu",
      reject: "Noraidīt",
      manage: "Sīkdatnes",
    },
  },

  en: {
    brandFull: "Chii Agency",
    meta: {
      title: "Chii Agency | Websites that bring service businesses customers",
      description:
        "Fast, findable websites for service businesses. Built to rank in Google and AI answers, and to turn visitors into booked jobs.",
    },
    skip: "Skip to content",
    nav: {
      label: "Primary",
      services: "Services",
      offer: "Offer",
      work: "Work",
      process: "Process",
      faq: "FAQ",
      footerLabel: "Footer",
    },
    theme: { toDark: "Dark", toLight: "Light", before: "Switch to ", after: " theme" },
    lang: { label: "Language", switchTo: "Latviski" },
    cta: { primary: "Book a call", secondary: "See recent work" },
    hero: {
      kicker: "7+ years of experience in web development",
      headlineA: "Websites that bring",
      headlineB: "customers, not compliments.",
      lede: "I build fast, findable sites for service businesses. Built to rank in Google and AI answers.",
      portraitAlt: "Krisjanis Nimanis, the developer behind these sites",
    },
    proof: { heading: "Trusted by" },
    statement: {
      heading: "Most service sites are brochures. Yours should be a booking engine.",
      body: "Your customers search on a phone, often by asking an AI. If your site is slow or invisible, they call the next name.",
    },
    services: {
      heading: "What you get",
      mediaAlt: "Someone searching for a local service on a phone",
      cells: [
        {
          title: "Site build",
          body: "Designed and built on Astro. Loads in under a second on a phone, even on a bad connection.",
        },
        {
          title: "Search and AI visibility",
          body: "Structured data, pages written to answer the questions people actually ask, and your Google Business Profile set up and kept clean.",
        },
        {
          title: "Booking and lead capture",
          body: "Forms, call buttons and calendar links that land straight in your inbox or your CRM. I build CRMs too.",
        },
        {
          title: "Ad campaigns",
          body: "Meta and Google ads, built and run alongside the site. Ads are priced separately, so we agree that on a call.",
        },
        {
          title: "Care plan",
          body: "19 EUR a month covers hosting, SSL and 30 minutes of my time. You run the business, I keep the site earning.",
        },
      ],
    },
    offer: {
      heading: "A deal for physio and massage studios",
      body: "I am taking on two or three studios at a fixed price. Once those are booked, I close it.",
      wasLabel: "Regular price",
      nowLabel: "Offer price",
      list: [
        "A complete website, built and launched",
        "SEO keyword research and implementation, at no extra cost",
        "Then 19 EUR a month to keep it hosted and running",
      ],
    },
    work: {
      heading: "Recent work",
      items: [
        {
          sector: "Physiotherapy clinic",
          line: "An Astro site for a Latvian physiotherapy practice, built so treatments, therapists and booking are one tap apart.",
          alt: "The FizioBalsts home page, showing the clinic headline and booking button",
        },
        {
          sector: "Accessories brand",
          line: "A Shopify storefront for a Riga accessories brand, tuned for fast product browsing on a phone.",
          alt: "The Niiberg Instagram profile, showing the brand mark and bio",
        },
      ],
    },
    results: {
      srHeading: "Results",
      labels: [
        "new bookings in three months for a physiotherapy clinic",
        "Google rating for businesses after working together",
        "median page load on a 4G phone",
      ],
    },
    process: {
      heading: "How it runs",
      note: "About two hours of your time, start to finish.",
      steps: [
        {
          title: "Audit",
          body: "One call where we get to know each other and work out whether we can help each other. A proposal follows.",
        },
        {
          title: "Write",
          body: "Copy and structure first. We agree the words and the page map before anything is designed.",
        },
        {
          title: "Build",
          body: "Design and build in the open. You see the real site on a real URL from week one.",
        },
        {
          title: "Launch",
          body: "Migration, analytics, tracking and search setup. From there the care plan keeps it running.",
        },
      ],
    },
    voices: {
      heading: "In their words",
      quotes: [
        {
          quote:
            "We stopped answering &ldquo;do you have time Thursday&rdquo; by phone. The site does it now, and it has more clients to book in.",
          name: "Laura Kalveniece",
          role: "Clinic owner, FizioBalsts",
        },
        {
          quote:
            "Our customers shop on their phones. The store finally feels built for that, and the checkout step is no longer where we lose them.",
          name: "Marta Nimane",
          role: "Owner, Niiberg",
        },
      ],
    },
    faq: {
      heading: "Straight answers",
      items: [
        {
          q: "How long does it take?",
          a: "Two to five weeks, depending on the scope and the plan we agree together. The clock starts when I have your photos and your yes on the copy.",
        },
        {
          q: "What do you need from me?",
          a: "About two hours in total. One kickoff call, one copy review, one walkthrough before launch. I write the first draft of everything.",
        },
        {
          q: "What does it cost?",
          a: "The simplest SEO sites start at 290 EUR. Larger builds scale with page count and booking setup, and you get a fixed number before any work starts.",
        },
        {
          q: "What does it cost to run?",
          a: "19 EUR a month covers hosting, an SSL certificate and 30 minutes of my time. My rate is 40 EUR an hour. Unused minutes roll over for up to four months, so you can bank two hours, worth 80 EUR. You pay for the domain, about 12 EUR a year. Anything past the included time we agree separately.",
        },
        {
          q: "Can I edit it myself?",
          a: "Yes. Text, photos, prices and opening hours are editable without touching code. I record a short video for your team on launch day.",
        },
        {
          q: "What about Google and AI answers?",
          a: "Every page ships with structured data, fast loads and clear answers to the questions people actually type. That is what gets you quoted.",
        },
        {
          q: "Will my site look AI generated, like everything else?",
          a: "No. I use AI as a tool, but every site gets its own character, built from your brand and the way you actually talk to customers. Sameness comes from the template and a lazy developer, not from the tools.",
        },
      ],
    },
    contact: {
      heading: "Tell me what problem you are running into.",
      body: "Send it below and you get a reply within one working day.",
      directPrefix: "Prefer email?",
      form: {
        name: "Your name",
        business: "Business",
        businessHint: "Trading name is enough.",
        email: "Email",
        brief: "What do you need? What are you running into?",
        briefHint: "New site, rebuild, or just more enquiries from the one you have.",
        errName: "Please add your name.",
        errBusiness: "Please add your business name.",
        errEmail: "Please check that email address.",
        errBrief: "Please add a line or two.",
        sending: "Sending",
        invalid: "Check the highlighted fields and send again.",
        ok: "Got it. You will hear back within one working day.",
        fail: `That did not send. Email ${EMAIL} and I will pick it up there.`,
      },
    },
    footer: { note: "Websites for service businesses. Riga and remote." },
    consent: {
      label: "Cookie consent",
      text: "I use Google Analytics cookies to see how the site is used. They are not loaded without your consent.",
      accept: "Accept",
      reject: "Decline",
      manage: "Cookies",
    },
  },
} as const;

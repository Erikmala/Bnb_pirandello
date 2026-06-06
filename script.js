const ROOM_IMAGE_BASE = "assets/camere";
const FALLBACK_IMAGE =
  "data:image/svg+xml;charset=UTF-8," +
  encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="900" height="600" viewBox="0 0 900 600">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#6b1a2e"/>
        <stop offset="100%" stop-color="#fff8ed"/>
      </linearGradient>
    </defs>
    <rect width="900" height="600" fill="url(#g)"/>
    <text x="50%" y="48%" text-anchor="middle" fill="#fff8ed" font-size="42" font-family="Georgia, serif">Pirandello Rooms</text>
    <text x="50%" y="56%" text-anchor="middle" fill="#fff8ed" font-size="24" font-family="Arial, sans-serif">Foto non disponibile</text>
  </svg>
`);

const translations = {
  it: {
    title: "Pirandello Rooms Verona | Camere a Borgo Milano",
    description: "Pirandello Rooms a Verona: camere triple, matrimoniali e doppie con bagno privato, aria condizionata e contatto diretto senza commissioni.",
    nav: {
      about: "Chi siamo",
      rooms: "Camere",
      map: "Mappa",
      contacts: "Contatti",
      info: "Info utili",
      activities: "Attività"
    },
    hero: {
      eyebrow: "Ospitalità veronese",
      title: "Un soggiorno elegante, curato e autentico.",
      text: "Pirandello Rooms unisce comfort moderno, ambienti curati e una posizione comoda per vivere Verona con tranquillità.",
      cta: "Scopri le camere",
      secondaryCta: "Richiedi disponibilità",
      highlight1: {
        value: "Borgo Milano",
        label: "zona comoda di Verona"
      },
      highlight2: {
        value: "6 camere",
        label: "triple, doppie e matrimoniali"
      },
      highlight3: {
        value: "Contatto diretto",
        label: "senza commissioni"
      },
      photoMain: "Camera matrimoniale",
      photoTop: "Tripla luminosa",
      photoBottom: "Doppia con letti singoli",
      floatKicker: "A Verona",
      floatText: "ambienti curati, caldi e pratici"
    },
    about: {
      title: "Chi siamo",
      text: "Siamo un B&B moderno e curato nel quartiere Borgo Milano, pensato per offrire un'accoglienza autentica e il calore tipico di Verona.",
      feature1: {
        title: "Posizione strategica",
        text: "Via Luigi Pirandello n. 3, Verona: una base ideale per raggiungere il centro storico, i servizi e i principali punti di interesse."
      },
      feature2: {
        title: "Accoglienza professionale",
        text: "Check-in semplice, ambienti ordinati e attenzione ai dettagli per una permanenza confortevole."
      },
      feature3: {
        title: "Comfort contemporaneo",
        text: "Camere dal design contemporaneo, con servizi essenziali per viaggi di piacere e soggiorni di lavoro."
      }
    },
    story: {
      eyebrow: "Dettagli che accolgono",
      title: "Il calore del legno, la semplicità di sentirsi subito a proprio agio.",
      text: "Stanze luminose, tessili puliti, servizi essenziali e un contatto diretto prima dell'arrivo: tutto pensato per un soggiorno senza complicazioni.",
      item1: "Bagno privato",
      item2: "Aria condizionata",
      item3: "Scrivania",
      item4: "TV a schermo piatto"
    },
    rooms: {
      eyebrow: "Le nostre camere",
      title: "Tre tipologie, sei camere totali",
      text: "La struttura dispone di camere triple, matrimoniali e doppie con letti separati, pensate per esigenze di soggiorno diverse.",
      prevPhoto: "Foto precedente",
      nextPhoto: "Foto successiva",
      photoAlt: "foto",
      goToPhoto: "Vai alla foto",
      askAvailability: "Richiedi disponibilità"
    },
    map: {
      eyebrow: "Dove siamo",
      title: "Mappa",
      addressTitle: "Indirizzo",
      cta: "Apri le indicazioni",
      consentText: "La mappa usa Google Maps e può attivare servizi di terze parti.",
      showButton: "Mostra mappa"
    },
    contacts: {
      eyebrow: "Contatti",
      title: "Prenota il tuo soggiorno da Pirandello Rooms",
      text: "Per informazioni e disponibilità puoi contattarci direttamente via WhatsApp, telefono o email.",
      whatsapp: "WhatsApp",
      call: "Chiama",
      email: "Email"
    },
    info: {
      eyebrow: "Prima del soggiorno",
      title: "Informazioni utili",
      text: "Orari e condizioni da confermare al momento della prenotazione diretta.",
      checkin: {
        title: "Check-in",
        text: "Dalle 15:00 alle 20:00, su appuntamento."
      },
      checkout: {
        title: "Check-out",
        text: "Entro le 10:00 del giorno di partenza."
      },
      tax: {
        title: "Tassa di soggiorno",
        text: "3,50 € a persona a notte, applicata secondo le regole del Comune di Verona."
      },
      payment: {
        title: "Pagamenti",
        text: "Modalità e condizioni da confermare in fase di prenotazione."
      }
    },
    activities: {
      eyebrow: "Esperienze locali",
      title: "Attività a meno di 20 minuti a piedi",
      text: "Una selezione di luoghi, locali e punti di interesse facilmente raggiungibili a piedi dalla struttura.",
      canestrari: "A circa 18 minuti a piedi.",
      sanmarco: "A circa 1 minuto a piedi.",
      borgo: "A circa 5 minuti a piedi.",
      rikimauri: "A circa 10 minuti a piedi.",
      sanzeno: "A circa 15 minuti a piedi.",
      bentegodi: "A circa 8 minuti a piedi."
    },
    footer: {
      businessName: "Pirandello Rooms di Scacchetti Matteo",
      registeredOffice: "Sede legale: Via Luigi Pirandello n. 3, 37138 Verona (VR), Italia",
      vat: "P.IVA del titolare: 04231750367",
      codes: "CIN IT023091B44FKVXBBC · CIR 023091-LOC-08075",
      privacy: "Privacy Policy",
      cookie: "Cookie Policy"
    },
    cookie: {
      title: "Privacy e cookie",
      text: "Usiamo funzioni tecniche necessarie. Con il tuo consenso possiamo attivare servizi esterni come Google Maps e, in futuro, strumenti di misurazione o marketing.",
      reject: "Rifiuta tutto",
      customize: "Personalizza",
      accept: "Accetta tutto",
      save: "Salva preferenze",
      policy: "Leggi la Cookie Policy",
      preferences: "Preferenze cookie",
      preferencesEyebrow: "Centro preferenze",
      preferencesTitle: "Gestisci le preferenze cookie",
      preferencesText: "Puoi scegliere quali categorie attivare. I cookie tecnici necessari restano sempre attivi perché servono al funzionamento del sito e alla memorizzazione della scelta.",
      necessaryTitle: "Necessari",
      necessaryText: "Sempre attivi. Consentono navigazione, sicurezza, lingua e salvataggio della scelta.",
      mapsTitle: "Google Maps",
      mapsText: "Mostra la mappa incorporata e può comportare richieste verso Google.",
      analyticsTitle: "Statistiche",
      analyticsText: "Autorizza eventuali strumenti di misurazione del traffico, se installati.",
      marketingTitle: "Marketing",
      marketingText: "Autorizza eventuali strumenti promozionali o di remarketing, se installati."
    },
    a11y: {
      languageSwitcher: "Seleziona lingua",
      heroHighlights: "Punti di forza",
      heroVisual: "Anteprima fotografica delle camere",
      comfortList: "Servizi principali",
      cookieClose: "Chiudi e mantieni solo cookie necessari",
      cookieModalClose: "Chiudi preferenze cookie"
    }
  },
  en: {
    title: "Pirandello Rooms Verona | Rooms in Borgo Milano",
    description: "Pirandello Rooms in Verona: triple, double and twin rooms with private bathroom, air conditioning and direct contact without commissions.",
    nav: {
      about: "About",
      rooms: "Rooms",
      map: "Map",
      contacts: "Contacts",
      info: "Useful info",
      activities: "Activities"
    },
    hero: {
      eyebrow: "Veronese hospitality",
      title: "An elegant, refined and authentic stay.",
      text: "Pirandello Rooms combines modern comfort, well-kept spaces and a convenient location for enjoying Verona with ease.",
      cta: "Discover the rooms",
      secondaryCta: "Request availability",
      highlight1: {
        value: "Borgo Milano",
        label: "a convenient Verona area"
      },
      highlight2: {
        value: "6 rooms",
        label: "triple, twin and double"
      },
      highlight3: {
        value: "Direct contact",
        label: "without commissions"
      },
      photoMain: "Double room",
      photoTop: "Bright triple room",
      photoBottom: "Twin room",
      floatKicker: "In Verona",
      floatText: "warm, practical and carefully kept spaces"
    },
    about: {
      title: "About us",
      text: "We are a modern and carefully maintained B&B in the Borgo Milano district, designed to offer authentic hospitality with the warmth of Verona.",
      feature1: {
        title: "Strategic location",
        text: "Via Luigi Pirandello n. 3, Verona: an ideal base for reaching the historic centre, local services and main points of interest."
      },
      feature2: {
        title: "Professional welcome",
        text: "Simple check-in, tidy spaces and attention to detail for a comfortable stay."
      },
      feature3: {
        title: "Contemporary comfort",
        text: "Contemporary rooms with essential services for leisure trips and business stays."
      }
    },
    story: {
      eyebrow: "Welcoming details",
      title: "Warm wood finishes and the simple feeling of settling in right away.",
      text: "Bright rooms, clean textiles, essential amenities and direct contact before arrival: everything is designed for an uncomplicated stay.",
      item1: "Private bathroom",
      item2: "Air conditioning",
      item3: "Desk",
      item4: "Flat-screen TV"
    },
    rooms: {
      eyebrow: "Our rooms",
      title: "Three room types, six rooms in total",
      text: "The property offers triple, double and twin rooms, designed for different travel needs.",
      prevPhoto: "Previous photo",
      nextPhoto: "Next photo",
      photoAlt: "photo",
      goToPhoto: "Go to photo",
      askAvailability: "Request availability"
    },
    map: {
      eyebrow: "Where we are",
      title: "Map",
      addressTitle: "Address",
      cta: "Open directions",
      consentText: "The map uses Google Maps and may activate third-party services.",
      showButton: "Show map"
    },
    contacts: {
      eyebrow: "Contacts",
      title: "Book your stay at Pirandello Rooms",
      text: "For information and availability, contact us directly by WhatsApp, phone or email.",
      whatsapp: "WhatsApp",
      call: "Call",
      email: "Email"
    },
    info: {
      eyebrow: "Before your stay",
      title: "Useful information",
      text: "Times and conditions will be confirmed when booking directly.",
      checkin: {
        title: "Check-in",
        text: "From 3:00 pm to 8:00 pm, by appointment."
      },
      checkout: {
        title: "Check-out",
        text: "By 10:00 am on the day of departure."
      },
      tax: {
        title: "City tax",
        text: "€3.50 per person per night, applied according to the rules of the Municipality of Verona."
      },
      payment: {
        title: "Payments",
        text: "Methods and conditions to be confirmed when booking."
      }
    },
    activities: {
      eyebrow: "Local experiences",
      title: "Activities within 20 minutes on foot",
      text: "A selection of places, restaurants and points of interest that are easy to reach on foot from the property.",
      canestrari: "About 18 minutes on foot.",
      sanmarco: "About 1 minute on foot.",
      borgo: "About 5 minutes on foot.",
      rikimauri: "About 10 minutes on foot.",
      sanzeno: "About 15 minutes on foot.",
      bentegodi: "About 8 minutes on foot."
    },
    footer: {
      businessName: "Pirandello Rooms by Scacchetti Matteo",
      registeredOffice: "Registered office: Via Luigi Pirandello n. 3, 37138 Verona (VR), Italy",
      vat: "Owner VAT number: 04231750367",
      codes: "CIN IT023091B44FKVXBBC · CIR 023091-LOC-08075",
      privacy: "Privacy Policy",
      cookie: "Cookie Policy"
    },
    cookie: {
      title: "Privacy and cookies",
      text: "We use necessary technical features. With your consent we can activate external services such as Google Maps and, in the future, measurement or marketing tools.",
      reject: "Reject all",
      customize: "Customize",
      accept: "Accept all",
      save: "Save preferences",
      policy: "Read the Cookie Policy",
      preferences: "Cookie preferences",
      preferencesEyebrow: "Preference center",
      preferencesTitle: "Manage cookie preferences",
      preferencesText: "You can choose which categories to enable. Necessary technical cookies always remain active because they support website operation and store your choice.",
      necessaryTitle: "Necessary",
      necessaryText: "Always active. They support navigation, security, language and storage of your choice.",
      mapsTitle: "Google Maps",
      mapsText: "Shows the embedded map and may involve requests to Google.",
      analyticsTitle: "Analytics",
      analyticsText: "Allows traffic measurement tools, if installed.",
      marketingTitle: "Marketing",
      marketingText: "Allows promotional or remarketing tools, if installed."
    },
    a11y: {
      languageSwitcher: "Select language",
      heroHighlights: "Highlights",
      heroVisual: "Room photo preview",
      comfortList: "Main amenities",
      cookieClose: "Close and keep necessary cookies only",
      cookieModalClose: "Close cookie preferences"
    }
  }
};

const roomTypes = [
  {
    id: "tripla",
    folder: "tripla",
    files: [
      "camera-tripla-01.jpg",
      "camera-tripla-02.jpg",
      "camera-tripla-03.jpg",
      "camera-tripla-04.jpg",
      "camera-tripla-05.jpg",
      "camera-tripla-06.jpg",
      "camera-tripla-07.jpg",
      "camera-tripla-08.jpg"
    ],
    content: {
      it: {
        name: "Camera Tripla",
        availability: "2 camere triple disponibili",
        description: "Soluzione ideale per tre ospiti, con un letto matrimoniale e un letto singolo.",
        features: [
          "fino a 3 ospiti",
          "1 letto matrimoniale e 1 letto singolo",
          "Bagno privato in camera",
          "Aria condizionata",
          "TV a schermo piatto",
          "Frigorifero o minibar",
          "Asciugacapelli",
          "Scrivania e armadio",
          "Wi-Fi gratuito"
        ]
      },
      en: {
        name: "Triple Room",
        availability: "2 triple rooms available",
        description: "Ideal for three guests, with one double bed and one single bed.",
        features: [
          "up to 3 guests",
          "1 double bed and 1 single bed",
          "Private en-suite bathroom",
          "Air conditioning",
          "Flat-screen TV",
          "Fridge or minibar",
          "Hairdryer",
          "Desk and wardrobe",
          "Free Wi-Fi"
        ]
      }
    }
  },
  {
    id: "matrimoniale",
    folder: "matrimoniale",
    files: ["camera-matrimoniale-01.jpg", "camera-matrimoniale-02.jpg", "camera-matrimoniale-03.jpg"],
    content: {
      it: {
        name: "Camera Matrimoniale",
        availability: "3 camere matrimoniali disponibili",
        description: "Camera pensata per due ospiti, con letto matrimoniale e ambienti curati.",
        features: [
          "fino a 2 ospiti",
          "1 letto matrimoniale",
          "Bagno privato in camera",
          "Aria condizionata",
          "TV a schermo piatto",
          "Frigorifero o minibar",
          "Asciugacapelli",
          "Scrivania e armadio",
          "Wi-Fi gratuito"
        ]
      },
      en: {
        name: "Double Room",
        availability: "3 double rooms available",
        description: "A room designed for two guests, with one double bed and well-kept interiors.",
        features: [
          "up to 2 guests",
          "1 double bed",
          "Private en-suite bathroom",
          "Air conditioning",
          "Flat-screen TV",
          "Fridge or minibar",
          "Hairdryer",
          "Desk and wardrobe",
          "Free Wi-Fi"
        ]
      }
    }
  },
  {
    id: "doppia",
    folder: "doppia",
    files: [
      "camera-doppia-letti-singoli-01.jpg",
      "camera-doppia-letti-singoli-02.jpg",
      "camera-doppia-letti-singoli-03.jpg",
      "camera-doppia-letti-singoli-04.jpg",
      "camera-doppia-letti-singoli-05.jpg",
      "camera-doppia-letti-singoli-06.jpg"
    ],
    content: {
      it: {
        name: "Doppia con Letti Singoli",
        availability: "1 camera con letti singoli disponibile",
        description: "Camera per due ospiti con due letti singoli separati, pratica e confortevole.",
        features: [
          "fino a 2 ospiti",
          "2 letti singoli separati",
          "Bagno privato in camera",
          "Aria condizionata",
          "TV a schermo piatto",
          "Frigorifero o minibar",
          "Asciugacapelli",
          "Scrivania e armadio",
          "Wi-Fi gratuito"
        ]
      },
      en: {
        name: "Twin Room",
        availability: "1 twin room available",
        description: "A practical and comfortable room for two guests, with two separate single beds.",
        features: [
          "up to 2 guests",
          "2 separate single beds",
          "Private en-suite bathroom",
          "Air conditioning",
          "Flat-screen TV",
          "Fridge or minibar",
          "Hairdryer",
          "Desk and wardrobe",
          "Free Wi-Fi"
        ]
      }
    }
  }
];

const requestedLanguage = new URLSearchParams(window.location.search).get("lang");
const savedLanguage = localStorage.getItem("siteLanguage");
let currentLanguage = translations[requestedLanguage] ? requestedLanguage : translations[savedLanguage] ? savedLanguage : "it";
let consentPreferences = null;
let revealObserver = null;
const CONSENT_MAX_AGE_MS = 1000 * 60 * 60 * 24 * 180;

try {
  const savedConsent = JSON.parse(localStorage.getItem("cookieConsent") || "null");
  const savedAt = savedConsent?.savedAt ? Date.parse(savedConsent.savedAt) : 0;

  if (savedConsent && savedAt && Date.now() - savedAt <= CONSENT_MAX_AGE_MS) {
    consentPreferences = savedConsent;
  } else if (savedConsent) {
    localStorage.removeItem("cookieConsent");
  }
} catch {
  localStorage.removeItem("cookieConsent");
}

function resolvePath(object, path) {
  return path.split(".").reduce((value, key) => value?.[key], object);
}

function photosForRoom(room) {
  return room.files.map((fileName) => `${ROOM_IMAGE_BASE}/${room.folder}/${fileName}`);
}

function createRoomCard(room, index) {
  const roomCopy = room.content[currentLanguage];
  const copy = translations[currentLanguage];
  const availabilityText =
    currentLanguage === "it"
      ? `Buongiorno, vorrei informazioni sulla disponibilità della ${roomCopy.name} di Pirandello Rooms.`
      : `Hello, I would like information about availability for the ${roomCopy.name} at Pirandello Rooms.`;
  const availabilityUrl = `https://wa.me/393349840378?text=${encodeURIComponent(availabilityText)}`;
  const featureItems = roomCopy.features.map((item) => `<li>${item}</li>`).join("");
  const imageItems = photosForRoom(room)
    .map(
      (photo, photoIndex) =>
        `<img class="slider-image ${photoIndex === 0 ? "active" : ""}" src="${photo}" alt="${roomCopy.name} ${copy.rooms.photoAlt} ${photoIndex + 1}" loading="lazy" />`
    )
    .join("");
  const dotItems = room.files
    .map(
      (_, photoIndex) =>
        `<button class="slider-dot ${photoIndex === 0 ? "active" : ""}" type="button" data-dot="${photoIndex}" aria-label="${copy.rooms.goToPhoto} ${photoIndex + 1}" aria-current="${photoIndex === 0 ? "true" : "false"}"></button>`
    )
    .join("");

  return `
    <article class="room-card" data-slider="${index}">
      <div class="slider">
        <div class="slider-track">
          ${imageItems}
        </div>
        <div class="slider-controls">
          <button class="slider-btn" type="button" data-action="prev" aria-label="${copy.rooms.prevPhoto}">&#10094;</button>
          <div class="slider-dots">${dotItems}</div>
          <button class="slider-btn" type="button" data-action="next" aria-label="${copy.rooms.nextPhoto}">&#10095;</button>
        </div>
      </div>
      <div class="room-body">
        <div class="room-head">
          <h3>${roomCopy.name}</h3>
          <span class="price">${roomCopy.availability}</span>
        </div>
        <p class="room-desc">${roomCopy.description}</p>
        <ul class="meta-list">${featureItems}</ul>
        <a class="btn-secondary room-cta" href="${availabilityUrl}" target="_blank" rel="noopener noreferrer">${copy.rooms.askAvailability}</a>
      </div>
    </article>
  `;
}

function initializeRooms() {
  const container = document.getElementById("roomsGrid");
  if (!container) return;

  container.innerHTML = roomTypes.map(createRoomCard).join("");

  document.querySelectorAll("[data-slider]").forEach((sliderCard) => {
    const images = sliderCard.querySelectorAll(".slider-image");
    const dots = sliderCard.querySelectorAll(".slider-dot");
    const sliderTrack = sliderCard.querySelector(".slider-track");
    let currentIndex = 0;
    let touchStartX = null;
    let touchStartY = null;

    images.forEach((img) => {
      img.addEventListener("error", () => {
        if (img.dataset.fallbackApplied === "true") return;
        img.dataset.fallbackApplied = "true";
        img.src = FALLBACK_IMAGE;
      });
    });

    function renderSlider(nextIndex) {
      const total = images.length;
      currentIndex = (nextIndex + total) % total;

      images.forEach((img, imageIndex) => {
        img.classList.toggle("active", imageIndex === currentIndex);
      });

      dots.forEach((dot, dotIndex) => {
        dot.classList.toggle("active", dotIndex === currentIndex);
        dot.setAttribute("aria-current", String(dotIndex === currentIndex));
      });
    }

    sliderCard.querySelectorAll(".slider-btn").forEach((button) => {
      button.addEventListener("click", () => {
        const action = button.getAttribute("data-action");
        renderSlider(action === "next" ? currentIndex + 1 : currentIndex - 1);
      });
    });

    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        const next = Number(dot.getAttribute("data-dot"));
        renderSlider(next);
      });
    });

    sliderTrack?.addEventListener(
      "touchstart",
      (event) => {
        if (event.touches.length !== 1) {
          touchStartX = null;
          touchStartY = null;
          return;
        }

        touchStartX = event.touches[0].clientX;
        touchStartY = event.touches[0].clientY;
      },
      { passive: true }
    );

    sliderTrack?.addEventListener(
      "touchend",
      (event) => {
        if (touchStartX === null || touchStartY === null || event.changedTouches.length !== 1) return;

        const touch = event.changedTouches[0];
        const deltaX = touch.clientX - touchStartX;
        const deltaY = touch.clientY - touchStartY;
        const horizontalSwipe = Math.abs(deltaX) >= 44 && Math.abs(deltaX) > Math.abs(deltaY) * 1.25;

        touchStartX = null;
        touchStartY = null;

        if (!horizontalSwipe) return;

        renderSlider(deltaX < 0 ? currentIndex + 1 : currentIndex - 1);
      },
      { passive: true }
    );

    sliderTrack?.addEventListener("touchcancel", () => {
      touchStartX = null;
      touchStartY = null;
    });
  });

  initializeRevealEffects();
}

function initializeRevealEffects() {
  const targets = document.querySelectorAll(
    ".section-shell, .story-band, .room-card, .feature-card, .info-card, .activity-card, .contact-panel"
  );

  if (!targets.length) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
    targets.forEach((target) => target.classList.add("is-visible"));
    return;
  }

  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -40px 0px" }
    );
  }

  targets.forEach((target) => {
    if (target.classList.contains("is-visible")) return;
    target.classList.add("revealable");
    revealObserver.observe(target);
  });
}

function applyLanguage(language) {
  currentLanguage = language;
  localStorage.setItem("siteLanguage", language);
  document.documentElement.lang = language;

  const copy = translations[language];
  document.title = copy.title;
  document.querySelector('meta[name="description"]')?.setAttribute("content", copy.description);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = resolvePath(copy, element.dataset.i18n);
    if (value) element.textContent = value;
  });

  document.querySelectorAll("[data-a11y-label]").forEach((element) => {
    const value = resolvePath(copy.a11y, element.dataset.a11yLabel);
    if (value) element.setAttribute("aria-label", value);
  });

  updateFixedWhatsappLinks(language);
  updateLanguageAwareLinks(language);

  document.querySelectorAll("[data-lang-toggle]").forEach((button) => {
    const isActive = button.dataset.langToggle === language;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  initializeRooms();
}

function updateFixedWhatsappLinks(language) {
  const message =
    language === "it"
      ? "Buongiorno, vorrei informazioni sulla disponibilità di Pirandello Rooms."
      : "Hello, I would like information about availability at Pirandello Rooms.";
  const url = `https://wa.me/393349840378?text=${encodeURIComponent(message)}`;

  document.querySelectorAll("[data-whatsapp-link]").forEach((link) => {
    link.setAttribute("href", url);
  });
}

function updateLanguageAwareLinks(language) {
  document.querySelectorAll("[data-lang-href]").forEach((link) => {
    const baseHref = link.getAttribute("data-lang-href");
    if (!baseHref) return;
    link.setAttribute("href", `${baseHref}?lang=${language}`);
  });
}

function updateGoogleConsent(preferences) {
  if (typeof gtag !== "function") return;

  gtag("consent", "update", {
    ad_storage: preferences.marketing ? "granted" : "denied",
    ad_user_data: preferences.marketing ? "granted" : "denied",
    ad_personalization: preferences.marketing ? "granted" : "denied",
    analytics_storage: preferences.analytics ? "granted" : "denied"
  });
}

function loadGoogleMap() {
  const iframe = document.getElementById("googleMap");
  const consentPanel = document.getElementById("mapConsent");
  if (!iframe) return;

  if (!iframe.src && iframe.dataset.src) {
    iframe.src = iframe.dataset.src;
  }

  consentPanel?.setAttribute("hidden", "");
}

function unloadGoogleMap() {
  const iframe = document.getElementById("googleMap");
  const consentPanel = document.getElementById("mapConsent");

  if (iframe) {
    iframe.removeAttribute("src");
  }

  consentPanel?.removeAttribute("hidden");
}

function setCookieBannerOpen(isOpen) {
  const banner = document.getElementById("cookieBanner");
  if (!banner) return;

  banner.toggleAttribute("hidden", !isOpen);
  document.body.classList.toggle("cookie-banner-open", isOpen);
}

function setCookieModalOpen(isOpen) {
  const modal = document.getElementById("cookieModal");
  if (!modal) return;

  modal.toggleAttribute("hidden", !isOpen);
  document.body.classList.toggle("cookie-modal-open", isOpen);

  if (isOpen) {
    populateCookiePreferenceControls();
    modal.querySelector("[data-cookie-toggle='maps']")?.focus();
  }
}

function populateCookiePreferenceControls() {
  const defaults = consentPreferences || { maps: false, analytics: false, marketing: false };

  document.querySelectorAll("[data-cookie-toggle]").forEach((input) => {
    input.checked = Boolean(defaults[input.dataset.cookieToggle]);
  });
}

function readCookiePreferenceControls() {
  const preferences = { maps: false, analytics: false, marketing: false };

  document.querySelectorAll("[data-cookie-toggle]").forEach((input) => {
    preferences[input.dataset.cookieToggle] = input.checked;
  });

  return preferences;
}

function applyCookieConsent(preferences) {
  consentPreferences = {
    necessary: true,
    preferences: true,
    maps: Boolean(preferences.maps),
    analytics: Boolean(preferences.analytics),
    marketing: Boolean(preferences.marketing),
    savedAt: new Date().toISOString()
  };

  localStorage.setItem("cookieConsent", JSON.stringify(consentPreferences));
  setCookieBannerOpen(false);
  setCookieModalOpen(false);
  updateGoogleConsent(consentPreferences);

  if (consentPreferences.maps) {
    loadGoogleMap();
  } else {
    unloadGoogleMap();
  }
}

function initializeCookieControls() {
  const mapButton = document.querySelector("[data-accept-maps]");
  const manageButtons = document.querySelectorAll("[data-cookie-manage]");

  if (consentPreferences) {
    updateGoogleConsent(consentPreferences);
    if (consentPreferences.maps) {
      loadGoogleMap();
    } else {
      unloadGoogleMap();
    }
  } else {
    setCookieBannerOpen(true);
  }

  if (window.location.hash === "#cookie-settings") {
    setCookieBannerOpen(false);
    setCookieModalOpen(true);
  }

  document.querySelectorAll("[data-cookie-accept]").forEach((button) => {
    button.addEventListener("click", () => {
      applyCookieConsent({ maps: true, analytics: true, marketing: true });
    });
  });

  document.querySelectorAll("[data-cookie-reject], [data-cookie-close]").forEach((button) => {
    button.addEventListener("click", () => {
      applyCookieConsent({ maps: false, analytics: false, marketing: false });
    });
  });

  document.querySelector("[data-cookie-customize]")?.addEventListener("click", () => {
    setCookieBannerOpen(false);
    setCookieModalOpen(true);
  });

  document.querySelector("[data-cookie-save]")?.addEventListener("click", () => {
    applyCookieConsent(readCookiePreferenceControls());
  });

  document.querySelector("[data-cookie-modal-close]")?.addEventListener("click", () => {
    setCookieModalOpen(false);
    if (!consentPreferences) {
      setCookieBannerOpen(true);
    }

    // If opening the modal pushed a history entry, go back to restore the URL
    try {
      if (window.location.hash === "#cookie-settings") history.back();
    } catch (e) {
      /* ignore */
    }
  });

  mapButton?.addEventListener("click", () => {
    applyCookieConsent({
      maps: true,
      analytics: consentPreferences?.analytics || false,
      marketing: consentPreferences?.marketing || false
    });
  });

  manageButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      setCookieBannerOpen(false);
      setCookieModalOpen(true);
      try {
        history.pushState({ cookieModal: true }, "", "#cookie-settings");
      } catch (e) {
        // Some browsers restrict history manipulation in certain modes — ignore
      }
    });
  });

  // Close the cookie modal when the user navigates back (popstate)
  window.addEventListener("popstate", () => {
    const modal = document.getElementById("cookieModal");
    if (!modal) return;

    if (window.location.hash !== "#cookie-settings" && !modal.hidden) {
      setCookieModalOpen(false);
      if (!consentPreferences) {
        setCookieBannerOpen(true);
      }
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;

    const modal = document.getElementById("cookieModal");
    if (!modal || modal.hidden) return;

    setCookieModalOpen(false);
    if (!consentPreferences) {
      setCookieBannerOpen(true);
    }
  });
}

document.querySelectorAll("[data-lang-toggle]").forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.langToggle);
  });
});

applyLanguage(currentLanguage);
initializeRevealEffects();
initializeCookieControls();

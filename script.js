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
    title: "Pirandello Rooms | Sito Ufficiale",
    description: "Pirandello Rooms: camere curate, comfort moderno e un'accoglienza autentica nel cuore di Verona.",
    nav: {
      about: "Chi siamo",
      rooms: "Camere",
      map: "Mappa",
      contacts: "Contatti",
      activities: "Attività"
    },
    hero: {
      eyebrow: "Ospitalità veronese",
      title: "Un soggiorno elegante, curato e autentico.",
      text: "Pirandello Rooms unisce comfort moderno, ambienti curati e una posizione comoda per vivere Verona con tranquillità.",
      cta: "Scopri le camere"
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
    rooms: {
      eyebrow: "Le nostre camere",
      title: "Tre tipologie, sei camere totali",
      text: "La struttura dispone di camere triple, matrimoniali e doppie con letti separati, pensate per esigenze di soggiorno diverse.",
      prevPhoto: "Foto precedente",
      nextPhoto: "Foto successiva",
      photoAlt: "foto"
    },
    map: {
      eyebrow: "Dove siamo",
      title: "Mappa",
      addressTitle: "Indirizzo",
      cta: "Apri le indicazioni"
    },
    contacts: {
      eyebrow: "Contatti",
      title: "Prenota il tuo soggiorno da Pirandello Rooms",
      text: "Per informazioni e disponibilità puoi contattarci direttamente via WhatsApp, telefono o email.",
      whatsapp: "WhatsApp",
      call: "Chiama",
      email: "Email"
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
      text: "Sito in aggiornamento con contenuti e foto ufficiali."
    }
  },
  en: {
    title: "Pirandello Rooms | Official Website",
    description: "Pirandello Rooms: carefully designed rooms, modern comfort and authentic hospitality in Verona.",
    nav: {
      about: "About",
      rooms: "Rooms",
      map: "Map",
      contacts: "Contacts",
      activities: "Activities"
    },
    hero: {
      eyebrow: "Veronese hospitality",
      title: "An elegant, refined and authentic stay.",
      text: "Pirandello Rooms combines modern comfort, well-kept spaces and a convenient location for enjoying Verona with ease.",
      cta: "Discover the rooms"
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
    rooms: {
      eyebrow: "Our rooms",
      title: "Three room types, six rooms in total",
      text: "The property offers triple, double and twin rooms, designed for different travel needs.",
      prevPhoto: "Previous photo",
      nextPhoto: "Next photo",
      photoAlt: "photo"
    },
    map: {
      eyebrow: "Where we are",
      title: "Map",
      addressTitle: "Address",
      cta: "Open directions"
    },
    contacts: {
      eyebrow: "Contacts",
      title: "Book your stay at Pirandello Rooms",
      text: "For information and availability, contact us directly by WhatsApp, phone or email.",
      whatsapp: "WhatsApp",
      call: "Call",
      email: "Email"
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
      text: "Website being updated with official content and photos."
    }
  }
};

const roomTypes = [
  {
    id: "tripla",
    folder: "tripla",
    files: [
      "680634657 (1).jpg",
      "680634799 (1).jpg",
      "680634874 (1).jpg",
      "680634895 (1).jpg",
      "680634908 (1).jpg",
      "680635078 (1).jpg",
      "687358689 (1).jpg",
      "687358691.jpg"
    ],
    content: {
      it: {
        name: "Camera Tripla",
        availability: "2 camere disponibili",
        description: "Soluzione ideale per tre ospiti, con un letto matrimoniale e un letto singolo.",
        features: [
          "3 ospiti",
          "1 letto matrimoniale",
          "1 letto singolo",
          "Bagno privato in camera",
          "Aria condizionata",
          "TV a schermo piatto",
          "Frigorifero o minibar",
          "Scrivania e armadio"
        ]
      },
      en: {
        name: "Triple Room",
        availability: "2 rooms available",
        description: "Ideal for three guests, with one double bed and one single bed.",
        features: [
          "3 guests",
          "1 double bed",
          "1 single bed",
          "Private en-suite bathroom",
          "Air conditioning",
          "Flat-screen TV",
          "Fridge or minibar",
          "Desk and wardrobe"
        ]
      }
    }
  },
  {
    id: "matrimoniale",
    folder: "matrimoniale",
    files: ["680635039 (1).jpg", "681901484 (1).jpg", "681902454.jpg"],
    content: {
      it: {
        name: "Camera Matrimoniale",
        availability: "3 camere disponibili",
        description: "Camera pensata per due ospiti, con letto matrimoniale e ambienti curati.",
        features: [
          "2 ospiti",
          "1 letto matrimoniale",
          "Bagno privato in camera",
          "Aria condizionata",
          "TV a schermo piatto",
          "Frigorifero o minibar",
          "Asciugacapelli",
          "Scrivania e armadio"
        ]
      },
      en: {
        name: "Double Room",
        availability: "3 rooms available",
        description: "A room designed for two guests, with one double bed and well-kept interiors.",
        features: [
          "2 guests",
          "1 double bed",
          "Private en-suite bathroom",
          "Air conditioning",
          "Flat-screen TV",
          "Fridge or minibar",
          "Hairdryer",
          "Desk and wardrobe"
        ]
      }
    }
  },
  {
    id: "doppia",
    folder: "doppia",
    files: [
      "687123132 (1).jpg",
      "687123202 (1).jpg",
      "687123208 (1).jpg",
      "687123216 (1).jpg",
      "687123222 (1).jpg",
      "687123223.jpg"
    ],
    content: {
      it: {
        name: "Doppia con Letti Singoli",
        availability: "1 camera disponibile",
        description: "Camera per due ospiti con due letti singoli separati, pratica e confortevole.",
        features: [
          "2 ospiti",
          "2 letti singoli separati",
          "Bagno privato in camera",
          "Aria condizionata",
          "TV a schermo piatto",
          "Frigorifero o minibar",
          "Asciugacapelli",
          "Scrivania e armadio"
        ]
      },
      en: {
        name: "Twin Room",
        availability: "1 room available",
        description: "A practical and comfortable room for two guests, with two separate single beds.",
        features: [
          "2 guests",
          "2 separate single beds",
          "Private en-suite bathroom",
          "Air conditioning",
          "Flat-screen TV",
          "Fridge or minibar",
          "Hairdryer",
          "Desk and wardrobe"
        ]
      }
    }
  }
];

let currentLanguage = localStorage.getItem("siteLanguage") || "it";

function resolvePath(object, path) {
  return path.split(".").reduce((value, key) => value?.[key], object);
}

function photosForRoom(room) {
  return room.files.map((fileName) => `${ROOM_IMAGE_BASE}/${room.folder}/${fileName}`);
}

function createRoomCard(room, index) {
  const roomCopy = room.content[currentLanguage];
  const copy = translations[currentLanguage];
  const featureItems = roomCopy.features.map((item) => `<li>${item}</li>`).join("");
  const imageItems = photosForRoom(room)
    .map(
      (photo, photoIndex) =>
        `<img class="slider-image ${photoIndex === 0 ? "active" : ""}" src="${photo}" alt="${roomCopy.name} ${copy.rooms.photoAlt} ${photoIndex + 1}" loading="lazy" />`
    )
    .join("");
  const dotItems = room.files
    .map((_, photoIndex) => `<span class="slider-dot ${photoIndex === 0 ? "active" : ""}" data-dot="${photoIndex}"></span>`)
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
    let currentIndex = 0;

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

  document.querySelectorAll("[data-lang-toggle]").forEach((button) => {
    const isActive = button.dataset.langToggle === language;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  initializeRooms();
}

document.querySelectorAll("[data-lang-toggle]").forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.langToggle);
  });
});

applyLanguage(currentLanguage);

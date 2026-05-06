const ROOM_IMAGE_BASE = "assets/camere";
const DEFAULT_PHOTO_SET = ["foto-1.jpg", "foto-2.jpg", "foto-3.jpg", "foto-4.jpg"];
const FALLBACK_IMAGE =
  "data:image/svg+xml;charset=UTF-8," +
  encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="900" height="600" viewBox="0 0 900 600">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#d9b58c"/>
        <stop offset="100%" stop-color="#8f5b3b"/>
      </linearGradient>
    </defs>
    <rect width="900" height="600" fill="url(#g)"/>
    <text x="50%" y="48%" text-anchor="middle" fill="#fff7ec" font-size="42" font-family="Georgia, serif">Pirandello Rooms</text>
    <text x="50%" y="56%" text-anchor="middle" fill="#fff0de" font-size="24" font-family="Arial, sans-serif">Inserisci le foto in assets/camere/camera-0X/</text>
  </svg>
`);

function roomPhotos(folder) {
  return DEFAULT_PHOTO_SET.map((fileName) => `${ROOM_IMAGE_BASE}/${folder}/${fileName}`);
}

const rooms = [
  {
    name: "Camera Pirandello 01",
    price: "da EUR 89 / notte",
    description: "Camera matrimoniale luminosa con palette neutra e bagno privato.",
    features: ["2 ospiti", "18 m2", "Letto queen", "Bagno privato", "Wi-Fi veloce"],
    photos: roomPhotos("camera-01")
  },
  {
    name: "Camera Pirandello 02",
    price: "da EUR 99 / notte",
    description: "Spazio moderno con area scrivania, ideale per soggiorni business.",
    features: ["2 ospiti", "20 m2", "Letto king", "Smart TV", "Aria condizionata"],
    photos: roomPhotos("camera-02")
  },
  {
    name: "Camera Pirandello 03",
    price: "da EUR 109 / notte",
    description: "Atmosfera calda con vista città e finiture contemporanee.",
    features: ["3 ospiti", "23 m2", "Letto queen + sofa", "Balcone", "Mini frigo"],
    photos: roomPhotos("camera-03")
  },
  {
    name: "Camera Pirandello 04",
    price: "da EUR 119 / notte",
    description: "Design pulito e armonioso con comfort premium e zona lounge.",
    features: ["3 ospiti", "25 m2", "Letto king", "Doccia walk-in", "Macchina caffè"],
    photos: roomPhotos("camera-04")
  },
  {
    name: "Camera Pirandello 05",
    price: "da EUR 129 / notte",
    description: "Camera family con spazi versatili e arredi dal taglio elegante.",
    features: ["4 ospiti", "28 m2", "Letto queen + 2 singoli", "Bagno grande", "Cassaforte"],
    photos: roomPhotos("camera-05")
  },
  {
    name: "Camera Pirandello 06",
    price: "da EUR 139 / notte",
    description: "Suite con carattere deciso, ideale per un soggiorno esclusivo.",
    features: ["4 ospiti", "31 m2", "Letto king + divano", "Zona relax", "Kit cortesia"],
    photos: roomPhotos("camera-06")
  }
];

function createRoomCard(room, index) {
  const featureItems = room.features.map((item) => `<li>${item}</li>`).join("");
  const imageItems = room.photos
    .map(
      (photo, photoIndex) =>
        `<img class="slider-image ${photoIndex === 0 ? "active" : ""}" src="${photo}" alt="${room.name} foto ${photoIndex + 1}" loading="lazy" />`
    )
    .join("");
  const dotItems = room.photos
    .map((_, photoIndex) => `<span class="slider-dot ${photoIndex === 0 ? "active" : ""}" data-dot="${photoIndex}"></span>`)
    .join("");

  return `
    <article class="room-card" data-slider="${index}">
      <div class="slider">
        <div class="slider-track">
          ${imageItems}
        </div>
        <div class="slider-controls">
          <button class="slider-btn" type="button" data-action="prev" aria-label="Foto precedente">&#10094;</button>
          <div class="slider-dots">${dotItems}</div>
          <button class="slider-btn" type="button" data-action="next" aria-label="Foto successiva">&#10095;</button>
        </div>
      </div>
      <div class="room-body">
        <div class="room-head">
          <h3>${room.name}</h3>
          <span class="price">${room.price}</span>
        </div>
        <p class="room-desc">${room.description}</p>
        <ul class="meta-list">${featureItems}</ul>
      </div>
    </article>
  `;
}

function initializeRooms() {
  const container = document.getElementById("roomsGrid");
  if (!container) return;

  container.innerHTML = rooms.map(createRoomCard).join("");

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

initializeRooms();

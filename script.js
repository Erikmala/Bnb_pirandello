const ROOM_IMAGE_BASE = "assets/camere";
const GALLERY_IMAGE_BASE = `${ROOM_IMAGE_BASE}/galleria`;
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
    <text x="50%" y="56%" text-anchor="middle" fill="#fff0de" font-size="24" font-family="Arial, sans-serif">Inserisci le foto nella cartella della camera</text>
  </svg>
`);

function galleryPhotos(from, to) {
  return Array.from({ length: to - from + 1 }, (_, index) => {
    const photoNumber = String(from + index).padStart(2, "0");
    return `${GALLERY_IMAGE_BASE}/foto-${photoNumber}.jpg`;
  });
}

const rooms = [
  {
    name: "Camera Tripla",
    price: "2 camere disponibili",
    description: "Soluzione ideale per tre ospiti, con un letto matrimoniale e un letto singolo.",
    features: ["3 ospiti", "1 letto matrimoniale", "1 letto singolo", "Bagno privato", "Wi-Fi veloce"],
    photos: galleryPhotos(1, 7)
  },
  {
    name: "Camera Matrimoniale",
    price: "3 camere disponibili",
    description: "Camera pensata per due ospiti, con letto matrimoniale e ambienti curati.",
    features: ["2 ospiti", "1 letto matrimoniale", "Bagno privato", "Comfort essenziali", "Wi-Fi veloce"],
    photos: galleryPhotos(8, 15)
  },
  {
    name: "Camera Doppia",
    price: "1 camera disponibile",
    description: "Camera per due ospiti con due letti singoli separati, pratica e confortevole.",
    features: ["2 ospiti", "2 letti singoli separati", "Bagno privato", "Comfort essenziali", "Wi-Fi veloce"],
    photos: galleryPhotos(16, 21)
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

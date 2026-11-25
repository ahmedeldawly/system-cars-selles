import './style.css';
import brandLogo from './brand-preview.png';

const cars = [
  { id: 1, brand: 'BMW', model: 'BMW i7 M70', type: 'سيدان فاخرة كهربائية', price: 8450000, year: 2025, mileage: 0, horsepower: 660, color: 'رمادي فروزن داكن', image: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/BMW_G70E_i7_xDrive60_M_Sport_Pro_Frozen_Deep_Grey_%282%29.jpg', featured: true },
  { id: 2, brand: 'BMW', model: 'BMW i5 M60', type: 'سيدان كهربائية رياضية', price: 6100000, year: 2024, mileage: 2200, horsepower: 601, color: 'أسود ساكن', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/2024_BMW_i5_Flow_Nostokana.jpg', featured: true },
  { id: 3, brand: 'BMW', model: 'BMW M5 G90', type: 'سيدان رياضية هجينة', price: 7100000, year: 2025, mileage: 0, horsepower: 717, color: 'أزرق مارينا', image: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/2025_BMW_M5_PHEV_Auto.jpg', featured: true },
  { id: 4, brand: 'BMW', model: 'BMW M4 Competition G82', type: 'كوبيه رياضية', price: 4850000, year: 2024, mileage: 3400, horsepower: 503, color: 'أزرق سانت موريتز', image: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/2024_BMW_M4_%28G82%29_Competition_DSC_7856.jpg', featured: true },
  { id: 5, brand: 'BMW', model: 'BMW M3 CS G80', type: 'سيدان رياضية', price: 6500000, year: 2025, mileage: 500, horsepower: 550, color: 'أخضر فورست', image: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/2025_BMW_M3_CS_Touring.jpg', featured: false },
  { id: 6, brand: 'BMW', model: 'BMW X7 M60i', type: 'دفع رباعي فاخر', price: 5600000, year: 2025, mileage: 1800, horsepower: 530, color: 'أزرق تانزانيت', image: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/2019_BMW_X7_xDrive30d_Luxury_Line_front.jpg', featured: false },
  { id: 7, brand: 'BMW', model: 'BMW X5 M60i', type: 'دفع رباعي رياضي', price: 4800000, year: 2024, mileage: 9200, horsepower: 523, color: 'رمادي مارينا', image: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/2023_BMW_X5_M_Competition_MHEV_Auto.jpg', featured: false },
  { id: 8, brand: 'BMW', model: 'BMW Z4 M40i', type: 'رودستر رياضية', price: 3900000, year: 2023, mileage: 11000, horsepower: 382, color: 'أحمر سانت فرانسيسكو', image: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/2007_BMW_Z4_M_Coupe_Black.jpg', featured: false },
  { id: 9, brand: 'BMW', model: 'BMW 840i Gran Coupe', type: 'كوبيه فاخرة رباعية الأبواب', price: 5200000, year: 2024, mileage: 6400, horsepower: 375, color: 'رمادي فروزن', image: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/2024_BMW_M4_%28G82%29_Competition_DSC_7856.jpg', featured: false },
  { id: 10, brand: 'Audi', model: 'Audi RS e-tron GT', type: 'كهربائية رياضية', price: 6750000, year: 2025, mileage: 80, horsepower: 637, color: 'أخضر داكن', image: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/2021_Audi_RS_e-tron_GT.jpg', featured: true },
  { id: 11, brand: 'Audi', model: 'Audi RS6 Avant GT', type: 'ستيشن رياضية', price: 7800000, year: 2025, mileage: 300, horsepower: 630, color: 'فضي رقم 40', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/2025_Audi_RS6_GT.jpg', featured: true },
  { id: 12, brand: 'Audi', model: 'Audi RS7 Sportback', type: 'كوبيه رباعية أبواب', price: 4250000, year: 2024, mileage: 28000, horsepower: 591, color: 'رمادي نورث ماونتن', image: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Audi_RS7.jpg', featured: true },
  { id: 13, brand: 'Audi', model: 'Audi RS Q8', type: 'دفع رباعي رياضي', price: 7100000, year: 2024, mileage: 900, horsepower: 591, color: 'رمادي ناردو', image: 'https://upload.wikimedia.org/wikipedia/commons/6/63/2020_Audi_RS_Q8_Front.jpg', featured: false },
  { id: 14, brand: 'Audi', model: 'Audi A8 L', type: 'سيدان فاخرة', price: 5750000, year: 2024, mileage: 7600, horsepower: 340, color: 'أسود ميكا', image: 'https://upload.wikimedia.org/wikipedia/commons/b/be/Audi_A8_%28D5%29_Washington_DC_Metro_Area%2C_USA_%281%29.jpg', featured: false },
  { id: 15, brand: 'Audi', model: 'Audi Q8 e-tron', type: 'دفع رباعي كهربائي', price: 4600000, year: 2024, mileage: 5400, horsepower: 503, color: 'أبيض جلاس', image: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/2024_Audi_Q8_e-tron_55_quattro%2C_06-08-2024.jpg', featured: false },
  { id: 16, brand: 'Audi', model: 'Audi A6 55 TFSI', type: 'سيدان فاخرة', price: 3650000, year: 2024, mileage: 15000, horsepower: 340, color: 'أخضر جيدرا', image: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Audi_A6%2C_GIMS_2018%2C_Le_Grand-Saconnex_%281X7A1490%29.jpg', featured: false },
  { id: 17, brand: 'Audi', model: 'Audi Q7 55 TFSI', type: 'دفع رباعي فاخر', price: 4200000, year: 2025, mileage: 4100, horsepower: 335, color: 'أزرق روزفلت', image: 'https://upload.wikimedia.org/wikipedia/commons/1/14/2025_Audi_Q7_%284M%29_DSC_7473.jpg', featured: false },
  { id: 18, brand: 'Audi', model: 'Audi S3 Sedan', type: 'سيدان رياضية', price: 3100000, year: 2024, mileage: 8200, horsepower: 328, color: 'أبيض جلاس', image: '/cars/car-18.jpg', featured: false },
  { id: 19, brand: 'Mercedes', model: 'Mercedes-AMG GT 63', type: 'كوبيه رياضية', price: 5980000, year: 2024, mileage: 1200, horsepower: 577, color: 'فضي مغنيسيوم', image: '/cars/car-19.jpg', featured: true },
  { id: 20, brand: 'Mercedes', model: 'Mercedes-AMG G63', type: 'دفع رباعي أيقوني', price: 9200000, year: 2025, mileage: 0, horsepower: 585, color: 'أبيض لؤلؤي', image: '/cars/car-20.jpg', featured: true },
  { id: 21, brand: 'Mercedes', model: 'Mercedes-Maybach S580', type: 'سيدان فاخرة فائقة', price: 8100000, year: 2024, mileage: 9200, horsepower: 496, color: 'أسود أونيكس', image: '/cars/car-21.jpg', featured: true },
  { id: 22, brand: 'Mercedes', model: 'Mercedes-AMG C63 S E Performance', type: 'سيدان هجينة رياضية', price: 6000000, year: 2024, mileage: 4500, horsepower: 671, color: 'رمادي سيلينيت', image: '/cars/car-22.jpg', featured: false },
  { id: 23, brand: 'Mercedes', model: 'Mercedes-EQS 580', type: 'سيدان كهربائية فاخرة', price: 7000000, year: 2025, mileage: 2000, horsepower: 523, color: 'فضي هاي تيك', image: '/cars/car-23.jpg', featured: false },
  { id: 24, brand: 'Mercedes', model: 'Mercedes-AMG GLC63 S', type: 'دفع رباعي رياضي', price: 5200000, year: 2024, mileage: 8000, horsepower: 503, color: 'أخضر هاي تتش', image: '/cars/car-24.jpg', featured: false },
  { id: 25, brand: 'Mercedes', model: 'Mercedes-C300 AMG Line', type: 'سيدان فاخرة', price: 3100000, year: 2024, mileage: 13000, horsepower: 255, color: 'أبيض بولار', image: '/cars/car-25.jpg', featured: false },
  { id: 26, brand: 'Mercedes', model: 'Mercedes-GLE53 AMG', type: 'دفع رباعي رياضي', price: 4700000, year: 2024, mileage: 9600, horsepower: 429, color: 'أزرق هياسنت', image: '/cars/car-26.jpg', featured: false },
  { id: 27, brand: 'Mercedes', model: 'Mercedes-E450 4MATIC', type: 'سيدان فاخرة', price: 3900000, year: 2024, mileage: 6500, horsepower: 375, color: 'فضي جرافيت', image: '/cars/car-27.jpg', featured: false }
];

const formatPrice = (price) => new Intl.NumberFormat('ar-EG', {
  style: 'currency',
  currency: 'EGP',
  maximumFractionDigits: 0
}).format(price).replace('EGP', 'ج.م');

const app = document.querySelector('#app');
app.innerHTML = `
  <header class="nav" id="top">
    <a class="brand" href="#top" aria-label="MOTO-CARS DRIFT">
      <img class="brand-logo" src="${brandLogo}" alt="MOTO-CARS DRIFT">
    </a>
    <nav class="nav-links" aria-label="التنقل الرئيسي">
      <a class="active" href="#top">الرئيسية</a>
      <a href="#collection">السيارات</a>
      <a href="#services">الخدمات</a>
      <a href="#contact">تواصل معنا</a>
    </nav>
    <div class="nav-actions">
      <button class="icon-button" id="searchButton" aria-label="بحث">⌕</button>
      <button class="icon-button favorite-nav" id="favoriteButton" aria-label="المفضلة">
        ♡ <span id="favoriteCount">0</span>
      </button>
      <button class="menu-button" id="menuButton" aria-label="القائمة"><span></span><span></span></button>
    </div>
  </header>

  <main>
    <section class="hero">
      <div class="hero-orb orb-one"></div>
      <div class="hero-orb orb-two"></div>
      <div class="hero-content">
        <p class="eyebrow"><span></span> صُممت للأوائل</p>
        <h1>استمتع برحلة<br><em>تفوق الحد.</em></h1>
        <p class="hero-copy">مجموعة مختارة بعناية من أكثر السيارات الفاخرة تميزاً، لتصلكم بأعلى معايير الجودة والاحترافية.</p>
        <div class="hero-actions">
          <a class="primary-button" href="#collection">استكشف المجموعة <b>←</b></a>
          <button class="play-button" id="showroomButton"><span>▶</span> جولة المعرض</button>
        </div>
      </div>
      <div class="hero-visual" id="heroVisual">
        <div class="scene-lights"></div>
        <div class="floor-ring"></div>
        <div class="car-platform"></div>
        <img src="${cars[1].image}" alt="Mercedes-AMG GT" draggable="false">
        <div class="spec-float spec-one"><small>القوة</small><b>577 <span>حصان</span></b></div>
        <div class="spec-float spec-two"><small>التسارع</small><b>3.2 <span>ثانية</span></b></div>
      </div>
    </section>

    <section class="collection" id="collection">
      <div class="section-heading">
        <div>
          <p class="eyebrow"><span></span> المجموعة المميزة</p>
          <h2>اختر سيارتك القادمة</h2>
        </div>
        <div class="filters" aria-label="تصفية السيارات">
          <button class="filter active" data-filter="All">الكل</button>
          <button class="filter" data-filter="BMW">BMW</button>
          <button class="filter" data-filter="Mercedes">Mercedes</button>
          <button class="filter" data-filter="Audi">Audi</button>
        </div>
      </div>
      <div class="car-grid" id="carGrid"></div>
    </section>

    <section class="services" id="services">
      <article><span>01</span><div><h3>معاينة مخصصة</h3><p>احجز موعدك وتجربة قيادة تناسب أسلوبك.</p></div></article>
      <article><span>02</span><div><h3>تمويل مرن</h3><p>خطط سداد مصممة لتناسب احتياجاتك.</p></div></article>
      <article><span>03</span><div><h3>توصيل سريع</h3><p>نوصل سيارتك إلى باب منزلك بأمان.</p></div></article>
    </section>

    <section class="contact" id="contact">
      <div>
        <p class="eyebrow"><span></span> ابدأ رحلتك</p>
        <h2>السيارة التي تحلم بها<br><em>تنتظرك هنا.</em></h2>
      </div>
      <a href="https://wa.me/201099194192" class="primary-button" target="_blank" rel="noreferrer">تواصل عبر واتساب <b>←</b></a>
    </section>
  </main>

  <footer>
    <a class="brand" href="#top" aria-label="MOTO-CARS DRIFT"><img class="brand-logo" src="${brandLogo}" alt="MOTO-CARS DRIFT"></a>
    <p>© 2026 MOTO-CARS DRIFT. جميع الحقوق محفوظة.</p>
  </footer>

  <div class="search-overlay" id="searchOverlay" aria-hidden="true">
    <button class="overlay-close" id="closeSearch" aria-label="إغلاق">×</button>
    <input id="searchInput" type="search" placeholder="ابحث عن موديل أو ماركة..." aria-label="بحث">
  </div>

  <dialog class="car-dialog" id="carDialog">
    <button class="dialog-close" id="dialogClose" aria-label="إغلاق">×</button>
    <div id="dialogContent"></div>
  </dialog>

  <div class="mobile-menu" id="mobileMenu">
    <a href="#top">الرئيسية</a>
    <a href="#collection">السيارات</a>
    <a href="#services">الخدمات</a>
    <a href="#contact">تواصل معنا</a>
  </div>
`;

const grid = document.querySelector('#carGrid');
const favorites = new Set();

function renderCars(filter = 'All', search = '') {
  const filtered = cars.filter((car) => {
    const matchesFilter = filter === 'All' || car.brand === filter;
    const matchesSearch = `${car.brand} ${car.model} ${car.type}`.includes(search);
    return matchesFilter && matchesSearch;
  }).sort((a, b) => a.year - b.year);

  grid.innerHTML = filtered.map((car) => `
    <article class="car-card" data-id="${car.id}">
      <div class="car-image">
        ${car.featured ? '<span class="badge">مميز</span>' : ''}
        <button class="heart ${favorites.has(car.id) ? 'liked' : ''}" data-favorite="${car.id}" aria-label="إضافة للمفضلة">♡</button>
        <img src="${car.image}" alt="${car.model}" loading="lazy">
      </div>
      <div class="car-info">
        <p>${car.brand} · ${car.year}</p>
        <h3>${car.model}</h3>
        <div class="car-meta"><span>${car.horsepower} حصان</span><span>${car.mileage.toLocaleString('ar-EG')} كم</span></div>
        <div class="car-bottom">
          <strong>${formatPrice(car.price)}</strong>
          <button class="details-button" data-details="${car.id}" aria-label="عرض تفاصيل ${car.model}">↗</button>
        </div>
      </div>
    </article>
  `).join('');

  if (!filtered.length) grid.innerHTML = '<p class="empty-state">لا توجد سيارات مطابقة لبحثك.</p>';

  grid.querySelectorAll('.car-card').forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      if (window.innerWidth < 900) return;
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `translateY(-8px) rotateX(${-y * 7}deg) rotateY(${x * 9}deg) scale(1.015)`;
    });
    card.addEventListener('pointerleave', () => {
      card.style.transform = '';
    });
  });
}

renderCars();

let activeFilter = 'All';
document.querySelectorAll('.filter').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelector('.filter.active')?.classList.remove('active');
    button.classList.add('active');
    activeFilter = button.dataset.filter;
    renderCars(activeFilter, document.querySelector('#searchInput').value);
  });
});

grid.addEventListener('click', (event) => {
  const favoriteButton = event.target.closest('[data-favorite]');
  if (favoriteButton) {
    const id = Number(favoriteButton.dataset.favorite);
    favorites.has(id) ? favorites.delete(id) : favorites.add(id);
    favoriteButton.classList.toggle('liked');
    favoriteButton.textContent = favorites.has(id) ? '♥' : '♡';
    document.querySelector('#favoriteCount').textContent = favorites.size;
    return;
  }
  const detailsButton = event.target.closest('[data-details]');
  if (detailsButton) openDetails(Number(detailsButton.dataset.details));
});

function openDetails(id) {
  const car = cars.find((item) => item.id === id);
  if (!car) return;
  document.querySelector('#dialogContent').innerHTML = `
    <div class="dialog-image"><img src="${car.image}" alt="${car.model}"></div>
    <div class="dialog-details">
      <p class="eyebrow"><span></span> ${car.brand}</p>
      <h2>${car.model}</h2>
      <p class="dialog-type">${car.type} · ${car.year}</p>
      <div class="dialog-specs">
        <div><small>القوة</small><b>${car.horsepower} حصان</b></div>
        <div><small>المسافة</small><b>${car.mileage.toLocaleString('ar-EG')} كم</b></div>
        <div><small>اللون</small><b>${car.color}</b></div>
      </div>
      <div class="dialog-bottom">
        <strong>${formatPrice(car.price)}</strong>
        <a href="https://wa.me/201099194192?text=${encodeURIComponent(`أرغب في الاستفسار عن ${car.model}`)}" target="_blank" rel="noreferrer" class="primary-button">اطلب السيارة <b>←</b></a>
      </div>
    </div>
  `;
  document.querySelector('#carDialog').showModal();
}

document.querySelector('#dialogClose').addEventListener('click', () => document.querySelector('#carDialog').close());
document.querySelector('#carDialog').addEventListener('click', (event) => {
  if (event.target === event.currentTarget) event.currentTarget.close();
});

const searchOverlay = document.querySelector('#searchOverlay');
document.querySelector('#searchButton').addEventListener('click', () => {
  searchOverlay.classList.add('open');
  searchOverlay.setAttribute('aria-hidden', 'false');
  document.querySelector('#searchInput').focus();
});
document.querySelector('#closeSearch').addEventListener('click', () => {
  searchOverlay.classList.remove('open');
  searchOverlay.setAttribute('aria-hidden', 'true');
});
document.querySelector('#searchInput').addEventListener('input', (event) => renderCars(activeFilter, event.target.value));

const mobileMenu = document.querySelector('#mobileMenu');
document.querySelector('#menuButton').addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  document.querySelector('#menuButton').classList.toggle('open');
});
mobileMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
  document.querySelector('#menuButton').classList.remove('open');
}));

document.querySelector('#favoriteButton').addEventListener('click', () => {
  if (!favorites.size) {
    document.querySelector('#collection').scrollIntoView({ behavior: 'smooth' });
  } else {
    renderCars('All', '');
    const favoriteCards = [...grid.querySelectorAll('.car-card')].filter((card) => favorites.has(Number(card.dataset.id)));
    grid.querySelectorAll('.car-card').forEach((card) => {
      if (!favorites.has(Number(card.dataset.id))) card.style.display = 'none';
    });
  }
});

const heroVisual = document.querySelector('#heroVisual');
let heroRotation = 0;
let dragStart = null;

heroVisual.addEventListener('pointerdown', (event) => {
  dragStart = event.clientX;
  heroVisual.setPointerCapture(event.pointerId);
});

heroVisual.addEventListener('pointermove', (event) => {
  if (dragStart === null) return;
  const delta = event.clientX - dragStart;
  heroRotation = Math.max(-22, Math.min(22, delta / 8));
  heroVisual.style.transform = `rotateY(${heroRotation}deg) rotateX(-3deg)`;
  heroVisual.querySelector('img').style.transform = `translateZ(45px) rotateY(${-8 + heroRotation * .25}deg) scaleX(-1)`;
});

heroVisual.addEventListener('pointerup', (event) => {
  dragStart = null;
  heroVisual.releasePointerCapture(event.pointerId);
});

window.addEventListener('mousemove', (event) => {
  if (window.innerWidth < 900 || dragStart !== null) return;
  const x = (event.clientX / window.innerWidth - 0.5) * 10;
  const y = (event.clientY / window.innerHeight - 0.5) * 8;
  heroVisual.style.transform = `rotateY(${x + heroRotation}deg) rotateX(${-y}deg)`;
});

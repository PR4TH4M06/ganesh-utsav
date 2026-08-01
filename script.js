/**
 * Lalbaug Cha Raja — Wikimedia Commons images
 * https://commons.wikimedia.org/wiki/Category:Lalbaugcha_Raja
 */
const wiki = (file, w = 960) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=${w}`;

const LALBAGH = {
  rajaClassic: wiki('Lalbaugcha Raja.jpg'),
  rajaClose: wiki('Lalbaugh Ganesha.jpg'),
  raja2011: wiki('Lalbagcha Raja (2011).jpg'),
  raja2011alt: wiki('Lalbagcha Raja(1) (2011).JPG'),
  pandal: wiki('Lalbaugcha Raja just outside its Pandal at Lalgaug, Mumbai.JPG'),
  visarjan: wiki('Lalbaugcha Raja on its way for viserjan.JPG'),
  ganpatiDays: wiki('Lalbagh, Mumbai, during Ganpati days.jpg'),
  ganpatiDays2: wiki('Lalbagh, Mumbai, during Ganpati days. 2.jpg'),
  pundal: wiki('Ganesh pundal.jpg'),
  festival: wiki('Festival Mode.jpg'),
  bappa: wiki('Bappa.jpg'),
  chaRaja: wiki('Lalbaug cha raja.jpg'),
  folk: wiki('Indian Folk Ganpati Festival (1).jpg'),
};

/**
 * GANESH UTSAV INVITATION — Config
 */
const CONFIG = {
  orgName: 'ओं साई राम मित्र मंडळ',
  inviteEventLabel: 'Invitation',
  heroTitle: 'सातपुरचा राजा',
  familyName: 'ओं साई राम मित्र मंडळ — आपले हार्दिक स्वागत',
  mainDate: '14th September 2026',
  heroTagline: 'Because welcoming Bappa home requires twice the devotion — and you!',
  countdownTarget: '2026-09-14T08:00:00',
  countdownMessage: 'Awaiting Your Noble Presence',
  calendarTitle: 'Ganesh Utsav — Om Sai Ram Mitra Mandal',
  calendarStart: '20260914T080000',
  calendarEnd: '20260919T210000',
  calendarLocation: 'Satpur Cha Raja, Satpur, Nashik, Maharashtra',
  familyText:
    '<em>Om Sai Ram Mitra Mandal</em> warmly welcomes you to join us in welcoming <em>Lord Ganesha</em> into our hearts and community.<br><br>From Sthapana to Visarjan — every aarti, every Miravnuk, every modak — is shared with love. Your blessings complete our celebration.',
  familyNames: '— ओं साई राम मित्र मंडळ —',
  closingMessage: 'Your presence and blessings will make our Ganesh Utsav truly divine.<br>We eagerly await you!',
  closingSign: '— प्रेमाने, ओं साई राम मित्र मंडळ —',
  hashtag: '#GanpatiBappaMorya #SatpurchaRaja',
  shareMessage: "You're invited to Om Sai Ram Mitra Mandal's Ganesh Utsav — Satpurcha Raja! 🙏 Ganpati Bappa Morya!",
  musicFile: 'assets/aarti.mp3',

  sealImage:
    'https://scontent.cdninstagram.com/v/t51.82787-19/518458308_17985160766837067_5474200944853567070_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=107&ccb=7-5&_nc_sid=f7ccc5&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=Y5y_Ml8EORgQ7kNvwEJmNDI&_nc_oc=Adre_RcTjraWYN3ZhRMsgKiA9uk14HZUcDAmi4Ld0NWNr-1p7EFrAjr5aXC3B6pbTx4fGMKHbeGcTPTVfSyq9KuB&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_gid=JKAJfR7zzD9-dYL62zDbSw&_nc_ss=7b689&oh=00_AQFTFSHjPMWhwa4ljkZjqlNd5-rx4NuHMYN9MiodcP6d0g&oe=6A735DD3',
  introImage: LALBAGH.rajaClose,
  closingGanesh: LALBAGH.bappa,

  petalImages: {
    daisy: 'https://swapnil-ritu.invitationmedia.in/assets/falling-daisy-DWyrh5i3.png',
    rose: 'https://swapnil-ritu.invitationmedia.in/assets/falling-rose-petal-CzrX2ZBd.png',
  },

  sections: [
    { id: 'section-hero', label: 'Home' },
    { id: 'section-countdown', label: 'Countdown' },
    { id: 'section-events', label: 'Events' },
    { id: 'section-gallery', label: 'Gallery' },
    { id: 'section-venue', label: 'Venue' },
    { id: 'section-family', label: 'Family' },
  ],

  details: [
    { icon: '👔', title: 'Dress Code', text: 'Traditional Indian attire preferred — kurta, saree or festive wear in maroon, gold & saffron.', tag: 'Attire' },
    { icon: '🪔', title: 'Aarti Timings', text: 'Morning 7:30 AM · Madhyahna 12:00 PM · Evening 7:00 PM — daily during Utsav.', tag: 'Schedule' },
    { icon: '🍬', title: 'Prasad', text: 'Mahaprasad & ukdiche modak served at 1:00 PM and 8:00 PM daily. All are welcome.', tag: 'Food' },
    { icon: '🅿️', title: 'Parking', text: 'Street parking available near Om Sai Ram Mitra Mandal, Satpur. Please arrive 15 minutes early for Sthapana.', tag: 'Travel' },
    { icon: '📵', title: 'During Aarti', text: 'Kindly maintain silence during aarti. Mobile phones on silent mode, please.', tag: 'Etiquette' },
    { icon: '🎁', title: 'Offerings', text: 'Flowers, modak and fruits are welcome. Please avoid plastic garlands.', tag: 'Puja' },
  ],

  events: [
    { day: 'Day One', dayDate: '14th September 2026', name: 'Ganpati Sthapana', date: 'September 14, 2026', time: '08:00 AM onwards', venue: 'Om Sai Ram Mitra Mandal, Satpur', description: 'Sacred installation of Lord Ganesha with Vedic mantras, pranpratishtha, kalash puja and the first family aarti welcoming Bappa home.', image: LALBAGH.rajaClassic, alt: 'Lalbaug Cha Raja — Sthapana' },
    { day: 'Day One', dayDate: '14th September 2026', name: 'Madhyahna Aarti', date: 'September 14, 2026', time: '12:00 PM', venue: 'Om Sai Ram Mitra Mandal, Satpur', description: 'Midday aarti with camphor, flowers and devotional hymns — the heart of daily worship during the Utsav.', image: LALBAGH.rajaClose, alt: 'Lalbaug Cha Raja — Aarti' },
    { day: 'Day One', dayDate: '14th September 2026', name: 'Miravnuk', date: 'September 14, 2026', time: '05:00 PM onwards', venue: 'Om Sai Ram Mitra Mandal to Main Road, Satpur', description: "Traditional Miravnuk procession with lezim, dhol, tasha and folk dance — Bappa's grand welcome parade!", image: LALBAGH.pandal, alt: 'Lalbaug Cha Raja — Miravnuk procession' },
    { day: 'Day One', dayDate: '14th September 2026', name: 'Bhajan Sandhya', date: 'September 14, 2026', time: '07:00 PM onwards', venue: 'Om Sai Ram Mitra Mandal, Satpur', description: 'Evenings filled with soulful bhajans, kirtan and devotional singing under diyas and festoon lights.', image: LALBAGH.ganpatiDays, alt: 'Lalbaug Cha Raja — Bhajan Sandhya' },
    { day: 'Day Two', dayDate: '15th September 2026', name: 'Dhol Tasha Pathak', date: 'September 15, 2026', time: '06:00 PM onwards', venue: 'Om Sai Ram Mitra Mandal, Satpur', description: 'Thunderous dhol-tasha performance — rhythm, energy and pure Maharashtrian festive spirit!', image: LALBAGH.folk, alt: 'Lalbaug Cha Raja — Dhol Tasha' },
    { day: 'Day Two', dayDate: '15th September 2026', name: 'Lezim & Folk Dance', date: 'September 15, 2026', time: '08:00 PM onwards', venue: 'Om Sai Ram Mitra Mandal, Satpur', description: "Vibrant lezim, lavani and folk dance celebrating Maharashtra's rich cultural heritage.", image: LALBAGH.festival, alt: 'Lalbaug Cha Raja — Folk dance' },
    { day: 'Day Three', dayDate: '16th September 2026', name: 'Atharvashirsha Paath', date: 'September 16, 2026', time: '07:30 AM', venue: 'Om Sai Ram Mitra Mandal, Satpur', description: 'Morning recitation of Ganesh Atharvashirsha — a sacred Vedic hymn for wisdom and prosperity.', image: LALBAGH.raja2011, alt: 'Lalbaug Cha Raja 2011 — Paath' },
    { day: 'Day Three', dayDate: '16th September 2026', name: 'Haldi-Kumkum', date: 'September 16, 2026', time: '04:00 PM onwards', venue: 'Om Sai Ram Mitra Mandal, Satpur', description: 'Traditional haldi-kumkum for women devotees — suhasini puja, songs and celebration.', image: LALBAGH.raja2011alt, alt: 'Lalbaug Cha Raja — Haldi Kumkum' },
    { day: 'Daily', dayDate: 'During Utsav', name: 'Mahaprasad & Modak', date: 'Daily during Utsav', time: '01:00 PM & 08:00 PM', venue: 'Om Sai Ram Mitra Mandal, Satpur', description: 'Blessed prasad and freshly prepared ukdiche modak served with love to all devotees and guests.', image: LALBAGH.bappa, alt: 'Lalbaug Cha Raja — Mahaprasad' },
    { day: 'Visarjan', dayDate: '19th September 2026', name: 'Visarjan', date: 'September 19, 2026', time: '06:00 PM onwards', venue: 'Mula-Mutha River Ghat, Pune', description: 'Emotional farewell procession — Ganpati Bappa Morya, Pudhchya Varshi Lavkar Ya!', image: LALBAGH.visarjan, alt: 'Lalbaug Cha Raja — Visarjan' },
  ],

  gallery: [
    { src: LALBAGH.rajaClassic, alt: 'Lalbaug Cha Raja — Classic' },
    { src: LALBAGH.rajaClose, alt: 'Lalbaug Cha Raja — Close up' },
    { src: LALBAGH.raja2011, alt: 'Lalbaug Cha Raja 2011' },
    { src: LALBAGH.pandal, alt: 'Lalbaug Cha Raja — Pandal' },
    { src: LALBAGH.ganpatiDays2, alt: 'Lalbaug — Ganpati days' },
    { src: LALBAGH.visarjan, alt: 'Lalbaug Cha Raja — Visarjan' },
    { src: LALBAGH.pundal, alt: 'Lalbaug Cha Raja — Ganesh Pandal' },
    { src: LALBAGH.chaRaja, alt: 'Lalbaug Cha Raja' },
  ],

  mainMap: {
    lat: 19.9905579,
    lng: 73.7224986,
    zoom: 18,
    placeName: 'Satpur Cha Raja',
    mapUrl: 'https://maps.app.goo.gl/2JQkJKa42cKmRgEF7',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=19.9905579,73.7224986',
  },

  venues: [
    {
      name: 'Om Sai Ram Mitra Mandal — Satpur Cha Raja',
      address: 'Satpur Cha Raja, Satpur, Nashik, Maharashtra 422007',
      mapUrl: 'https://maps.app.goo.gl/2JQkJKa42cKmRgEF7',
      note: 'Sthapana, Aarti, Miravnuk, Bhajan & all daily programs',
      showMap: true,
    },
    {
      name: 'Visarjan Ghat',
      address: 'Near Godavari River Ghat, Nashik, Maharashtra',
      mapUrl: 'https://maps.google.com/?q=Godavari+Ghat+Nashik+Visarjan',
      note: 'Final Visarjan procession on 19th September',
    },
  ],
};

const envelopeScreen = document.getElementById('envelopeScreen');
const invitationMain = document.getElementById('invitationMain');
const envelopeWrap = document.getElementById('envelopeWrap');
const musicBtn = document.getElementById('musicBtn');
const bgMusic = document.getElementById('bgMusic');
const petalsLayer = document.getElementById('petalsLayer');
const butterfliesLayer = document.getElementById('butterfliesLayer');
const diyaLayer = document.getElementById('diyaLayer');
const fabGroup = document.getElementById('fabGroup');
const sectionNav = document.getElementById('sectionNav');
const lightbox = document.getElementById('lightbox');

let isOpened = false;
let musicPlaying = false;

function initContent() {
  document.getElementById('envelopeSeal').src = CONFIG.sealImage;
  document.getElementById('inviteEventMarathi').textContent = CONFIG.heroTitle;
  document.getElementById('inviteEventLabel').textContent = CONFIG.inviteEventLabel;
  document.getElementById('inviteHashtag').textContent = CONFIG.hashtag;
  document.getElementById('heroGaneshDeco').src = LALBAGH.chaRaja;
  document.getElementById('introImage').src = CONFIG.introImage;
  document.getElementById('closingGaneshImg').src = CONFIG.closingGanesh;
  document.getElementById('heroTitle').textContent = CONFIG.heroTitle;
  document.getElementById('introTitle').textContent = CONFIG.heroTitle;
  document.getElementById('heroFamily').textContent = CONFIG.familyName;
  document.getElementById('heroDate').textContent = CONFIG.mainDate;
  document.getElementById('heroTagline').textContent = CONFIG.heroTagline;
  document.getElementById('countdownMessage').textContent = CONFIG.countdownMessage;
  document.getElementById('familyText').innerHTML = CONFIG.familyText;
  document.getElementById('familyNames').innerHTML = `<span>${CONFIG.familyNames}</span>`;
  document.getElementById('closingMessage').innerHTML = CONFIG.closingMessage;
  document.getElementById('closingSign').textContent = CONFIG.closingSign;
  document.getElementById('footerHashtag').textContent = CONFIG.hashtag;
  document.getElementById('footerYear').textContent = new Date().getFullYear();

  if (CONFIG.musicFile) {
    bgMusic.querySelector('source').src = CONFIG.musicFile;
    bgMusic.load();
  }

  renderEvents();
  renderGallery();
  renderVenues();
  renderDetails();
  renderSectionNav();
}

function renderEvents() {
  const groups = [];
  CONFIG.events.forEach((ev, i) => {
    const key = `${ev.day}|${ev.dayDate}`;
    let group = groups.find((g) => g.key === key);
    if (!group) {
      group = { key, day: ev.day, dayDate: ev.dayDate, items: [] };
      groups.push(group);
    }
    group.items.push({ ...ev, index: i });
  });

  document.getElementById('eventsList').innerHTML = groups
    .map(
      (group) => `
      <div class="event-day-group reveal">
        <div class="event-day-header">
          <span class="event-day-line"></span>
          <div class="event-day-badge">
            <span class="event-day-name">${group.day}</span>
            <span class="event-day-date">${group.dayDate}</span>
          </div>
          <span class="event-day-line"></span>
        </div>
        ${group.items
          .map(
            (ev, j) => `
          <article class="event-card ${ev.index % 2 === 1 ? 'reverse' : ''} reveal" style="--delay:${j * 0.06}s">
            <div class="event-image-wrap">
              <img class="event-image" src="${ev.image}" alt="${ev.alt}" loading="lazy" />
              <div class="event-image-overlay"></div>
              <div class="event-image-shine"></div>
              <span class="event-num">${String(ev.index + 1).padStart(2, '0')}</span>
              <span class="event-date-chip">${ev.date}</span>
            </div>
            <div class="event-details">
              <div class="event-details-inner">
                <h3 class="event-name">${ev.name}</h3>
                <div class="event-meta">
                  <span class="event-meta-item"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>${ev.time}</span>
                  <span class="event-meta-item"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>${ev.venue}</span>
                </div>
                <div class="event-name-line"></div>
                <p class="event-desc">${ev.description}</p>
              </div>
            </div>
          </article>`
          )
          .join('')}
      </div>`
    )
    .join('');
}

function renderDetails() {
  document.getElementById('detailsGrid').innerHTML = CONFIG.details
    .map(
      (d, i) => `
      <div class="detail-card reveal" style="--delay:${i * 0.05}s">
        <div class="detail-card-top">
          <span class="detail-icon-wrap">${d.icon}</span>
          <span class="detail-tag">${d.tag}</span>
        </div>
        <h3 class="detail-title">${d.title}</h3>
        <p class="detail-text">${d.text}</p>
        <span class="detail-corner" aria-hidden="true">✦</span>
      </div>`
    )
    .join('');
}

function renderGallery() {
  document.getElementById('galleryGrid').innerHTML = CONFIG.gallery
    .map(
      (g, i) => `
      <figure class="gallery-item reveal" style="--delay:${i * 0.05}s" data-src="${g.src}" data-alt="${g.alt}">
        <img src="${g.src}" alt="${g.alt}" loading="lazy" />
        <figcaption>${g.alt}</figcaption>
      </figure>`
    )
    .join('');
}

function renderVenues() {
  const { lat, lng, zoom, placeName, directionsUrl } = CONFIG.mainMap;
  const satelliteSrc = `https://maps.google.com/maps?q=${lat},${lng}&z=${zoom}&t=k&output=embed`;

  document.getElementById('venuesList').innerHTML = CONFIG.venues
    .map((v) => {
      if (v.showMap) {
        return `
      <div class="venue-card venue-card--merged reveal">
        <div class="venue-map-wrap">
          <iframe
            title="${placeName} — satellite view"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            allowfullscreen
            src="${satelliteSrc}"
          ></iframe>
        </div>
        <div class="venue-card-body">
          <div class="venue-icon">📍</div>
          <h3 class="venue-name">${v.name}</h3>
          <p class="venue-address">${v.address}</p>
          <p class="venue-note">${v.note}</p>
          <a class="btn btn-gold" href="${directionsUrl}" target="_blank" rel="noopener noreferrer">Get Directions</a>
        </div>
      </div>`;
      }

      return `
      <div class="venue-card reveal">
        <div class="venue-icon">📍</div>
        <h3 class="venue-name">${v.name}</h3>
        <p class="venue-address">${v.address}</p>
        <p class="venue-note">${v.note}</p>
        <a class="btn btn-gold" href="${v.mapUrl}" target="_blank" rel="noopener noreferrer">Get Directions</a>
      </div>`;
    })
    .join('');
}

function renderSectionNav() {
  sectionNav.innerHTML = CONFIG.sections
    .map((s) => `<button class="nav-dot" data-target="${s.id}" aria-label="${s.label}"></button>`)
    .join('');
}

function openInvitation() {
  if (isOpened) return;
  isOpened = true;
  envelopeWrap.classList.add('open');
  fireCelebration();
  setTimeout(() => {
    envelopeScreen.classList.add('closing');
    setTimeout(() => {
      envelopeScreen.classList.add('hidden');
      invitationMain.classList.remove('hidden');
      fabGroup.classList.remove('hidden');
      sectionNav.classList.remove('hidden');
      initScrollReveal();
      initSectionNav();
      initGalleryLightbox();
      startCountdown();
      tryPlayMusic();
      startButterflies();
      createDiyas();
      initScratchCard();
    }, 700);
  }, 1200);
}

function fireCelebration() {
  if (typeof confetti !== 'function') return;
  const colors = ['#FFD700', '#FF6B00', '#8B1538', '#FF4500', '#D4AF37', '#FFAA00', '#FFF8F0'];

  confetti({
    particleCount: 160,
    spread: 110,
    startVelocity: 48,
    origin: { x: 0.5, y: 0.42 },
    colors,
    scalar: 1.15,
    ticks: 120,
  });

  setTimeout(() => {
    confetti({ particleCount: 90, angle: 55, spread: 85, origin: { x: 0.05, y: 0.55 }, colors });
    confetti({ particleCount: 90, angle: 125, spread: 85, origin: { x: 0.95, y: 0.55 }, colors });
  }, 180);

  setTimeout(() => {
    confetti({
      particleCount: 120,
      spread: 360,
      ticks: 90,
      gravity: 0.75,
      origin: { x: 0.5, y: 0.35 },
      colors,
      shapes: ['star', 'circle'],
      scalar: 1.05,
    });
  }, 450);

  setTimeout(() => {
    confetti({ particleCount: 80, spread: 90, origin: { x: 0.5, y: 0.65 }, colors, scalar: 0.95 });
  }, 850);

  const end = Date.now() + 2200;
  (function shower() {
    confetti({ particleCount: 4, angle: 60, spread: 60, origin: { x: 0, y: 0.35 }, colors });
    confetti({ particleCount: 4, angle: 120, spread: 60, origin: { x: 1, y: 0.35 }, colors });
    if (Date.now() < end) requestAnimationFrame(shower);
  })();
}

function fireConfetti() {
  fireCelebration();
}

document.getElementById('openEnvelope').addEventListener('click', openInvitation);

function startCountdown() {
  const target = new Date(CONFIG.countdownTarget).getTime();
  function update() {
    const diff = target - Date.now();
    if (diff <= 0) {
      ['days', 'hours', 'minutes', 'seconds'].forEach((id) => (document.getElementById(id).textContent = '00'));
      document.getElementById('countdownMessage').textContent = 'Bappa Has Arrived! 🙏';
      return;
    }
    document.getElementById('days').textContent = String(Math.floor(diff / 86400000)).padStart(2, '0');
    document.getElementById('hours').textContent = String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0');
    document.getElementById('minutes').textContent = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0');
    document.getElementById('seconds').textContent = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');
  }
  update();
  setInterval(update, 1000);
}

function tryPlayMusic() {
  bgMusic.volume = 0.22;
  bgMusic.play().then(() => { musicPlaying = true; musicBtn.classList.remove('muted'); })
    .catch(() => { musicPlaying = false; musicBtn.classList.add('muted'); });
}

musicBtn.addEventListener('click', () => {
  if (musicPlaying) { bgMusic.pause(); musicPlaying = false; musicBtn.classList.add('muted'); }
  else { bgMusic.play().then(() => { musicPlaying = true; musicBtn.classList.remove('muted'); }).catch(() => musicBtn.classList.add('muted')); }
});

function shareWhatsApp() {
  const text = encodeURIComponent(`${CONFIG.shareMessage}\n${window.location.href}`);
  window.open(`https://wa.me/?text=${text}`, '_blank', 'noopener');
}

function shareInvitation() {
  const data = { title: `${CONFIG.heroTitle} ${CONFIG.inviteEventLabel}`, text: CONFIG.shareMessage, url: window.location.href };
  if (navigator.share) navigator.share(data).catch(() => shareWhatsApp());
  else shareWhatsApp();
}

document.getElementById('shareBtn').addEventListener('click', shareInvitation);
document.getElementById('shareWhatsApp').addEventListener('click', shareWhatsApp);

function addToCalendar() {
  const ics = [
    'BEGIN:VCALENDAR', 'VERSION:2.0', 'BEGIN:VEVENT',
    `DTSTART:${CONFIG.calendarStart}`, `DTEND:${CONFIG.calendarEnd}`,
    `SUMMARY:${CONFIG.calendarTitle}`, `LOCATION:${CONFIG.calendarLocation}`,
    `DESCRIPTION:${CONFIG.shareMessage}`, 'END:VEVENT', 'END:VCALENDAR',
  ].join('\r\n');
  const blob = new Blob([ics], { type: 'text/calendar' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'ganesh-utsav.ics';
  a.click();
  URL.revokeObjectURL(a.href);
}

document.getElementById('addMainCalendar').addEventListener('click', addToCalendar);

function createFallingPetals() {
  const types = [
    { src: CONFIG.petalImages.daisy, cls: 'petal-img' },
    { src: CONFIG.petalImages.rose, cls: 'petal-img' },
    { cls: 'petal-emoji', text: '🌺' },
    { cls: 'petal-emoji', text: '🪷' },
    { cls: 'petal-emoji', text: '✨' },
  ];
  const count = window.innerWidth < 640 ? 18 : 30;
  for (let i = 0; i < count; i++) {
    const t = types[i % types.length];
    const el = document.createElement(t.src ? 'img' : 'span');
    el.className = t.cls;
    if (t.src) { el.src = t.src; el.alt = ''; el.style.width = `${14 + Math.random() * 22}px`; }
    else { el.textContent = t.text; el.style.fontSize = `${0.75 + Math.random() * 0.9}rem`; }
    el.style.left = `${Math.random() * 100}%`;
    el.style.animationDuration = `${8 + Math.random() * 14}s`;
    el.style.animationDelay = `${Math.random() * 12}s`;
    petalsLayer.appendChild(el);
  }
}

function createDiyas() {
  if (diyaLayer.children.length) return;
  for (let i = 0; i < 8; i++) {
    const d = document.createElement('span');
    d.className = 'diya-float';
    d.textContent = '🪔';
    d.style.left = `${5 + Math.random() * 90}%`;
    d.style.top = `${10 + Math.random() * 80}%`;
    d.style.animationDuration = `${3 + Math.random() * 4}s`;
    d.style.animationDelay = `${Math.random() * 3}s`;
    diyaLayer.appendChild(d);
  }
}

function startButterflies() {
  if (butterfliesLayer.children.length) return;
  const count = window.innerWidth < 640 ? 2 : 4;
  for (let i = 0; i < count; i++) {
    const b = document.createElement('div');
    b.className = 'butterfly';
    b.style.top = `${10 + Math.random() * 70}%`;
    b.style.animationDuration = `${16 + Math.random() * 14}s`;
    b.style.animationDelay = `${Math.random() * 10}s`;
    b.innerHTML = `<svg viewBox="0 0 64 52" width="32" height="26" aria-hidden="true">
      <ellipse cx="32" cy="26" rx="1.6" ry="11" fill="#8B1538"/>
      <path d="M30 22 C 10 10, 2 22, 6 32 C 10 42, 24 38, 30 30 Z" fill="#D4AF37"/>
      <path d="M34 22 C 54 10, 62 22, 58 32 C 54 42, 40 38, 34 30 Z" fill="#D4AF37"/>
    </svg>`;
    butterfliesLayer.appendChild(b);
  }
}

function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
    { threshold: 0.1, rootMargin: '0px 0px -25px 0px' }
  );
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}

function initSectionNav() {
  const dots = sectionNav.querySelectorAll('.nav-dot');
  const sections = CONFIG.sections.map((s) => document.getElementById(s.id)).filter(Boolean);
  dots.forEach((dot) => {
    dot.addEventListener('click', () => document.getElementById(dot.dataset.target)?.scrollIntoView({ behavior: 'smooth' }));
  });
  const navObserver = new IntersectionObserver(
    (entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) dots.forEach((d) => d.classList.toggle('active', d.dataset.target === entry.target.id));
    }),
    { threshold: 0.35 }
  );
  sections.forEach((s) => navObserver.observe(s));
}

function initGalleryLightbox() {
  document.querySelectorAll('.gallery-item').forEach((item) => {
    item.addEventListener('click', () => {
      document.getElementById('lightboxImg').src = item.dataset.src;
      document.getElementById('lightboxImg').alt = item.dataset.alt;
      lightbox.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });
  });
}

document.getElementById('lightboxClose').addEventListener('click', () => {
  lightbox.classList.add('hidden');
  document.body.style.overflow = '';
});
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) { lightbox.classList.add('hidden'); document.body.style.overflow = ''; }
});

initContent();
createFallingPetals();

/* ===== Smooth Scratch Card ===== */
function initScratchCard() {
  const card = document.getElementById('scratchCard');
  const canvas = document.getElementById('scratchCanvas');
  const overlay = document.getElementById('scratchOverlay');
  const hint = document.getElementById('scratchHint');
  if (!card || !canvas || !overlay) return;

  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  let width = 0;
  let height = 0;
  let dpr = 1;
  let isDrawing = false;
  let lastX = 0;
  let lastY = 0;
  let revealed = false;
  let checkScheduled = false;
  let coverReady = false;

  const BRUSH = 52;
  const REVEAL_THRESHOLD = 0.48;

  function resize() {
    const rect = overlay.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = Math.floor(rect.width);
    height = Math.floor(rect.height);
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (!revealed) drawCover();
  }

  function drawCover() {
    coverReady = false;
    ctx.globalCompositeOperation = 'source-over';
    ctx.clearRect(0, 0, width, height);

    const bg = ctx.createLinearGradient(0, 0, width, height);
    bg.addColorStop(0, '#FFD700');
    bg.addColorStop(0.25, '#F5C842');
    bg.addColorStop(0.5, '#D4AF37');
    bg.addColorStop(0.75, '#FF9933');
    bg.addColorStop(1, '#C9A227');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, width, height);

    ctx.globalAlpha = 0.15;
    for (let i = 0; i < width; i += 12) {
      for (let j = 0; j < height; j += 12) {
        if ((i + j) % 24 === 0) {
          ctx.fillStyle = '#fff';
          ctx.fillRect(i, j, 6, 6);
        }
      }
    }
    ctx.globalAlpha = 1;

    const shine = ctx.createLinearGradient(0, 0, width * 0.6, height);
    shine.addColorStop(0, 'rgba(255,255,255,0.45)');
    shine.addColorStop(0.4, 'rgba(255,255,255,0.08)');
    shine.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = shine;
    ctx.fillRect(0, 0, width, height);

    ctx.strokeStyle = 'rgba(139, 21, 56, 0.25)';
    ctx.lineWidth = 2;
    ctx.setLineDash([8, 6]);
    ctx.strokeRect(14, 14, width - 28, height - 28);
    ctx.setLineDash([]);

    coverReady = true;
  }

  function getPos(e) {
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return { x: clientX - rect.left, y: clientY - rect.top };
  }

  function scratchAt(x, y, size = BRUSH) {
    ctx.globalCompositeOperation = 'destination-out';
    const g = ctx.createRadialGradient(x, y, 0, x, y, size);
    g.addColorStop(0, 'rgba(0,0,0,1)');
    g.addColorStop(0.45, 'rgba(0,0,0,0.85)');
    g.addColorStop(0.75, 'rgba(0,0,0,0.35)');
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalCompositeOperation = 'source-over';
  }

  function scratchLine(x1, y1, x2, y2) {
    const dist = Math.hypot(x2 - x1, y2 - y1);
    const step = 3;
    const steps = Math.max(1, Math.ceil(dist / step));
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      scratchAt(x1 + (x2 - x1) * t, y1 + (y2 - y1) * t);
    }
  }

  function getScratchedRatio() {
    if (!coverReady) return 0;
    const sample = 8;
    const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    let transparent = 0;
    let total = 0;
    for (let y = 0; y < canvas.height; y += sample) {
      for (let x = 0; x < canvas.width; x += sample) {
        const i = (y * canvas.width + x) * 4 + 3;
        if (data[i] === 0) transparent++;
        total++;
      }
    }
    return transparent / total;
  }

  function scheduleCheck() {
    if (checkScheduled || revealed) return;
    checkScheduled = true;
    requestAnimationFrame(() => {
      checkScheduled = false;
      if (getScratchedRatio() >= REVEAL_THRESHOLD) completeReveal();
    });
  }

  function completeReveal() {
    if (revealed) return;
    revealed = true;
    hint.classList.add('is-hidden');
    overlay.classList.add('is-revealing');
    card.classList.add('is-revealed');

    if (typeof confetti === 'function') {
      const rect = card.getBoundingClientRect();
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { x: (rect.left + rect.width / 2) / window.innerWidth, y: (rect.top + rect.height / 2) / window.innerHeight },
        colors: ['#FFD700', '#FF6B00', '#8B1538'],
      });
    }

    setTimeout(() => {
      overlay.classList.add('is-done');
    }, 750);
  }

  function onStart(e) {
    if (revealed) return;
    e.preventDefault();
    isDrawing = true;
    hint.classList.add('is-hidden');
    const { x, y } = getPos(e);
    lastX = x;
    lastY = y;
    scratchAt(x, y);
    scheduleCheck();
  }

  function onMove(e) {
    if (!isDrawing || revealed) return;
    e.preventDefault();
    const { x, y } = getPos(e);
    scratchLine(lastX, lastY, x, y);
    lastX = x;
    lastY = y;
    scheduleCheck();
  }

  function onEnd() {
    isDrawing = false;
  }

  canvas.addEventListener('mousedown', onStart);
  canvas.addEventListener('mousemove', onMove);
  window.addEventListener('mouseup', onEnd);

  canvas.addEventListener('touchstart', onStart, { passive: false });
  canvas.addEventListener('touchmove', onMove, { passive: false });
  canvas.addEventListener('touchend', onEnd);
  canvas.addEventListener('touchcancel', onEnd);

  const ro = new ResizeObserver(() => {
    if (!revealed) resize();
  });
  ro.observe(overlay);

  requestAnimationFrame(resize);
}


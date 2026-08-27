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

const GALLERY_LALBAGH = [
  { src: LALBAGH.rajaClassic, alt: 'Lalbaug Cha Raja — Classic' },
  { src: LALBAGH.rajaClose, alt: 'Lalbaug Cha Raja — Close up' },
  { src: LALBAGH.raja2011, alt: 'Lalbaug Cha Raja 2011' },
  { src: LALBAGH.pandal, alt: 'Lalbaug Cha Raja — Pandal' },
  { src: LALBAGH.ganpatiDays2, alt: 'Lalbaug — Ganpati days' },
  { src: LALBAGH.visarjan, alt: 'Lalbaug Cha Raja — Visarjan' },
  { src: LALBAGH.pundal, alt: 'Lalbaug Cha Raja — Ganesh Pandal' },
  { src: LALBAGH.chaRaja, alt: 'Lalbaug Cha Raja' },
];

/** Real Satpurcha Raja mandal photos — intro, events, gallery */
const SATPURA = {
  goldenThrone1: 'assets/gallery/satpura-golden-throne-1.jpg',
  goldenThrone2: 'assets/gallery/satpura-golden-throne-2.jpg',
  blueShankha: 'assets/gallery/satpura-blue-shankha.jpg',
  greenConch: 'assets/gallery/satpura-green-conch.jpg',
  orangeEightArm: 'assets/gallery/satpura-orange-eight-arm.jpg',
  archerStanding: 'assets/gallery/satpura-archer-standing.jpg',
  archerMiravnuk: 'assets/gallery/satpura-archer-miravnuk.jpg',
};

const GALLERY_SATPURA = [
  { src: SATPURA.goldenThrone1, alt: 'सातपुरचा राजा — Golden throne darshan' },
  { src: SATPURA.goldenThrone2, alt: 'सातपुरचा राजा — Sinhasan darshan' },
  { src: SATPURA.blueShankha, alt: 'सातपुरचा राजा — Shankha darshan' },
  { src: SATPURA.greenConch, alt: 'सातपुरचा राजा — Mandal darshan' },
  { src: SATPURA.orangeEightArm, alt: 'सातपुरचा राजा — Ashtabhuj darshan' },
  { src: SATPURA.archerStanding, alt: 'सातपुरचा राजा — Archer form' },
  { src: SATPURA.archerMiravnuk, alt: 'सातपुरचा राजा — Miravnuk darshan' },
];

const EVENTS_LEGACY_LALBAGH = [
  { day: 'Aagaman', dayDate: '7th September 2026', name: 'Aagaman Sohala', date: 'September 7, 2026', time: '05:00 PM onwards', venue: 'Om Sai Ram Mitra Mandal, Satpur', description: 'Grand arrival procession welcoming Bappa to Satpur — dhol, tasha, lezim, flowers and the collective devotion of the entire mandal.', image: LALBAGH.visarjan, alt: 'Ganesh Aagaman Sohala procession' },
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
];

const MANDAL_VENUE = 'Shree Om Sai Ram Mitra Mandal, Satpur, Nashik';

/** Official schedule from invitation card — कार्यक्रमाची रूपरेषा (2026) */
const EVENTS_INVITATION_CORE = [
  {
    day: 'Aagaman',
    dayDate: 'Monday, 7th September 2026',
    name: 'श्री चा आगमन सोहळा',
    nameEn: 'Aagaman Sohala',
    date: 'Monday, 7 September 2026',
    time: '05:00 PM onwards',
    venue: MANDAL_VENUE,
    description:
      'Grand arrival of Bappa to Satpur — miravnuk, dhol-tasha, flowers and the collective devotion of Om Sai Ram Mitra Mandal. (Invitation: सोमवार, ७ सप्टेंबर २०२६)',
  },
  {
    day: 'Sthapana',
    dayDate: 'Monday, 14th September 2026',
    name: 'श्री ची स्थापना व प्राणप्रतिष्ठा',
    nameEn: 'Sthapana va Pranpratishtha',
    date: 'Monday, 14 September 2026',
    time: '08:00 AM onwards',
    venue: MANDAL_VENUE,
    description:
      'Sacred installation and pranpratishtha of Lord Ganesha with Vedic mantras, kalash puja and the first family aarti. (Invitation: सोमवार, १४ सप्टेंबर २०२६)',
  },
  {
    day: 'Spardha',
    dayDate: 'Sunday, 20th September 2026',
    name: 'चित्रकला / रंगभरण स्पर्धा',
    nameEn: 'Chitrakala / Rangbharana Spardha',
    date: 'Sunday, 20 September 2026',
    time: '10:00 AM onwards',
    venue: MANDAL_VENUE,
    description:
      'Drawing and colouring competition for devotees — creative celebration of Ganesh Utsav. (Invitation: रविवार, २० सप्टेंबर २०२६)',
  },
  {
    day: 'Mahapuja',
    dayDate: 'Wednesday, 23rd September 2026',
    name: 'श्री गणेश याग',
    nameEn: 'Shree Ganesh Yaag',
    date: 'Wednesday, 23 September 2026',
    time: '07:00 AM onwards',
    venue: MANDAL_VENUE,
    description:
      'Holy Ganesh Yaag conducted by Dr. Tapan Shukla Shastri — Vedic fire ritual for blessings and prosperity. (Invitation: बुधवार, २३ सप्टेंबर २०२६)',
  },
  {
    day: 'Mahapuja',
    dayDate: 'Wednesday, 23rd September 2026',
    name: 'श्री सत्यनारायण महापूजा व महाप्रसाद',
    nameEn: 'Shree Satyanarayan Mahapuja va Mahaprasad',
    date: 'Wednesday, 23 September 2026',
    time: '06:00 PM onwards',
    venue: MANDAL_VENUE,
    description:
      'Grand Satyanarayan puja followed by mahaprasad for all devotees and guests. (Invitation: बुधवार, २३ सप्टेंबर २०२६)',
  },
  {
    day: 'Visarjan',
    dayDate: 'Friday, 25th September 2026',
    name: 'श्री ची आरती, विसर्जन तथा निरोप सोहळा',
    nameEn: 'Aarti, Visarjan & Niroap Sohala',
    date: 'Friday, 25 September 2026',
    time: '05:00 PM onwards',
    venue: MANDAL_VENUE,
    description:
      'Final aarti, visarjan procession and emotional farewell — Ganpati Bappa Morya, Pudhchya Varshi Lavkar Ya! (Invitation: शुक्रवार, २५ सप्टेंबर २०२६)',
  },
];

function mapInvitationEvents(images, altPrefix) {
  return EVENTS_INVITATION_CORE.map((ev, i) => ({
    ...ev,
    image: images[i],
    alt: `${altPrefix} — ${ev.nameEn || ev.name}`,
  }));
}

const EVENTS_LALBAGH = mapInvitationEvents(
  [LALBAGH.visarjan, LALBAGH.rajaClassic, LALBAGH.ganpatiDays, LALBAGH.raja2011, LALBAGH.bappa, LALBAGH.visarjan],
  'Satpurcha Raja'
);

const EVENTS_LEGACY_SATPURA = [
  { day: 'Aagaman', dayDate: '7th September 2026', name: 'Aagaman Sohala', date: 'September 7, 2026', time: '05:00 PM onwards', venue: 'Om Sai Ram Mitra Mandal, Satpur', description: 'Grand arrival procession welcoming Bappa to Satpur — dhol, tasha, lezim, flowers and the collective devotion of the entire mandal.', image: SATPURA.archerMiravnuk, alt: 'सातपुरचा राजा — Aagaman Sohala' },
  { day: 'Day One', dayDate: '14th September 2026', name: 'Ganpati Sthapana', date: 'September 14, 2026', time: '08:00 AM onwards', venue: 'Om Sai Ram Mitra Mandal, Satpur', description: 'Sacred installation of Lord Ganesha with Vedic mantras, pranpratishtha, kalash puja and the first family aarti welcoming Bappa home.', image: SATPURA.goldenThrone1, alt: 'सातपुरचा राजा — Sthapana' },
  { day: 'Day One', dayDate: '14th September 2026', name: 'Madhyahna Aarti', date: 'September 14, 2026', time: '12:00 PM', venue: 'Om Sai Ram Mitra Mandal, Satpur', description: 'Midday aarti with camphor, flowers and devotional hymns — the heart of daily worship during the Utsav.', image: SATPURA.goldenThrone2, alt: 'सातपुरचा राजा — Madhyahna Aarti' },
  { day: 'Day One', dayDate: '14th September 2026', name: 'Miravnuk', date: 'September 14, 2026', time: '05:00 PM onwards', venue: 'Om Sai Ram Mitra Mandal to Main Road, Satpur', description: "Traditional Miravnuk procession with lezim, dhol, tasha and folk dance — Bappa's grand welcome parade!", image: SATPURA.archerStanding, alt: 'सातपुरचा राजा — Miravnuk' },
  { day: 'Day One', dayDate: '14th September 2026', name: 'Bhajan Sandhya', date: 'September 14, 2026', time: '07:00 PM onwards', venue: 'Om Sai Ram Mitra Mandal, Satpur', description: 'Evenings filled with soulful bhajans, kirtan and devotional singing under diyas and festoon lights.', image: SATPURA.greenConch, alt: 'सातपुरचा राजा — Bhajan Sandhya' },
  { day: 'Day Two', dayDate: '15th September 2026', name: 'Dhol Tasha Pathak', date: 'September 15, 2026', time: '06:00 PM onwards', venue: 'Om Sai Ram Mitra Mandal, Satpur', description: 'Thunderous dhol-tasha performance — rhythm, energy and pure Maharashtrian festive spirit!', image: SATPURA.archerMiravnuk, alt: 'सातपुरचा राजा — Dhol Tasha Pathak' },
  { day: 'Day Two', dayDate: '15th September 2026', name: 'Lezim & Folk Dance', date: 'September 15, 2026', time: '08:00 PM onwards', venue: 'Om Sai Ram Mitra Mandal, Satpur', description: "Vibrant lezim, lavani and folk dance celebrating Maharashtra's rich cultural heritage.", image: SATPURA.orangeEightArm, alt: 'सातपुरचा राजा — Lezim & Folk Dance' },
  { day: 'Day Three', dayDate: '16th September 2026', name: 'Atharvashirsha Paath', date: 'September 16, 2026', time: '07:30 AM', venue: 'Om Sai Ram Mitra Mandal, Satpur', description: 'Morning recitation of Ganesh Atharvashirsha — a sacred Vedic hymn for wisdom and prosperity.', image: SATPURA.blueShankha, alt: 'सातपुरचा राजा — Atharvashirsha Paath' },
  { day: 'Day Three', dayDate: '16th September 2026', name: 'Haldi-Kumkum', date: 'September 16, 2026', time: '04:00 PM onwards', venue: 'Om Sai Ram Mitra Mandal, Satpur', description: 'Traditional haldi-kumkum for women devotees — suhasini puja, songs and celebration.', image: SATPURA.greenConch, alt: 'सातपुरचा राजा — Haldi-Kumkum' },
  { day: 'Daily', dayDate: 'During Utsav', name: 'Mahaprasad & Modak', date: 'Daily during Utsav', time: '01:00 PM & 08:00 PM', venue: 'Om Sai Ram Mitra Mandal, Satpur', description: 'Blessed prasad and freshly prepared ukdiche modak served with love to all devotees and guests.', image: SATPURA.goldenThrone2, alt: 'सातपुरचा राजा — Mahaprasad' },
  { day: 'Visarjan', dayDate: '19th September 2026', name: 'Visarjan', date: 'September 19, 2026', time: '06:00 PM onwards', venue: 'Mula-Mutha River Ghat, Pune', description: 'Emotional farewell procession — Ganpati Bappa Morya, Pudhchya Varshi Lavkar Ya!', image: SATPURA.archerStanding, alt: 'सातपुरचा राजा — Visarjan' },
];

const EVENTS_SATPURA = mapInvitationEvents(
  [
    SATPURA.archerMiravnuk,
    SATPURA.goldenThrone1,
    SATPURA.orangeEightArm,
    SATPURA.blueShankha,
    SATPURA.goldenThrone2,
    SATPURA.archerStanding,
  ],
  'सातपुरचा राजा'
);

/** Showcase-only images — not used elsewhere on the site */
const AAGAMAN_SHOWCASE = {
  agman: wiki('Ganesh Agman.jpg'),
  miravnuk: wiki('Anant Chaturdashi.jpg'),
  dholTasha: wiki('Ganesh Chaturthi Festival (12).jpg'),
  festival: wiki('Ganesh Chaturthi Festival (100).jpg'),
  bappa: 'assets/satpur-cha-raja.png',
};

/**
 * GANESH UTSAV INVITATION — Config
 *
 * ═══ UNDO / REVERT (sirf ye line badlo — poori site undo mat karo) ═══
 * eventsLayout: 'classic'  → side-by-side event cards (current)
 * eventsLayout: 'showcase' → Swapnil-Ritu style tall full-bleed cards
 * eventsLayout: 'stack'    → alternate text-only stack cards (legacy)
 * eventsStackScroll: false → normal classic scroll (current)
 * eventsStackScroll: true  → pinned stack scroll on classic cards (same HTML)
 * eventsStackBg: 'assets/roopa-hero-desktop.jpg' → pinned bg when stack scroll on
 * eventsAnimations: true   → GSAP scroll animations (set false to disable)
 * aagamanSectionMode: 'route' → miravnuk route section · 'partners' = sponsor cards
 * aagamanRouteLayout: 'showcase' → horizontal location scroll (current, no map)
 * aagamanRouteLayout: 'map'       → old scroll map (undo only — needs map HTML in index.html)
 * aagamanRouteMap: true     → scroll route animation (when layout is 'map')
 * aagamanRouteMapStyle: 'schematic' → point map only · 'real' = photo/satellite map
 * aagamanRouteCamera: false   → fixed map + path draw (schematic default, no glitch)
 * aagamanRouteCamera: true    → zoom/pan follow marker (real map only)
 * gallerySource: 'satpura'    → real Satpurcha Raja photos — intro, events, gallery
 * gallerySource: 'lalbaug'    → Wikimedia Lalbaug placeholder images
 * marathiJodaksharFix: true  → Tiro Devanagari + conjunct-safe typography (current)
 * marathiJodaksharFix: false → legacy AMS Aakash / letter-spacing (jodakshar may break)
 * aagamanShowAttractions: true  → Vishesh Aakarshan strip under route (current)
 * aagamanShowAttractions: false → route stops only
 * aagamanAttractionIcons: 'neumorphic' → soft white circle + vector SVG icons (current)
 * aagamanAttractionIcons: 'photo'      → partner logo photos in circles
 * eventsSchedule: 'invitation' → official card schedule — कार्यक्रमाची रूपरेषा (current)
 * eventsSchedule: 'legacy'     → previous multi-day program (Miravnuk, Bhajan, etc.)
 * aagamanShowInstagram: true  → Instagram profile link in route section (current)
 * aagamanShowInstagram: false → hide Instagram link
 * ═══════════════════════════════════════════════════════════════════════
 */
const CONFIG = {
  orgName: 'ओं साई राम मित्र मंडळ',
  inviteEventLabel: 'Invitation',
  heroTitle: 'सातपुरचा राजा',
  heroInviteLead: 'We cordially invite you to join us in celebrating the divine arrival of',
  heroGaneshIdol: 'assets/ganesh-idol.png',
  familyName: 'ॐ साई राम मित्र मंडळ — आपले स्वागत करीत आहे.',
  mainDate: '14th September 2026',
  heroTagline: 'Because welcoming Bappa home requires twice the devotion — and you!',
  countdownTarget: '2026-09-07T17:00:00',
  countdownMessage: 'Counting Down to Bappa\'s Arrival',
  countdownArrivedMessage: 'Aagaman Sohala Has Begun! 🙏',
  utsavCountdownTarget: '2026-09-14T08:00:00',
  utsavCountdownMessage: 'Awaiting Your Noble Presence',
  utsavCountdownArrivedMessage: 'Ganesh Utsav Has Begun! 🙏',

  aagaman: {
    label: 'Grand Arrival Celebration',
    title: 'आगमन सोहळा',
    titleEn: 'Aagaman Sohala',
    subtitle: 'Join us as Bappa arrives in Satpur — dhol, tasha, lezim & pure devotion',
    backgroundImageMobile: 'assets/aagaman-bg-mobile.jpg',
    backgroundImageDesktop: 'assets/aagaman-bg-desktop.jpg',
    dateDisplay: '7th September 2026',
    popupDay: '7',
    popupMonth: 'SEPT',
    popupYear: '2026',
    dayName: 'Monday',
    time: '5:00 PM',
    scratchKicker: 'Aagaman Sohala',
    scratchTitle: 'Monday · 5:00 PM',
    scratchLabel: '✦ Aagaman Sohala ✦',
    hintLabel: 'Aagaman Sohala',
    verse: '॥ गणराया येई घरी आमच्या दारी ॥',
    description:
      'The sacred Aagaman Sohala marks Bappa\'s grand welcome to Satpur — a vibrant procession with dhol-tasha, flowers, aarti and the collective joy of the entire mandal.',
    highlights: ['5:00 PM onwards', 'Dhol · Tasha · Miravnuk'],
    route: {
      label: 'Miravnuk Route',
      title: 'आगमन मिरवणूक',
      titleEn: 'Aagaman Miravnuk Route',
      subtitle: 'Five sacred stops on Bappa\'s miravnuk — one route through Satpur',
      hint: '',
      googleMapsUrl: 'https://maps.app.goo.gl/RS6Uuq6bHGiZwdTp8?g_st=aw',
      mapStyle: 'schematic',
      mapViewBox: '0 0 900 700',
      scrollHeight: '220vh',
      attractions: {
        label: 'Vishesh Aakarshan',
        title: 'विशेष आकर्षण',
        titleEn: 'Special Attractions',
        subtitle: 'Sound, pathak & festive teams powering Bappa\'s miravnuk',
        items: [
          {
            id: 'sjj-sound',
            category: 'Sound',
            shortName: 'SJJ Sound',
            name: 'SJJ Sound',
            iconKey: 'sound',
            image: 'assets/partners/sjj-sound.png',
            imageAlt: 'SJJ Sound — PA and sound system',
            tag: 'Sound · PA',
          },
          {
            id: 'mangala-banjo',
            category: 'Pathak',
            shortName: 'Mangala Devi Banjo Party',
            name: 'Mangala Devi Banjo Party',
            iconKey: 'banjo',
            image: wiki('Ganesh Chaturthi Festival (12).jpg', 320),
            imageAlt: 'Mangala Devi Banjo Party — lezim and banjo pathak',
            tag: 'Banjo · Pathak',
          },
          {
            id: 'malhar-gajar',
            category: 'Pathak',
            shortName: 'Malhar Gajar',
            name: 'Malhar Gajar Dhol Tasha Pathak',
            iconKey: 'dhol',
            image: 'assets/partners/malhar-gajar.jpg',
            imageAlt: 'Malhar Gajar Dhol Tasha Pathak',
            tag: 'Dhol · Tasha',
          },
        ],
      },
      stops: [
        {
          id: 'sai-baba-temple',
          step: '01',
          tag: 'Start',
          shortName: 'Sai Mandir',
          name: 'Shri Sai Baba Temple',
          area: 'Satpur, Nashik',
          note: 'Miravnuk begins at Sai Baba Mandir — puja, gathering & the first beats of dhol-tasha.',
          icon: '🛕',
          lat: 19.991484,
          lng: 73.7206575,
        },
        {
          id: 'sai-circle',
          step: '02',
          tag: 'Stop',
          shortName: 'Sai Circle',
          name: 'Sai Circle',
          area: 'Satpur, Nashik',
          note: 'Procession flows through Sai Circle — flowers, cheers & pathak rhythms fill the street.',
          icon: '⭕',
          lat: 19.9906708,
          lng: 73.7249769,
        },
        {
          id: 'ambedkar-market',
          step: '03',
          tag: 'Stop',
          shortName: 'Ambedkar Market',
          name: 'Ambedkar Market',
          area: 'Satpur Colony, Nashik',
          note: 'Market chowk halts — lezim, tasha & devotees welcome Bappa with pure Satpur energy.',
          icon: '🏪',
          lat: 19.98945,
          lng: 73.7241,
        },
        {
          id: 'kamgar-bhavan',
          step: '04',
          tag: 'Stop',
          shortName: 'Kamgar Bhavan',
          name: 'Maharashtra Kamgar Kalyan Bhavan',
          area: 'Satpur, Nashik',
          note: 'Community welcome — aarti, slogans & the mandal\'s united festive spirit.',
          icon: '🏛️',
          lat: 19.9915639,
          lng: 73.7241874,
        },
        {
          id: 'satpur-cha-raja',
          step: '05',
          tag: 'Destination',
          shortName: 'Satpurcha Raja',
          name: 'Satpur Cha Raja — Om Sai Ram Mitra Mandal',
          area: 'Satpur, Nashik',
          address: 'Satpur Cha Raja, Satpur, Nashik, Maharashtra 422007',
          note: 'Bappa\'s grand homecoming — diyas, aarti & open hearts await at the mandal.',
          icon: '🪔',
          lat: 19.9905579,
          lng: 73.7224986,
          isEnd: true,
        },
      ],
    },
    partners: {
      label: 'With Gratitude',
      title: 'आगमन सहभागी',
      titleEn: 'Aagaman Partners & Sponsors',
      subtitle: 'Heartfelt thanks to every team joining Bappa\'s grand welcome to Satpur',
      groups: [
        {
          role: 'Sound',
          tag: 'Audio & PA',
          image: 'assets/partners/sjj-sound.png',
          imageAlt: 'SJJ Sound — professional PA and sound system',
          location: 'Satpur, Nashik',
          description:
            'Complete sound & PA setup for Aagaman Sohala — amplifiers, speakers and mics so every aarti, announcement and procession moment is heard clearly across Satpur.',
          names: [{ name: 'SJJ Sound', detail: 'Sound · PA · Mandal programs' }],
        },
        {
          role: 'Miravnuk',
          tag: 'Dhol · Tasha · Pathak',
          image: 'assets/partners/malhar-gajar.jpg',
          imageAlt: 'Malhar Gajar Dhol Tasha Pathak — Satpur, Nashik',
          location: 'Satpur, Nashik',
          description:
            'Renowned Nashik dhol-tasha pathak from Satpur — thunderous rhythms, synchronized beats and pure Maharashtrian festive energy for Bappa\'s grand Miravnuk welcome.',
          names: [{ name: 'Malhar Gajar Dhol Tasha Pathak', detail: 'Miravnuk · Procession · Dhol-Tasha' }],
        },
        {
          role: 'Event Decorations',
          tag: 'Decor & Setup',
          image: 'assets/partners/event-decor-nashik.jpg',
          imageAlt: 'RB Event — stage and mandal decoration',
          location: 'Satpur, Nashik',
          description:
            'Festive mandal décor, stage backdrops, lighting and thematic setup — transforming the Aagaman venue into a warm, royal welcome for Ganaraya.',
          names: [{ name: 'RB Event', detail: 'Mandal décor · Stage · Lighting' }],
        },
        {
          role: 'Event Decorations',
          tag: 'Floral · Theme · Setup',
          image: LALBAGH.pundal,
          imageAlt: 'RC Event — Ganesh utsav pandal decoration',
          location: 'Nashik',
          description:
            'Pandal styling, floral accents and complete event setup — crafting a beautiful, devotion-filled atmosphere for Bappa\'s arrival celebration.',
          names: [{ name: 'RC Event', detail: 'Pandal · Floral · Event setup' }],
        },
      ],
    },
  },

  utsavScratch: {
    dateDisplay: '14th September 2026',
    scratchKicker: 'Save the Date',
    scratchTitle: "Counting Down to Bappa's Arrival",
    countdownMessage: 'Awaiting Your Noble Presence',
  },
  calendarTitle: 'Ganesh Utsav — Om Sai Ram Mitra Mandal',
  calendarStart: '20260914T080000',
  calendarEnd: '20260925T210000',
  calendarLocation: 'Satpur Cha Raja, Satpur, Nashik, Maharashtra',
  familyText:
    '<em>Om Sai Ram Mitra Mandal</em> warmly welcomes you to join us in welcoming <em>Lord Ganesha</em> into our hearts and community.<br><br>From Sthapana to Visarjan — every aarti, every Miravnuk, every modak — is shared with love. Your blessings complete our celebration.',
  familySection: {
    yearBadge: 'वर्ष १२ वे · सातपुरचा राजा · Satpur, Nashik',
    taglineMr: 'तोच रубाब... तेच ठिकाण...',
    taglineEn: 'Same devotion, same place — welcoming Bappa home since years with faith & joy',
    textMr:
      'श्री ओं साई राम मित्र मंडळ, सातपूर, नाशिक तर्फे आपले मनःपूर्वक स्वागत. स्थापनेपासून विसर्जनापर्यंत — प्रत्येक आरती, मिरवणूक, महाप्रसाद आणि भक्तीचा क्षण आपल्या उपस्थितीने अधिक पावन होतो. आपले आशीर्वाद हा आमच्या उत्सवाचा सर्वात मोठा वैभव.',
    officeTitle: 'Mandal Padadhikari · 2026–27',
    officeBearers: [
      { role: 'Sansthapak / Adhyaksha', name: 'Sagar (Bhau) Nagare' },
      { role: 'Adhyaksha', name: 'Mayur Bairagi' },
      { role: 'Upadhyaksha', name: 'Nikhil Hire' },
      { role: 'Karyadhyaksha', name: 'Aditya Kadam' },
      { role: 'Khajindar', name: 'Jayesh Marathe' },
      { role: 'Sarchitnis', name: 'Amol Gopal' },
    ],
  },
  familyNames: '— ओं साई राम मित्र मंडळ —',
  closingMessageMr:
    'आपली उपस्थिती आणि आशीर्वाद आमचा गणेश उत्सव अधिक दिव्य बनवतील. आम्ही आपले उत्सुकतेने स्वागत करीत आहोत!',
  closingMessage: 'Your presence and blessings will make our Ganesh Utsav truly divine.<br>We eagerly await you!',
  closingSign: '— प्रेमाने, ओं साई राम मित्र मंडळ —',
  hashtag: '#GanpatiBappaMorya #SatpurchaRaja',
  shareMessage: "You're invited to Om Sai Ram Mitra Mandal's Ganesh Utsav — Satpurcha Raja! 🙏 Ganpati Bappa Morya!",
  musicYoutubeId: '605C7BkrKTo',
  musicTitle: 'SATPURCHA RAJA ALA',

  // Events layout: 'stack' | 'classic' | 'showcase'
  eventsLayout: 'classic',
  eventsSchedule: 'invitation',
  eventsStackScroll: false,
  eventsStackBg: 'assets/roopa-hero-desktop.jpg',
  eventsAnimations: true,
  aagamanSectionMode: 'route',
  aagamanRouteLayout: 'showcase',
  aagamanRouteMap: true,
  aagamanRouteMapStyle: 'schematic',
  aagamanRouteCamera: false,
  gallerySource: 'satpura',
  marathiJodaksharFix: true,
  aagamanShowAttractions: true,
  aagamanAttractionIcons: 'neumorphic',
  aagamanShowInstagram: true,
  instagramUrl: 'https://www.instagram.com/satpurcharaja',
  instagramHandle: '@satpurcharaja',
  instagramPhoto: null,
  envelopeCardArt: 'assets/ganesh-invitation-card.png',

  sealImage:
    'https://scontent.cdninstagram.com/v/t51.82787-19/518458308_17985160766837067_5474200944853567070_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=107&ccb=7-5&_nc_sid=f7ccc5&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=Y5y_Ml8EORgQ7kNvwEJmNDI&_nc_oc=Adre_RcTjraWYN3ZhRMsgKiA9uk14HZUcDAmi4Ld0NWNr-1p7EFrAjr5aXC3B6pbTx4fGMKHbeGcTPTVfSyq9KuB&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_gid=JKAJfR7zzD9-dYL62zDbSw&_nc_ss=7b689&oh=00_AQFTFSHjPMWhwa4ljkZjqlNd5-rx4NuHMYN9MiodcP6d0g&oe=6A735DD3',
  introImage: LALBAGH.rajaClose,
  closingGanesh: LALBAGH.bappa,
  introVerse: '॥ गणपती बाप्पा मोरया ॥',
  introTextLead:
    'दर वर्षी आमचे घर भक्तीच्या मंदिरात रूपांतरित होते, जेव्हा आम्ही विघ्नहर्ता व बुद्धीचे दाते <em>श्री गणेशराया</em> यांचे हार्दिक स्वागत करतो.',
  introText:
    'पवित्र स्थापनेपासून भावपूर्ण विसर्जनापर्यंत — आरती, भजन, मिरवणूक, महाप्रसाद आणि कुटुंब-मित्रांच्या उबनेने प्रत्येक क्षण उत्सवाने भरून राहतो.',

  petalImages: {
    daisy: 'https://swapnil-ritu.invitationmedia.in/assets/falling-daisy-DWyrh5i3.png',
    rose: 'https://swapnil-ritu.invitationmedia.in/assets/falling-rose-petal-CzrX2ZBd.png',
  },

  sections: [
    { id: 'section-hero', label: 'Home' },
    { id: 'section-aagaman', label: 'Aagaman' },
    { id: 'section-aagaman-route', label: 'Route' },
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

  events: null,

  gallery: null,

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
      note: 'Final Visarjan procession on 25th September 2026',
    },
  ],
};

const envelopeScreen = document.getElementById('envelopeScreen');
const invitationMain = document.getElementById('invitationMain');
const envelopeWrap = document.getElementById('envelopeWrap');
const musicBtn = document.getElementById('musicBtn');
const musicToggleLabel = document.getElementById('musicToggleLabel');
const petalsLayer = document.getElementById('petalsLayer');
const butterfliesLayer = document.getElementById('butterfliesLayer');
const diyaLayer = document.getElementById('diyaLayer');
const fabGroup = document.getElementById('fabGroup');
const sectionNav = document.getElementById('sectionNav');
const lightbox = document.getElementById('lightbox');

let isOpened = false;
let musicPlaying = false;
let ytPlayer = null;
let ytApiReady = false;

function loadYouTubeMusic() {
  if (!CONFIG.musicYoutubeId) return;
  if (window.YT && window.YT.Player) {
    createYouTubePlayer();
    return;
  }
  const prevReady = window.onYouTubeIframeAPIReady;
  window.onYouTubeIframeAPIReady = () => {
    if (typeof prevReady === 'function') prevReady();
    createYouTubePlayer();
  };
  if (!document.getElementById('youtube-iframe-api')) {
    const tag = document.createElement('script');
    tag.id = 'youtube-iframe-api';
    tag.src = 'https://www.youtube.com/iframe_api';
    document.head.appendChild(tag);
  }
}

function createYouTubePlayer() {
  if (ytPlayer || !CONFIG.musicYoutubeId) return;
  const host = document.getElementById('youtubeAudioHost');
  if (!host) return;

  ytPlayer = new YT.Player('youtubeAudioHost', {
    height: '0',
    width: '0',
    videoId: CONFIG.musicYoutubeId,
    playerVars: {
      autoplay: 0,
      controls: 0,
      disablekb: 1,
      fs: 0,
      loop: 1,
      playlist: CONFIG.musicYoutubeId,
      modestbranding: 1,
      rel: 0,
      playsinline: 1,
    },
    events: {
      onReady: (event) => {
        ytApiReady = true;
        event.target.setVolume(35);
        if (isOpened) tryPlayMusic();
      },
      onStateChange: (event) => {
        if (event.data === YT.PlayerState.ENDED) event.target.playVideo();
      },
    },
  });
}

function playBgMusic() {
  if (!ytApiReady || !ytPlayer) return;
  ytPlayer.playVideo();
  musicPlaying = true;
  updateMusicUI();
}

function pauseBgMusic() {
  if (ytPlayer && ytApiReady) ytPlayer.pauseVideo();
  musicPlaying = false;
  updateMusicUI();
}

function initContent() {
  document.documentElement.classList.toggle(
    'marathi-jodakshar-fix',
    CONFIG.marathiJodaksharFix !== false
  );
  const cardVisual = document.getElementById('roopaCardVisual');
  const bgFill = document.getElementById('roopaBgFill');
  const cardArt = CONFIG.envelopeCardArt || 'assets/ganesh-invitation-card.png';
  if (cardVisual) cardVisual.src = cardArt;
  if (bgFill) bgFill.src = cardArt;
  document.getElementById('inviteEventMarathi').textContent = CONFIG.heroTitle;
  document.getElementById('inviteEventLabel').textContent = CONFIG.inviteEventLabel;
  document.getElementById('inviteHashtag').textContent = CONFIG.hashtag;
  document.getElementById('inviteDate').textContent = CONFIG.mainDate;
  const heroIdol = document.getElementById('heroGaneshIdol');
  if (heroIdol) heroIdol.src = CONFIG.heroGaneshIdol || 'assets/ganesh-idol.png';
  document.getElementById('heroInviteLead').textContent = CONFIG.heroInviteLead;
  document.getElementById('introImage').src = getIntroImage();
  document.getElementById('introImage').alt = usesSatpuraImages()
    ? 'सातपुरचा राजा — Mandal darshan'
    : 'Lalbaug Cha Raja';
  document.getElementById('introVerse').textContent = CONFIG.introVerse;
  document.getElementById('introParaLead').innerHTML = CONFIG.introTextLead;
  document.getElementById('introPara').textContent = CONFIG.introText;
  document.getElementById('closingGaneshImg').src = getClosingGanesh();
  document.getElementById('heroTitle').textContent = CONFIG.heroTitle;
  document.getElementById('introTitle').textContent = CONFIG.heroTitle;
  document.getElementById('heroFamily').textContent = CONFIG.familyName;
  document.getElementById('heroDate').textContent = CONFIG.mainDate;
  document.getElementById('heroTagline').textContent = CONFIG.heroTagline;
  const heroHashtag = document.getElementById('heroHashtag');
  if (heroHashtag) heroHashtag.textContent = CONFIG.hashtag;
  const ag = CONFIG.aagaman;
  const utsav = CONFIG.utsavScratch;
  const aagamanBgMobile = document.getElementById('aagamanBgMobile');
  const aagamanBgDesktop = document.getElementById('aagamanBgDesktop');
  if (aagamanBgMobile) {
    aagamanBgMobile.src = ag.backgroundImageMobile;
    aagamanBgMobile.alt = 'Aagaman Sohala — decorative frame';
  }
  if (aagamanBgDesktop) {
    aagamanBgDesktop.src = ag.backgroundImageDesktop;
    aagamanBgDesktop.alt = 'Aagaman Sohala — decorative frame';
  }
  const aagamanLabel = document.getElementById('aagamanLabel');
  if (aagamanLabel) aagamanLabel.textContent = ag.label;
  const aagamanTitle = document.getElementById('aagamanTitle');
  if (aagamanTitle) aagamanTitle.textContent = ag.title;
  const aagamanTitleEn = document.getElementById('aagamanTitleEn');
  if (aagamanTitleEn) aagamanTitleEn.textContent = ag.titleEn;
  const aagamanSubtitle = document.getElementById('aagamanSubtitle');
  if (aagamanSubtitle) aagamanSubtitle.textContent = ag.subtitle;
  const aagamanVerse = document.getElementById('aagamanVerse');
  if (aagamanVerse) aagamanVerse.textContent = ag.verse;
  const aagamanDesc = document.getElementById('aagamanDesc');
  if (aagamanDesc) aagamanDesc.textContent = ag.description;
  const aagamanDate = document.getElementById('aagamanDate');
  if (aagamanDate) aagamanDate.textContent = `${ag.dayName}, ${ag.dateDisplay}`;
  const aagamanHighlights = document.getElementById('aagamanHighlights');
  if (aagamanHighlights) {
    aagamanHighlights.innerHTML = ag.highlights
      .map((item) => `<li><span class="aagaman-highlight-icon">✦</span>${item}</li>`)
      .join('');
  }
  if (CONFIG.aagamanSectionMode === 'partners') renderAagamanPartners();
  else renderAagamanRoute();

  const setText = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };
  setText('countdownDateBadge', utsav.dateDisplay);
  setText('aagamanPopupDay', ag.popupDay || '7');
  setText('aagamanPopupMonth', ag.popupMonth || 'SEPT');
  setText('aagamanPopupYear', ag.popupYear || '2026');
  setText('aagamanPopupMarathi', ag.title || 'आगमन सोहळा');
  setText('aagamanPopupKicker', ag.titleEn || 'Aagaman Sohala');
  setText('aagamanPopupSub', `${ag.dayName} · ${ag.time}`);
  setText('aagamanPopupVerse', ag.verse || '');
  setText('scratchCardKicker', utsav.scratchKicker);
  setText('scratchInnerTitle', utsav.scratchTitle);
  setText('countdownMessage', utsav.countdownMessage);
  document.getElementById('familyText').innerHTML = CONFIG.familyText;
  renderFamilySection();
  renderClosingSection();
  document.getElementById('footerHashtag').textContent = CONFIG.hashtag;
  document.getElementById('footerYear').textContent = new Date().getFullYear();

  updateMusicUI();

  const eventsSection = document.getElementById('section-events');
  if (eventsSection) {
    eventsSection.classList.toggle('events-section--showcase', CONFIG.eventsLayout === 'showcase');
    eventsSection.classList.toggle('events-section--classic', CONFIG.eventsLayout === 'classic');
    eventsSection.classList.toggle('events-section--stack', CONFIG.eventsLayout === 'stack');
    eventsSection.classList.toggle(
      'events-section--classic-stack',
      CONFIG.eventsLayout === 'classic' && CONFIG.eventsStackScroll
    );
  }

  renderEvents();
  renderGallery();
  renderVenues();
  renderDetails();
  renderSectionNav();
}

function getShowcaseMeta(ev) {
  const key = ev.nameEn || ev.name;
  const map = {
    'Aagaman Sohala': { hashtag: '#BappaAagman', join: 'Please join us for the grand arrival', decor: '🥁 🪔 🥁 🪔' },
    'Sthapana va Pranpratishtha': { hashtag: '#BappaSthapana', join: 'Please join us for a sacred morning', decor: '🪔 🪷 🪔 🪷' },
    'Chitrakala / Rangbharana Spardha': { hashtag: '#ChitrakalaSpardha', join: 'Please join us for a creative morning', decor: '🎨 🪷 🎨 🪷' },
    'Shree Ganesh Yaag': { hashtag: '#GaneshYaag', join: 'Please join us for a sacred yaag', decor: '🔥 📿 🔥 📿' },
    'Shree Satyanarayan Mahapuja va Mahaprasad': { hashtag: '#Mahaprasad', join: 'Please join us for evening puja & prasad', decor: '🍬 🪔 🍬 🪔' },
    'Aarti, Visarjan & Niroap Sohala': { hashtag: '#PudhchyaVarshi', join: 'Please join us for the farewell evening', decor: '🌊 🪷 🌊 🪷' },
    'Ganpati Sthapana': { hashtag: '#BappaAagman', join: 'Please join us for a sacred morning', decor: '🪔 🪷 🪔 🪷' },
    'Madhyahna Aarti': { hashtag: '#GanpatiBappaMorya', join: 'Please join us for a noon aarti', decor: '🪷 ✨ 🪷 ✨' },
    Miravnuk: { hashtag: '#MiravnukMoments', join: 'Please join us for an afternoon procession', decor: '🏵️ 🥁 🏵️ 🥁' },
    'Bhajan Sandhya': { hashtag: '#BhajanSandhya', join: 'Please join us for an evening', decor: '🎵 🪔 🎵 🪔' },
    'Dhol Tasha Pathak': { hashtag: '#DholTasha', join: 'Please join us for an evening', decor: '🥁 ✨ 🥁 ✨' },
    'Lezim & Folk Dance': { hashtag: '#MaharashtraCulture', join: 'Please join us for an evening', decor: '💃 🪷 💃 🪷' },
    'Atharvashirsha Paath': { hashtag: '#Atharvashirsha', join: 'Please join us for a sacred morning', decor: '📿 🪔 📿 🪔' },
    'Haldi-Kumkum': { hashtag: '#SuhasiniPuja', join: 'Please join us for an afternoon', decor: '🌸 🪷 🌸 🪷' },
    'Mahaprasad & Modak': { hashtag: '#Mahaprasad', join: 'Please join us daily', decor: '🍬 🪔 🍬 🪔' },
    Visarjan: { hashtag: '#PudhchyaVarshi', join: 'Please join us for a farewell evening', decor: '🌊 🪷 🌊 🪷' },
  };
  return map[key] || { hashtag: '#SatpurchaRaja', join: 'Please join us in celebration', decor: '✨ 🪷 ✨ 🪷' };
}

function renderEvents() {
  if (CONFIG.eventsLayout === 'showcase') renderEventsShowcase();
  else if (CONFIG.eventsLayout === 'stack') renderEventsStack();
  else renderEventsClassic();
}

const EVENT_STACK_THEMES = [
  { bg: '#F3EEFC', accent: '#4B1A9A' },
  { bg: '#FDF1ED', accent: '#E54C1E' },
  { bg: '#ECF6FE', accent: '#033968' },
  { bg: '#FFF8E8', accent: '#8B1538' },
  { bg: '#FCE7F3', accent: '#701A3A' },
  { bg: '#FFEDD5', accent: '#92400E' },
];

function renderEventsStack() {
  const bg = CONFIG.eventsStackBg || 'assets/roopa-hero-desktop.jpg';
  document.getElementById('eventsList').innerHTML = `
    <div class="events-stack-scene">
      <div class="events-stack-bg" aria-hidden="true">
        <img class="events-stack-bg-image" src="${bg}" alt="" loading="lazy" />
        <div class="events-stack-bg-overlay"></div>
      </div>
      <div class="events-stack-cards">
        ${getEvents()
          .map((ev, i) => {
            const theme = EVENT_STACK_THEMES[i % EVENT_STACK_THEMES.length];
            const meta = getShowcaseMeta(ev);
            return `
        <div class="event-stack-card-wrap" style="--stack-index: ${i}; --card-bg: ${theme.bg}; --card-accent: ${theme.accent}">
          <article class="event-stack-card">
            <div class="event-stack-card-head">
              <span class="event-stack-index">${String(i + 1).padStart(2, '0')}</span>
              <img class="event-stack-thumb" src="${ev.image}" alt="${ev.alt}" loading="lazy" />
            </div>
            <p class="event-stack-tag">${meta.hashtag}</p>
            <p class="event-stack-kicker">${meta.join}</p>
            <h3 class="event-stack-title">${ev.name}</h3>
            <p class="event-stack-desc">${ev.description}</p>
            <p class="event-stack-meta">${ev.dayDate}<span>·</span>${ev.time}</p>
            <p class="event-stack-venue">${ev.venue}</p>
          </article>
        </div>`;
          })
          .join('')}
      </div>
    </div>`;
}

function renderEventsShowcase() {
  document.getElementById('eventsList').innerHTML = getEvents()
    .map(
      (ev, i) => {
        const meta = getShowcaseMeta(ev);
        return `
      <article class="event-showcase reveal" style="--delay:${i * 0.05}s">
        <div class="event-showcase-media">
          <img class="event-showcase-image" src="${ev.image}" alt="${ev.alt}" loading="lazy" />
          <div class="event-showcase-media-overlay"></div>
        </div>
        <div class="event-showcase-deco" aria-hidden="true">${meta.decor}</div>
        <div class="event-showcase-body">
          <p class="event-showcase-tag">${meta.hashtag}</p>
          <p class="event-showcase-join">${meta.join}</p>
          <p class="event-showcase-desc">${ev.description}</p>
          <h3 class="event-showcase-name">${ev.name.toUpperCase()}</h3>
          <p class="event-showcase-when">${ev.dayDate}<span class="event-showcase-sep">|</span>${ev.time}</p>
          <p class="event-showcase-venue">${ev.venue}</p>
        </div>
      </article>`;
      }
    )
    .join('');
}

function injectClassicStackBg() {
  const list = document.getElementById('eventsList');
  if (!list || list.querySelector('.events-classic-stack-bg')) return;
  const bg = CONFIG.eventsStackBg || 'assets/roopa-hero-desktop.jpg';
  list.insertAdjacentHTML(
    'afterbegin',
    `<div class="events-classic-stack-bg" aria-hidden="true">
      <img class="events-classic-stack-bg-image" src="${bg}" alt="" loading="lazy" />
      <div class="events-classic-stack-bg-overlay"></div>
    </div>`
  );
}

function renderEventsClassic() {
  const useStackScroll = CONFIG.eventsStackScroll && CONFIG.eventsAnimations;
  const useGsap = CONFIG.eventsAnimations && CONFIG.eventsLayout === 'classic' && !useStackScroll;

  const groups = [];
  getEvents().forEach((ev, i) => {
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
      (group, gi) => `
      <div class="event-day-group${useGsap ? '' : ' reveal'}" ${useGsap ? '' : `style="--delay:${gi * 0.04}s"`}>
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
          <article class="event-card ${ev.index % 2 === 1 ? 'reverse' : ''}${useGsap ? ' event-card-animated' : useStackScroll ? '' : ' reveal'}" ${useGsap || useStackScroll ? '' : `style="--delay:${j * 0.06}s"`}>
            <div class="event-image-wrap">
              <img class="event-image" src="${ev.image}" alt="${ev.alt}" loading="lazy" />
              <div class="event-image-overlay"></div>
              <div class="event-image-shine"></div>
              <span class="event-num" data-num="${ev.index + 1}">${String(ev.index + 1).padStart(2, '0')}</span>
              <span class="event-date-chip">${ev.date}</span>
            </div>
            <div class="event-details">
              <div class="event-details-inner">
                <h3 class="event-name"${ev.nameEn ? ' lang="mr"' : ''}>${ev.name}</h3>
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

  if (useStackScroll) injectClassicStackBg();
}

function renderFamilySection() {
  const fs = CONFIG.familySection || {};
  const tagline = document.getElementById('familyTagline');
  const yearBadge = document.getElementById('familyYearBadge');
  const textMr = document.getElementById('familyTextMr');
  const textEn = document.getElementById('familyText');
  const office = document.getElementById('familyOffice');
  const names = document.getElementById('familyNames');

  if (tagline) {
    tagline.textContent = fs.taglineMr || '';
    tagline.classList.toggle('hidden', !fs.taglineMr);
  }
  if (yearBadge) {
    yearBadge.textContent = fs.yearBadge || '';
    yearBadge.classList.toggle('hidden', !fs.yearBadge);
  }
  if (textMr) {
    textMr.textContent = fs.textMr || '';
    textMr.classList.toggle('hidden', !fs.textMr);
  }
  if (textEn && CONFIG.familyText) textEn.innerHTML = CONFIG.familyText;

  if (office) {
    const bearers = fs.officeBearers || [];
    const showOffice = bearers.length > 0;
    office.hidden = !showOffice;
    if (showOffice) {
      office.innerHTML = `
        <p class="family-office-title">${fs.officeTitle || 'Mandal Padadhikari'}</p>
        <ul class="family-office-grid" role="list">
          ${bearers
            .map(
              (b) => `
            <li class="family-office-item">
              <span class="family-office-role">${b.role}</span>
              <span class="family-office-name">${b.name}</span>
            </li>`
            )
            .join('')}
        </ul>`;
    }
  }

  if (names) names.innerHTML = `<span>${CONFIG.familyNames || ''}</span>`;
}

function renderClosingSection() {
  const msgMr = document.getElementById('closingMessageMr');
  const msgEn = document.getElementById('closingMessage');
  const sign = document.getElementById('closingSign');
  const hashtag = document.getElementById('closingHashtag');
  const igBtn = document.getElementById('closingInstagram');
  const igLabel = document.getElementById('closingInstagramLabel');

  if (msgMr) {
    msgMr.textContent = CONFIG.closingMessageMr || '';
    msgMr.classList.toggle('hidden', !CONFIG.closingMessageMr);
  }
  if (msgEn) msgEn.innerHTML = CONFIG.closingMessage || '';
  if (sign) sign.textContent = CONFIG.closingSign || '';
  if (hashtag) hashtag.textContent = CONFIG.hashtag || '';

  const showIg = CONFIG.instagramUrl && CONFIG.aagamanShowInstagram !== false;
  if (igBtn) {
    igBtn.href = CONFIG.instagramUrl || '#';
    igBtn.classList.toggle('hidden', !showIg);
  }
  if (igLabel) igLabel.textContent = CONFIG.instagramHandle || '@satpurcharaja';
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

function usesSatpuraImages() {
  return CONFIG.gallerySource === 'satpura';
}

function getIntroImage() {
  return usesSatpuraImages() ? SATPURA.goldenThrone1 : CONFIG.introImage;
}

function getClosingGanesh() {
  return usesSatpuraImages() ? SATPURA.goldenThrone2 : CONFIG.closingGanesh;
}

function getEvents() {
  if (CONFIG.events?.length) return CONFIG.events;
  const invitation = usesSatpuraImages() ? EVENTS_SATPURA : EVENTS_LALBAGH;
  const legacy = usesSatpuraImages() ? EVENTS_LEGACY_SATPURA : EVENTS_LEGACY_LALBAGH;
  return CONFIG.eventsSchedule === 'legacy' ? legacy : invitation;
}

function getGalleryItems() {
  if (CONFIG.gallery?.length) return CONFIG.gallery;
  return CONFIG.gallerySource === 'lalbaug' ? GALLERY_LALBAGH : GALLERY_SATPURA;
}

function renderGallery() {
  document.getElementById('galleryGrid').innerHTML = getGalleryItems()
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

function fireAagamanDatePopup() {
  const popup = document.getElementById('aagamanDatePopup');
  const burst = document.getElementById('aagamanDatePopupBurst');
  const card = document.getElementById('aagamanPopupCard');
  if (!popup) return;

  popup.classList.remove('is-active', 'is-closing');
  popup.setAttribute('aria-hidden', 'false');
  void popup.offsetWidth;
  popup.classList.add('is-active');

  if (card) {
    card.classList.remove('paper-bomb-pop');
    void card.offsetWidth;
    card.classList.add('paper-bomb-pop');
    setTimeout(() => card.classList.remove('paper-bomb-pop'), 900);
  }

  firePaperBomb(0.5, 0.44);

  if (burst) {
    burst.classList.remove('is-active');
    void burst.offsetWidth;
    burst.classList.add('is-active');
  }

  setTimeout(() => popup.classList.add('is-closing'), 2600);
  setTimeout(() => {
    popup.classList.remove('is-active', 'is-closing');
    popup.setAttribute('aria-hidden', 'true');
  }, 3100);
}

function initAagamanCurtain() {
  const section = document.getElementById('section-aagaman');
  const tap = document.getElementById('aagamanCurtainTap');
  const inner = section?.querySelector('.aagaman-inner');
  if (!section || !tap) return;

  if (inner) inner.setAttribute('aria-hidden', 'true');

  const openCurtain = () => {
    if (section.classList.contains('is-curtain-open')) return;
    section.classList.add('is-curtain-open');
    tap.disabled = true;
    tap.setAttribute('aria-hidden', 'true');
    if (inner) inner.removeAttribute('aria-hidden');

    setTimeout(() => fireAagamanDatePopup(), 380);

    setTimeout(() => {
      section.querySelectorAll('.aagaman-inner .reveal').forEach((el) => {
        el.classList.add('visible');
      });
    }, 1100);
  };

  tap.addEventListener('click', openCurtain);
}

function openInvitation() {
  if (isOpened) return;
  isOpened = true;
  envelopeWrap.classList.add('open');
  envelopeScreen.classList.add('opening');
  const tapPill = document.getElementById('roopaTapPill');
  if (tapPill) tapPill.classList.add('hidden');
  fireCelebration();
  setTimeout(() => {
    envelopeScreen.classList.add('closing');
    setTimeout(() => {
      envelopeScreen.classList.add('hidden');
      invitationMain.classList.remove('hidden');
      fabGroup.classList.remove('hidden');
      sectionNav.classList.remove('hidden');
      initScrollReveal();
      initEventsExperience();
      initSectionNav();
      initGalleryLightbox();
      startCountdown();
      tryPlayMusic();
      startButterflies();
      createDiyas();
      initScratchCards();
      initAagamanCurtain();
      if (CONFIG.aagamanSectionMode === 'route' && CONFIG.aagamanRouteLayout === 'map' && CONFIG.aagamanRouteMap) {
        initAagamanRouteMap();
      }
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

function firePaperBomb(originX, originY) {
  if (typeof confetti !== 'function') return;
  const colors = ['#FFD700', '#FF6B00', '#8B1538', '#FFFFFF', '#FF4500', '#D4AF37', '#FF1744', '#FFF8F0'];
  const origin = { x: originX, y: originY };

  confetti({
    particleCount: 180,
    spread: 360,
    startVelocity: 62,
    gravity: 0.82,
    ticks: 120,
    origin,
    colors,
    scalar: 1.35,
    shapes: ['square', 'circle'],
  });

  setTimeout(() => {
    confetti({
      particleCount: 110,
      spread: 110,
      startVelocity: 54,
      origin: { x: originX, y: originY - 0.05 },
      colors,
      scalar: 1.2,
    });
  }, 60);

  setTimeout(() => {
    confetti({ particleCount: 70, angle: 55, spread: 100, startVelocity: 52, origin: { x: originX - 0.1, y: originY }, colors });
    confetti({ particleCount: 70, angle: 125, spread: 100, startVelocity: 52, origin: { x: originX + 0.1, y: originY }, colors });
  }, 140);

  setTimeout(() => {
    confetti({
      particleCount: 90,
      spread: 360,
      startVelocity: 38,
      ticks: 90,
      origin,
      colors,
      shapes: ['star'],
      scalar: 1.05,
    });
  }, 220);

  const end = Date.now() + 2200;
  (function paperShower() {
    confetti({
      particleCount: 8,
      angle: 270,
      spread: 55,
      startVelocity: 26,
      origin: { x: originX + (Math.random() - 0.5) * 0.3, y: originY - 0.1 },
      colors,
      scalar: 1.2,
      shapes: ['square'],
    });
    if (Date.now() < end) requestAnimationFrame(paperShower);
  })();
}

document.getElementById('openEnvelope').addEventListener('click', openInvitation);

function renderAagamanPartners() {
  const grid = document.getElementById('aagamanPartnersGrid');
  const partners = CONFIG.aagaman?.partners;
  if (!grid || !partners) return;

  const label = document.getElementById('aagamanPartnersLabel');
  const title = document.getElementById('aagamanPartnersTitle');
  const titleEn = document.getElementById('aagamanPartnersTitleEn');
  const subtitle = document.getElementById('aagamanPartnersSubtitle');
  if (label) label.textContent = partners.label;
  if (title) title.textContent = partners.title;
  if (titleEn) titleEn.textContent = partners.titleEn;
  if (subtitle) subtitle.textContent = partners.subtitle;

  grid.innerHTML = partners.groups
    .map(
      (group, index) => `
      <article class="aagaman-partner-card" style="--partner-delay: ${index * 0.1}s">
        <div class="aagaman-partner-media">
          <img class="aagaman-partner-image" src="${group.image}" alt="${group.imageAlt || group.role}" loading="lazy" />
          <div class="aagaman-partner-media-overlay" aria-hidden="true"></div>
          <span class="aagaman-partner-tag">${group.tag}</span>
        </div>
        <div class="aagaman-partner-body">
          <h3 class="aagaman-partner-role">${group.role}</h3>
          ${group.location ? `<p class="aagaman-partner-location">${group.location}</p>` : ''}
          ${group.description ? `<p class="aagaman-partner-desc">${group.description}</p>` : ''}
          <ul class="aagaman-partner-names">
            ${(group.names || []).map((entry) => {
              const n = typeof entry === 'string' ? { name: entry, detail: '' } : entry;
              return `<li><span class="aagaman-partner-name">${n.name}</span>${n.detail ? `<span class="aagaman-partner-name-detail">${n.detail}</span>` : ''}</li>`;
            }).join('')}
          </ul>
        </div>
      </article>`
    )
    .join('');
}

function getAagamanRouteBounds(stops, pad = 0.0011) {
  const lats = stops.map((s) => s.lat);
  const lngs = stops.map((s) => s.lng);
  return {
    minLat: Math.min(...lats) - pad,
    maxLat: Math.max(...lats) + pad,
    minLng: Math.min(...lngs) - pad,
    maxLng: Math.max(...lngs) + pad,
  };
}

function createAagamanProjector(bounds, canvas = { w: 1500, h: 1500, pad: 120 }) {
  const { minLat, maxLat, minLng, maxLng } = bounds;
  return (lat, lng) => ({
    x: canvas.pad + ((lng - minLng) / (maxLng - minLng)) * (canvas.w - 2 * canvas.pad),
    y: canvas.pad + ((maxLat - lat) / (maxLat - minLat)) * (canvas.h - 2 * canvas.pad),
  });
}

function buildSatelliteMapUrl(bounds, size = 900) {
  const { minLng, minLat, maxLng, maxLat } = bounds;
  return `https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/export?bbox=${minLng},${minLat},${maxLng},${maxLat}&bboxSR=4326&size=${size},${size}&format=jpg&f=image`;
}

function buildFallbackPathD(projected) {
  let pathD = `M ${projected[0].x.toFixed(1)} ${projected[0].y.toFixed(1)}`;
  for (let i = 1; i < projected.length; i += 1) {
    const prev = projected[i - 1];
    const curr = projected[i];
    const mx = (prev.x + curr.x) / 2;
    const my = (prev.y + curr.y) / 2;
    pathD += ` Q ${mx.toFixed(1)} ${my.toFixed(1)} ${curr.x.toFixed(1)} ${curr.y.toFixed(1)}`;
  }
  return pathD;
}

async function fetchMiravnukPathD(stops, project) {
  const coords = stops.map((s) => `${s.lng},${s.lat}`).join(';');
  const url = `https://router.project-osrm.org/route/v1/foot/${coords}?overview=full&geometries=geojson`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (data.code !== 'Ok' || !data.routes?.[0]?.geometry?.coordinates?.length) return null;
    return data.routes[0].geometry.coordinates
      .map((c, i) => {
        const p = project(c[1], c[0]);
        return `${i === 0 ? 'M' : 'L'} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`;
      })
      .join(' ');
  } catch {
    return null;
  }
}

function buildAagamanRouteGeometry(route) {
  const stops = route.stops || [];
  if (!stops.length) return null;

  const isSchematic = route.mapStyle === 'schematic' || CONFIG.aagamanRouteMapStyle === 'schematic';

  if (isSchematic && stops[0]?.lat != null) {
    const bounds = getAagamanRouteBounds(stops);
    const canvas = { w: 900, h: 700, pad: 110 };
    const project = createAagamanProjector(bounds, canvas);
    const projected = stops.map((stop) => ({ ...stop, ...project(stop.lat, stop.lng) }));
    return {
      projected,
      pathD: buildFallbackPathD(projected),
      viewBox: route.mapViewBox || '0 0 900 700',
      isSchematic: true,
    };
  }

  if (route.mapImage && route.pathD) {
    const projected = stops.map((stop) => ({ ...stop, x: stop.x, y: stop.y }));
    return {
      projected,
      pathD: route.pathD,
      mapImage: route.mapImage,
      viewBox: route.mapViewBox || '0 0 1080 1920',
      mapImageWidth: route.mapImageWidth || 1080,
      mapImageHeight: route.mapImageHeight || 1920,
      isImageMap: true,
    };
  }

  if (route.mapImage && stops[0]?.lat != null) {
    const bounds = getAagamanRouteBounds(stops);
    const canvas = {
      w: route.mapImageWidth || 1080,
      h: route.mapImageHeight || 1920,
      pad: 90,
    };
    const project = createAagamanProjector(bounds, canvas);
    const projected = stops.map((stop) => ({ ...stop, ...project(stop.lat, stop.lng) }));
    return {
      projected,
      pathD: buildFallbackPathD(projected),
      mapImage: route.mapImage,
      viewBox: route.mapViewBox || `0 0 ${canvas.w} ${canvas.h}`,
      mapImageWidth: canvas.w,
      mapImageHeight: canvas.h,
      project,
    };
  }

  const bounds = getAagamanRouteBounds(stops);
  const canvas = { w: 1500, h: 1500, pad: 120 };
  const project = createAagamanProjector(bounds, canvas);
  const projected = stops.map((stop) => ({ ...stop, ...project(stop.lat, stop.lng) }));

  return {
    projected,
    pathD: buildFallbackPathD(projected),
    bounds,
    canvas,
    mapImage: buildSatelliteMapUrl(bounds),
    viewBox: `0 0 ${canvas.w} ${canvas.h}`,
    project,
  };
}

function getAagamanViewBoxCenter(viewBox) {
  const parts = String(viewBox || '0 0 1500 1500').trim().split(/\s+/).map(Number);
  const [x = 0, y = 0, w = 1500, h = 1500] = parts;
  return { cx: x + w / 2, cy: y + h / 2 };
}

function updateAagamanRoutePanels(section, seg) {
  const panels = section.querySelectorAll('.aagaman-route-panel');
  const stopDots = section.querySelectorAll('.aagaman-route-stop-dot');
  panels.forEach((panel, i) => {
    panel.classList.toggle('is-active', i === seg);
    panel.classList.toggle('is-passed', i < seg);
  });
  stopDots.forEach((dot, i) => {
    dot.classList.toggle('is-reached', i <= seg);
    dot.classList.toggle('is-current', i === seg);
  });
}

function renderAagamanRoute() {
  const section = document.getElementById('section-aagaman-route');
  const route = CONFIG.aagaman?.route;
  if (!section || !route) return;

  const showRoute = CONFIG.aagamanSectionMode === 'route';
  const isShowcase = CONFIG.aagamanRouteLayout !== 'map';
  section.classList.toggle('is-disabled', !showRoute);
  section.classList.toggle('is-showcase-layout', isShowcase);
  section.classList.toggle('is-map-layout', !isShowcase);

  const label = document.getElementById('aagamanRouteLabel');
  const title = document.getElementById('aagamanRouteTitle');
  const titleEn = document.getElementById('aagamanRouteTitleEn');
  const subtitle = document.getElementById('aagamanRouteSubtitle');
  if (label) label.textContent = route.label;
  if (title) title.textContent = route.title;
  if (titleEn) titleEn.textContent = route.titleEn;
  if (subtitle) subtitle.textContent = route.subtitle;
  const hint = document.getElementById('aagamanRouteHint');
  if (hint) {
    hint.textContent = route.hint || '';
    hint.classList.toggle('hidden', !route.hint);
  }

  if (isShowcase) {
    renderAagamanShowcaseCards(route);
    renderAagamanAttractions(route);
    renderAagamanInstagram();
    return;
  }

  if (route.scrollHeight) section.style.setProperty('--aagaman-route-scroll', route.scrollHeight);
  renderAagamanRouteMap(route, section);
}

const ATTRACTION_ICONS = {
  sound: `<svg class="aagaman-attraction-svg" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M10 18h8l9-6v24l-9-6h-8V18z" fill="currentColor"/>
    <path d="M30 19.5c2.2 1.8 3.5 4.4 3.5 4.5s-1.3 2.7-3.5 4.5M34.5 15c3.8 3.1 6 7.5 6 9s-2.2 5.9-6 9" stroke="var(--attraction-accent)" stroke-width="2.8" stroke-linecap="round"/>
  </svg>`,
  banjo: `<svg class="aagaman-attraction-svg" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="30" cy="28" r="11" fill="currentColor" opacity="0.12"/>
    <circle cx="30" cy="28" r="11" stroke="currentColor" stroke-width="2.4"/>
    <circle cx="30" cy="28" r="4.5" fill="var(--attraction-accent)"/>
    <path d="M19 34L30 28" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"/>
    <rect x="11" y="31" width="11" height="5" rx="2.5" fill="currentColor"/>
    <path d="M14 31V24" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>
    <path d="M17 31V22" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>
  </svg>`,
  dhol: `<svg class="aagaman-attraction-svg" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <ellipse cx="24" cy="14" rx="14" ry="5.5" fill="currentColor"/>
    <path d="M10 14v18c0 3 6.3 5.5 14 5.5s14-2.5 14-5.5V14" fill="currentColor" opacity="0.85"/>
    <ellipse cx="24" cy="32" rx="14" ry="5.5" fill="currentColor" opacity="0.55"/>
    <ellipse cx="24" cy="14" rx="14" ry="5.5" stroke="currentColor" stroke-width="2"/>
    <path d="M24 19v8" stroke="var(--attraction-accent)" stroke-width="2.8" stroke-linecap="round"/>
    <path d="M20 23h8" stroke="var(--attraction-accent)" stroke-width="2.8" stroke-linecap="round"/>
  </svg>`,
};

const AAGAMAN_ROUTE_ICONS = {
  'sai-baba-temple': '🛕',
  'sai-circle': '⭕',
  'ambedkar-market': '🏪',
  'kamgar-bhavan': '🏛️',
  'satpur-cha-raja': '🪔',
};

function renderAagamanShowcaseCards(route) {
  const track = document.getElementById('aagamanShowcaseTrack');
  const stops = route.stops || [];
  if (!track || !stops.length) return;

  track.innerHTML = stops
    .map((stop) => {
      const displayName = stop.shortName || stop.name;
      const icon = stop.icon || AAGAMAN_ROUTE_ICONS[stop.id] || '📍';
      return `
        <article class="aagaman-route-stop${stop.isEnd ? ' is-destination' : ''}${stop.tag === 'Start' ? ' is-start' : ''}" role="listitem" data-stop-id="${stop.id}" title="${stop.name}">
          <span class="aagaman-route-stop-icon" aria-hidden="true">${icon}</span>
          <h3 class="aagaman-route-stop-name">${displayName}</h3>
        </article>`;
    })
    .join('');
}

function renderAagamanAttractions(route) {
  const wrap = document.getElementById('aagamanAttractionsWrap');
  const track = document.getElementById('aagamanAttractionsTrack');
  const attractions = route.attractions;
  const show = CONFIG.aagamanShowAttractions !== false && attractions?.items?.length;

  if (!wrap || !track) return;
  wrap.classList.toggle('hidden', !show);
  if (!show) return;

  const label = document.getElementById('aagamanAttractionsLabel');
  const title = document.getElementById('aagamanAttractionsTitle');
  const titleEn = document.getElementById('aagamanAttractionsTitleEn');
  const subtitle = document.getElementById('aagamanAttractionsSubtitle');
  if (label) label.textContent = attractions.label;
  if (title) title.textContent = attractions.title;
  if (titleEn) titleEn.textContent = attractions.titleEn;
  if (subtitle) subtitle.textContent = attractions.subtitle || '';

  track.innerHTML = attractions.items
    .map((item) => {
      const usePhoto = CONFIG.aagamanAttractionIcons === 'photo' && item.image;
      const iconMarkup = usePhoto
        ? `<img class="aagaman-attraction-icon-img" src="${item.image}" alt="${item.imageAlt || item.name}" loading="lazy" />`
        : ATTRACTION_ICONS[item.iconKey] ||
          `<span class="aagaman-route-stop-icon">${item.icon || '✦'}</span>`;
      return `
        <article class="aagaman-route-stop aagaman-attraction aagaman-attraction--${item.id}" role="listitem" data-attraction-id="${item.id}" title="${item.name}">
          <span class="aagaman-attraction-icon-wrap" aria-hidden="true">
            ${iconMarkup}
          </span>
          <p class="aagaman-attraction-tag">${item.tag || item.category}</p>
          <h3 class="aagaman-route-stop-name">${item.shortName || item.name}</h3>
        </article>`;
    })
    .join('');
}

function renderAagamanInstagram() {
  const wrap = document.getElementById('aagamanInstagramWrap');
  const link = document.getElementById('aagamanInstagramLink');
  const avatar = document.getElementById('aagamanInstagramAvatar');
  const handle = document.getElementById('aagamanInstagramHandle');
  const show = CONFIG.aagamanShowInstagram !== false && CONFIG.instagramUrl;

  if (!wrap) return;
  wrap.classList.toggle('hidden', !show);
  if (!show || !link) return;

  link.href = CONFIG.instagramUrl;
  if (handle) handle.textContent = CONFIG.instagramHandle || '@satpurcharaja';
  if (avatar) {
    const photo = CONFIG.instagramPhoto || CONFIG.sealImage;
    avatar.src = photo || '';
    avatar.alt = `${CONFIG.instagramHandle || 'Satpuracha Raja'} — Instagram profile`;
  }
}

function renderAagamanRouteMap(route, section) {
  const geometry = buildAagamanRouteGeometry(route);
  if (!geometry) return;

  const { projected, pathD, viewBox } = geometry;
  section._aagamanGeometry = geometry;
  section.classList.toggle('is-schematic-map', Boolean(geometry.isSchematic));

  const pathEl = document.getElementById('aagamanRoutePath');
  const pathBgEl = document.getElementById('aagamanRoutePathBg');
  const svg = document.getElementById('aagamanRouteSvg');
  const mapImg = document.getElementById('aagamanRouteMapImg');
  const mapsLink = document.getElementById('aagamanRouteMapsLink');
  const dotStart = document.getElementById('aagamanRouteDotStart');
  if (!pathEl) return;

  if (pathEl) pathEl.setAttribute('d', pathD);
  if (pathBgEl) pathBgEl.setAttribute('d', pathD);
  if (svg) svg.setAttribute('viewBox', viewBox);
  if (mapImg) {
    if (geometry.isSchematic) {
      mapImg.removeAttribute('href');
    } else if (geometry.mapImage) {
      mapImg.setAttribute('width', geometry.mapImageWidth || 1080);
      mapImg.setAttribute('height', geometry.mapImageHeight || 1920);
      mapImg.setAttribute('href', geometry.mapImage);
    }
  }
  if (mapsLink && route.googleMapsUrl) {
    mapsLink.href = route.googleMapsUrl;
    mapsLink.classList.remove('hidden');
  }

  const start = projected[0];
  if (dotStart) {
    dotStart.setAttribute('cx', start.x);
    dotStart.setAttribute('cy', start.y);
  }

  const marker = document.getElementById('aagamanRouteMarker');
  const markerRing = document.getElementById('aagamanRouteMarkerRing');
  if (marker) {
    marker.setAttribute('cx', start.x);
    marker.setAttribute('cy', start.y);
  }
  if (markerRing) {
    markerRing.setAttribute('cx', start.x);
    markerRing.setAttribute('cy', start.y);
  }

  const stopsLayer = document.getElementById('aagamanRouteStops');
  if (stopsLayer) {
    stopsLayer.innerHTML = projected
      .map(
        (stop) => `
        <g class="aagaman-route-stop-dot${stop.isEnd ? ' is-end' : ''}${stop.tag === 'Start' ? ' is-start' : ''}" data-stop-id="${stop.id}">
          <circle class="aagaman-route-stop-halo" cx="${stop.x.toFixed(1)}" cy="${stop.y.toFixed(1)}" r="28" />
          <circle class="aagaman-route-stop-pin" cx="${stop.x.toFixed(1)}" cy="${stop.y.toFixed(1)}" r="10" />
          <text class="aagaman-route-stop-num" x="${stop.x.toFixed(1)}" y="${(stop.y + 4).toFixed(1)}" text-anchor="middle">${stop.step}</text>
          ${stop.shortName ? `<text class="aagaman-route-stop-label" x="${stop.x.toFixed(1)}" y="${(stop.y + 36).toFixed(1)}" text-anchor="middle">${stop.shortName}</text>` : ''}
        </g>`
      )
      .join('');
  }

  const panels = document.getElementById('aagamanRoutePanels');
  if (panels) {
    panels.innerHTML = projected
      .map(
        (stop, index) => `
        <article class="aagaman-route-panel${index === 0 ? ' is-active' : ''}" data-stop-id="${stop.id}" data-stop-index="${index}">
          <span class="aagaman-route-panel-step">${stop.step}</span>
          <span class="aagaman-route-panel-tag">${stop.tag}</span>
          <h3 class="aagaman-route-panel-name">${stop.name}</h3>
          <p class="aagaman-route-panel-area">${stop.area}</p>
          ${stop.address ? `<p class="aagaman-route-panel-address">${stop.address}</p>` : ''}
          <p class="aagaman-route-panel-note">${stop.note}</p>
        </article>`
      )
      .join('');
  }
}

let aagamanRouteMapInited = false;
let aagamanRouteScrollTrigger = null;

function killAagamanRouteScroll() {
  if (aagamanRouteScrollTrigger) {
    aagamanRouteScrollTrigger.kill();
    aagamanRouteScrollTrigger = null;
  }
}

function placeAagamanRouteMarker(marker, markerRing, x, y) {
  marker.setAttribute('cx', x);
  marker.setAttribute('cy', y);
  if (markerRing) {
    markerRing.setAttribute('cx', x);
    markerRing.setAttribute('cy', y);
  }
}

function initAagamanRouteMapSchematic(section, pinWrap, sticky, path, marker, markerRing, route, geometry) {
  const pov = section.querySelector('.aagaman-route-pov');
  const povInner = section.querySelector('.aagaman-route-pov-inner');
  gsap.set([pov, povInner, marker, markerRing].filter(Boolean), { clearProps: 'transform,x,y,scale' });

  const pathLen = path.getTotalLength();
  const stopCount = route.stops.length;
  let activeSeg = 0;
  const start = geometry.projected[0];

  placeAagamanRouteMarker(marker, markerRing, start.x, start.y);
  path.style.strokeDasharray = `${pathLen}`;
  path.style.strokeDashoffset = `${pathLen}`;

  killAagamanRouteScroll();

  aagamanRouteScrollTrigger = ScrollTrigger.create({
    trigger: pinWrap,
    start: 'top top',
    end: 'bottom bottom',
    pin: sticky,
    pinSpacing: true,
    anticipatePin: 1,
    scrub: 0.45,
    invalidateOnRefresh: true,
    onUpdate: (self) => {
      const drawLen = pathLen * self.progress;
      path.style.strokeDashoffset = `${pathLen - drawLen}`;

      const pt = path.getPointAtLength(Math.max(0, Math.min(drawLen, pathLen)));
      placeAagamanRouteMarker(marker, markerRing, pt.x, pt.y);

      const seg = Math.min(Math.floor(self.progress * stopCount), stopCount - 1);
      if (seg !== activeSeg) {
        activeSeg = seg;
        updateAagamanRoutePanels(section, seg);
      }
    },
  });

  requestAnimationFrame(() => ScrollTrigger.refresh());
}

function initAagamanRouteMapCinematic(section, pinWrap, sticky, path, marker, markerRing, route, geometry) {
  const pov = section.querySelector('.aagaman-route-pov');
  const povInner = section.querySelector('.aagaman-route-pov-inner');
  if (!pov || !povInner) return;

  gsap.registerPlugin(ScrollTrigger);
  if (typeof MotionPathPlugin !== 'undefined') gsap.registerPlugin(MotionPathPlugin);

  const viewport = getAagamanViewBoxCenter(route.mapViewBox || geometry.viewBox);
  const pathLen = path.getTotalLength();
  const stopCount = route.stops.length;
  let activeSeg = 0;

  gsap.set(path, { strokeDasharray: pathLen, strokeDashoffset: pathLen });
  gsap.set(pov, { x: viewport.cx, y: viewport.cy, scale: 1.5, transformOrigin: '50% 50%' });

  const syncCamera = () => {
    const mx = gsap.getProperty(marker, 'x') || 0;
    const my = gsap.getProperty(marker, 'y') || 0;
    const cx = parseFloat(marker.getAttribute('cx')) + mx;
    const cy = parseFloat(marker.getAttribute('cy')) + my;
    placeAagamanRouteMarker(marker, markerRing, cx, cy);
    return { cx, cy };
  };

  const xTo = gsap.quickTo(povInner, 'x', { duration: 0.55, ease: 'expo.out' });
  const yTo = gsap.quickTo(povInner, 'y', { duration: 0.55, ease: 'expo.out' });

  const startCam = syncCamera();
  gsap.set(povInner, { x: viewport.cx - startCam.cx, y: viewport.cy - startCam.cy });

  killAagamanRouteScroll();

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: pinWrap,
      start: 'top top',
      end: 'bottom bottom',
      pin: sticky,
      pinSpacing: true,
      anticipatePin: 1,
      scrub: 0.8,
      invalidateOnRefresh: true,
    },
    onUpdate: () => {
      const { cx, cy } = syncCamera();
      xTo(viewport.cx - cx);
      yTo(viewport.cy - cy);

      const seg = Math.min(Math.floor(tl.progress() * stopCount), stopCount - 1);
      if (seg !== activeSeg) {
        activeSeg = seg;
        updateAagamanRoutePanels(section, seg);
      }
    },
  });

  aagamanRouteScrollTrigger = tl.scrollTrigger;

  tl.fromTo(path, { strokeDashoffset: pathLen }, { strokeDashoffset: 0, ease: 'none', duration: 1 }, 0)
    .fromTo(pov, { scale: 1.5 }, { scale: 2.05, ease: 'power1.inOut', duration: 1 }, 0);

  if (typeof MotionPathPlugin !== 'undefined') {
    tl.to(
      marker,
      {
        motionPath: { path, align: path, alignOrigin: [0.5, 0.5], autoRotate: false },
        ease: 'none',
        duration: 1,
        immediateRender: true,
      },
      0
    );
  } else {
    const motion = { at: 0 };
    tl.to(
      motion,
      {
        at: pathLen,
        ease: 'none',
        duration: 1,
        onUpdate: () => {
          const pt = path.getPointAtLength(motion.at);
          marker.setAttribute('cx', pt.x);
          marker.setAttribute('cy', pt.y);
        },
      },
      0
    );
  }

  requestAnimationFrame(() => ScrollTrigger.refresh());
}

async function initAagamanRouteMap() {
  if (aagamanRouteMapInited || !CONFIG.aagamanRouteMap || CONFIG.aagamanSectionMode !== 'route') return;
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const section = document.getElementById('section-aagaman-route');
  const pinWrap = section?.querySelector('.aagaman-route-pin');
  const sticky = section?.querySelector('.aagaman-route-sticky');
  const path = document.getElementById('aagamanRoutePath');
  const marker = document.getElementById('aagamanRouteMarker');
  const markerRing = document.getElementById('aagamanRouteMarkerRing');
  const route = CONFIG.aagaman?.route;
  const geometry = section?._aagamanGeometry;
  if (!section || !pinWrap || !sticky || !path || !marker || !route?.stops?.length || !geometry) return;

  aagamanRouteMapInited = true;
  gsap.registerPlugin(ScrollTrigger);

  const isSchematic = route.mapStyle === 'schematic' || CONFIG.aagamanRouteMapStyle === 'schematic';
  const useCamera = CONFIG.aagamanRouteCamera === true && !isSchematic;

  if (!route.pathD && geometry.project && !isSchematic) {
    const osrmPath = await fetchMiravnukPathD(route.stops, geometry.project);
    if (osrmPath) {
      path.setAttribute('d', osrmPath);
      const pathBg = document.getElementById('aagamanRoutePathBg');
      if (pathBg) pathBg.setAttribute('d', osrmPath);
    }
  }

  if (useCamera) {
    initAagamanRouteMapCinematic(section, pinWrap, sticky, path, marker, markerRing, route, geometry);
  } else {
    initAagamanRouteMapSchematic(section, pinWrap, sticky, path, marker, markerRing, route, geometry);
  }
}

function startCountdown() {
  startCountdownInstance({
    target: CONFIG.utsavCountdownTarget,
    ids: ['days', 'hours', 'minutes', 'seconds'],
    messageId: 'countdownMessage',
    activeMessage: CONFIG.utsavCountdownMessage,
    arrivedMessage: CONFIG.utsavCountdownArrivedMessage,
  });
}

function startCountdownInstance({ target, ids, messageId, activeMessage, arrivedMessage }) {
  const end = new Date(target).getTime();
  const [daysId, hoursId, minutesId, secondsId] = ids;
  function update() {
    const diff = end - Date.now();
    const msgEl = document.getElementById(messageId);
    if (diff <= 0) {
      [daysId, hoursId, minutesId, secondsId].forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.textContent = '00';
      });
      if (msgEl) msgEl.textContent = arrivedMessage;
      return;
    }
    const set = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.textContent = String(val).padStart(2, '0');
    };
    set(daysId, Math.floor(diff / 86400000));
    set(hoursId, Math.floor((diff % 86400000) / 3600000));
    set(minutesId, Math.floor((diff % 3600000) / 60000));
    set(secondsId, Math.floor((diff % 60000) / 1000));
    if (msgEl) msgEl.textContent = activeMessage;
  }
  update();
  setInterval(update, 1000);
}

function updateMusicUI() {
  const offIcon = musicBtn.querySelector('.music-btn-icon--off');
  const onIcon = musicBtn.querySelector('.music-btn-icon--on');
  if (musicToggleLabel) musicToggleLabel.textContent = CONFIG.musicTitle;

  if (musicPlaying) {
    musicBtn.classList.remove('muted');
    musicBtn.classList.add('is-playing');
    musicBtn.setAttribute('aria-pressed', 'true');
    musicBtn.setAttribute('aria-label', `Pause ${CONFIG.musicTitle}`);
    if (offIcon) offIcon.classList.add('hidden');
    if (onIcon) onIcon.classList.remove('hidden');
  } else {
    musicBtn.classList.add('muted');
    musicBtn.classList.remove('is-playing');
    musicBtn.setAttribute('aria-pressed', 'false');
    musicBtn.setAttribute('aria-label', `Play ${CONFIG.musicTitle}`);
    if (offIcon) offIcon.classList.remove('hidden');
    if (onIcon) onIcon.classList.add('hidden');
  }
}

function tryPlayMusic() {
  playBgMusic();
}

musicBtn.addEventListener('click', () => {
  if (musicPlaying) pauseBgMusic();
  else playBgMusic();
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

let eventsExperienceInited = false;

function initEventsExperience() {
  if (eventsExperienceInited || !CONFIG.eventsAnimations) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const section = document.getElementById('section-events');
  if (!section) return;

  if (CONFIG.eventsLayout === 'classic' && CONFIG.eventsStackScroll) {
    initEventsClassicStackScroll();
    return;
  }

  if (CONFIG.eventsLayout === 'stack') {
    initEventsStackScroll();
    return;
  }

  if (CONFIG.eventsLayout !== 'classic') return;
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  gsap.registerPlugin(ScrollTrigger);
  eventsExperienceInited = true;
  section.classList.add('events-section--animated');

  createEventsAmbient();

  const header = section.querySelector('.section-header');
  if (header) {
    gsap.from(header.children, {
      scrollTrigger: { trigger: header, start: 'top 85%', toggleActions: 'play none none none' },
      y: 36,
      opacity: 0,
      duration: 0.85,
      stagger: 0.1,
      ease: 'power3.out',
    });
  }

  const timelineFill = section.querySelector('.events-timeline-fill');
  if (timelineFill) {
    gsap.fromTo(
      timelineFill,
      { scaleY: 0, transformOrigin: 'top center' },
      {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top 60%',
          end: 'bottom 20%',
          scrub: 0.6,
        },
      }
    );
  }

  section.querySelectorAll('.event-day-group').forEach((group) => {
    const badge = group.querySelector('.event-day-badge');
    const lines = group.querySelectorAll('.event-day-line');

    if (badge) {
      gsap.from(badge, {
        scrollTrigger: { trigger: group, start: 'top 82%', toggleActions: 'play none none none' },
        scale: 0.8,
        opacity: 0,
        duration: 0.65,
        ease: 'back.out(1.5)',
      });
    }

    if (lines.length) {
      gsap.from(lines, {
        scrollTrigger: { trigger: group, start: 'top 82%', toggleActions: 'play none none none' },
        scaleX: 0,
        opacity: 0,
        duration: 0.75,
        stagger: 0.08,
        ease: 'power2.out',
      });
    }

    ScrollTrigger.create({
      trigger: group,
      start: 'top 78%',
      once: true,
      onEnter: () => fireEventDaySparkle(group),
    });

    group.querySelectorAll('.event-card-animated').forEach((card, ci) => {
      const fromX = card.classList.contains('reverse') ? 72 : -72;
      const image = card.querySelector('.event-image');
      const nameLine = card.querySelector('.event-name-line');
      const num = card.querySelector('.event-num');

      gsap.set(card, { opacity: 0, x: fromX });
      gsap.to(card, {
        scrollTrigger: { trigger: card, start: 'top 88%', toggleActions: 'play none none none' },
        x: 0,
        opacity: 1,
        duration: 0.95,
        delay: ci * 0.07,
        ease: 'power3.out',
      });

      if (image) {
        gsap.to(image, {
          scrollTrigger: { trigger: card, start: 'top bottom', end: 'bottom top', scrub: 1.2 },
          y: -14,
          ease: 'none',
        });
      }

      if (nameLine) {
        gsap.from(nameLine, {
          scrollTrigger: { trigger: card, start: 'top 75%', toggleActions: 'play none none none' },
          scaleX: 0,
          duration: 0.7,
          ease: 'power2.out',
          delay: 0.15,
        });
      }

      if (num) {
        ScrollTrigger.create({
          trigger: card,
          start: 'top 78%',
          once: true,
          onEnter: () => animateEventNum(num),
        });
      }

      initEventCardTilt(card);
    });
  });

  ScrollTrigger.refresh();
}

function initEventsClassicStackScroll() {
  if (eventsExperienceInited) return;
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  const section = document.getElementById('section-events');
  const list = document.getElementById('eventsList');
  if (!section || !list) return;

  gsap.registerPlugin(ScrollTrigger);
  eventsExperienceInited = true;
  section.classList.add('events-section--stack-scroll');

  createEventsAmbient();

  const header = section.querySelector('.section-header');
  if (header) {
    gsap.from(header.children, {
      scrollTrigger: { trigger: header, start: 'top 85%', toggleActions: 'play none none none' },
      y: 32,
      opacity: 0,
      duration: 0.85,
      stagger: 0.1,
      ease: 'power3.out',
    });
  }

  section.querySelectorAll('.event-day-group').forEach((group) => {
    const badge = group.querySelector('.event-day-badge');
    const lines = group.querySelectorAll('.event-day-line');
    if (badge) {
      gsap.from(badge, {
        scrollTrigger: { trigger: group, start: 'top 88%', toggleActions: 'play none none none' },
        scale: 0.85,
        opacity: 0,
        duration: 0.6,
        ease: 'back.out(1.4)',
      });
    }
    if (lines.length) {
      gsap.from(lines, {
        scrollTrigger: { trigger: group, start: 'top 88%', toggleActions: 'play none none none' },
        scaleX: 0,
        opacity: 0,
        duration: 0.65,
        stagger: 0.06,
        ease: 'power2.out',
      });
    }
  });

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = window.innerWidth < 768;
  if (reducedMotion || isMobile) {
    ScrollTrigger.refresh();
    return;
  }

  const bg = list.querySelector('.events-classic-stack-bg');
  const cards = gsap.utils.toArray('.event-card', list);
  if (!cards.length) return;

  const pinTop = 96;
  const stackOffset = 16;
  const scrollPerCard = () => window.innerHeight * 0.88;
  const totalEnd = () => scrollPerCard() * cards.length + window.innerHeight * 0.35;
  const sceneTrigger = bg || cards[0];

  if (bg) {
    const bgImg = bg.querySelector('.events-classic-stack-bg-image');
    ScrollTrigger.create({
      trigger: sceneTrigger,
      start: 'top top',
      end: totalEnd,
      pin: bg,
      pinSpacing: false,
      invalidateOnRefresh: true,
    });
    if (bgImg) {
      gsap.fromTo(
        bgImg,
        { scale: 1.12, yPercent: -3 },
        {
          scale: 1,
          yPercent: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: sceneTrigger,
            start: 'top top',
            end: totalEnd,
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        }
      );
    }
  }

  cards.forEach((card, i) => {
    gsap.set(card, { zIndex: 40 + i, transformOrigin: 'center top' });

    ScrollTrigger.create({
      trigger: card,
      start: () => `top top+=${pinTop + i * stackOffset}`,
      endTrigger: cards[cards.length - 1],
      end: 'bottom bottom',
      pin: card,
      pinSpacing: false,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    });

    if (i === 0) return;

    gsap.fromTo(
      card,
      { y: () => window.innerHeight * 0.58, scale: 0.9, opacity: 0.6, rotation: -1.5 },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        rotation: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: card,
          start: 'top bottom',
          end: () => `top top+=${pinTop + i * stackOffset}`,
          scrub: 0.45,
          invalidateOnRefresh: true,
        },
      }
    );

    for (let j = 0; j < i; j++) {
      gsap.to(cards[j], {
        scale: () => 0.968 - j * 0.02,
        y: () => -8 - j * 6,
        filter: 'brightness(0.95) saturate(0.94)',
        ease: 'none',
        scrollTrigger: {
          trigger: card,
          start: 'top bottom',
          end: () => `top top+=${pinTop + i * stackOffset}`,
          scrub: 0.45,
          invalidateOnRefresh: true,
        },
      });
    }
  });

  ScrollTrigger.addEventListener('refreshInit', () => {
    cards.forEach((card, i) => {
      gsap.set(card, { clearProps: 'transform,filter,opacity' });
      gsap.set(card, { zIndex: 40 + i });
    });
  });

  ScrollTrigger.refresh();
}

function initEventsStackScroll() {
  if (eventsExperienceInited) return;
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  const section = document.getElementById('section-events');
  const scene = section?.querySelector('.events-stack-scene');
  if (!section || !scene) return;

  gsap.registerPlugin(ScrollTrigger);
  eventsExperienceInited = true;
  section.classList.add('events-section--stack-scroll');

  createEventsAmbient();

  const header = section.querySelector('.section-header');
  if (header) {
    gsap.from(header.children, {
      scrollTrigger: { trigger: header, start: 'top 85%', toggleActions: 'play none none none' },
      y: 32,
      opacity: 0,
      duration: 0.85,
      stagger: 0.1,
      ease: 'power3.out',
    });
  }

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = window.innerWidth < 768;
  if (reducedMotion || isMobile) {
    ScrollTrigger.refresh();
    return;
  }

  const bg = scene.querySelector('.events-stack-bg');
  const wraps = gsap.utils.toArray('.event-stack-card-wrap');
  if (!wraps.length) return;

  const pinTop = 88;
  const stackOffset = 18;
  const scrollPerCard = () => window.innerHeight * 0.88;
  const totalEnd = () => scrollPerCard() * wraps.length + window.innerHeight * 0.4;

  if (bg) {
    const bgImg = bg.querySelector('.events-stack-bg-image');
    ScrollTrigger.create({
      trigger: scene,
      start: 'top top',
      end: totalEnd,
      pin: bg,
      pinSpacing: false,
      invalidateOnRefresh: true,
    });
    if (bgImg) {
      gsap.fromTo(
        bgImg,
        { scale: 1.14, yPercent: -4 },
        {
          scale: 1,
          yPercent: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: scene,
            start: 'top top',
            end: totalEnd,
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        }
      );
    }
  }

  wraps.forEach((wrap, i) => {
    const card = wrap.querySelector('.event-stack-card');
    gsap.set(wrap, { zIndex: 40 + i, transformOrigin: 'center top' });
    if (card) gsap.set(card, { transformOrigin: 'center top' });

    ScrollTrigger.create({
      trigger: wrap,
      start: () => `top top+=${pinTop + i * stackOffset}`,
      endTrigger: wraps[wraps.length - 1],
      end: 'bottom bottom',
      pin: wrap,
      pinSpacing: false,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    });

    if (i === 0) return;

    gsap.fromTo(
      wrap,
      { y: () => window.innerHeight * 0.62, scale: 0.88, opacity: 0.55, rotation: -2.5 },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        rotation: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: wrap,
          start: 'top bottom',
          end: () => `top top+=${pinTop + i * stackOffset}`,
          scrub: 0.45,
          invalidateOnRefresh: true,
        },
      }
    );

    for (let j = 0; j < i; j++) {
      const prevWrap = wraps[j];
      const prevCard = prevWrap.querySelector('.event-stack-card');
      gsap.to(prevWrap, {
        scale: () => 0.965 - j * 0.022,
        y: () => -10 - j * 7,
        ease: 'none',
        scrollTrigger: {
          trigger: wrap,
          start: 'top bottom',
          end: () => `top top+=${pinTop + i * stackOffset}`,
          scrub: 0.45,
          invalidateOnRefresh: true,
        },
      });
      if (prevCard) {
        gsap.to(prevCard, {
          filter: 'brightness(0.94) saturate(0.92)',
          ease: 'none',
          scrollTrigger: {
            trigger: wrap,
            start: 'top bottom',
            end: () => `top top+=${pinTop + i * stackOffset}`,
            scrub: 0.45,
            invalidateOnRefresh: true,
          },
        });
      }
    }
  });

  ScrollTrigger.addEventListener('refreshInit', () => {
    wraps.forEach((wrap, i) => {
      gsap.set(wrap, { clearProps: 'transform,filter,opacity' });
      gsap.set(wrap, { zIndex: 40 + i });
      const card = wrap.querySelector('.event-stack-card');
      if (card) gsap.set(card, { clearProps: 'filter' });
    });
  });

  ScrollTrigger.refresh();
}

function animateEventNum(el) {
  const target = parseInt(el.dataset.num || el.textContent, 10);
  if (!target || typeof gsap === 'undefined') return;
  const counter = { val: 0 };
  gsap.to(counter, {
    val: target,
    duration: 1.1,
    ease: 'power2.out',
    onUpdate: () => {
      el.textContent = String(Math.round(counter.val)).padStart(2, '0');
    },
  });
}

function fireEventDaySparkle(group) {
  if (typeof confetti !== 'function') return;
  const rect = group.getBoundingClientRect();
  const x = (rect.left + rect.width / 2) / window.innerWidth;
  const y = Math.max(0.08, rect.top / window.innerHeight);
  const colors = ['#FFD700', '#FF6B00', '#8B1538', '#FFF8F0'];
  confetti({
    particleCount: 40,
    spread: 55,
    startVelocity: 28,
    origin: { x, y },
    colors,
    scalar: 0.85,
    ticks: 70,
  });
}

function createEventsAmbient() {
  const layer = document.getElementById('eventsAmbient');
  if (!layer || layer.children.length) return;
  const icons = ['🪷', '✨', '🏵️', '🪔', '🌺'];
  const count = window.innerWidth < 640 ? 8 : 14;
  for (let i = 0; i < count; i++) {
    const particle = document.createElement('span');
    particle.className = 'events-ambient-particle';
    particle.textContent = icons[i % icons.length];
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${14 + Math.random() * 16}s`;
    particle.style.animationDelay = `${Math.random() * 10}s`;
    layer.appendChild(particle);
  }
}

function initEventCardTilt(card) {
  if (window.matchMedia('(pointer: coarse)').matches) return;
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    gsap.to(card, {
      rotateY: x * 5,
      rotateX: -y * 3,
      duration: 0.35,
      ease: 'power2.out',
      transformPerspective: 900,
    });
  });
  card.addEventListener('mouseleave', () => {
    gsap.to(card, { rotateY: 0, rotateX: 0, duration: 0.45, ease: 'power2.out' });
  });
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
loadYouTubeMusic();

function initScratchCards() {
  const countdownSection = document.getElementById('section-countdown');

  requestAnimationFrame(() => {
    if (countdownSection) countdownSection.classList.add('is-visible');
  });

  initScratchCardInstance({
    card: document.getElementById('scratchCard'),
    canvas: document.getElementById('scratchCanvas'),
    overlay: document.getElementById('scratchOverlay'),
    hint: document.getElementById('scratchHint'),
    burst: document.getElementById('paperBombBurst'),
    section: countdownSection,
  });
}

function initScratchCardInstance({ card, canvas, overlay, hint, burst, section }) {
  if (!card || !canvas || !overlay) return;

  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  let width = 0;
  let height = 0;
  let dpr = 1;
  let bleed = 6;
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
    width = rect.width;
    height = rect.height;
    const drawW = width + bleed * 2;
    const drawH = height + bleed * 2;
    canvas.width = Math.ceil(drawW * dpr);
    canvas.height = Math.ceil(drawH * dpr);
    canvas.style.width = `${drawW}px`;
    canvas.style.height = `${drawH}px`;
    canvas.style.left = `${-bleed}px`;
    canvas.style.top = `${-bleed}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (!revealed) drawCover();
  }

  function drawCover() {
    coverReady = false;
    ctx.globalCompositeOperation = 'source-over';
    ctx.clearRect(0, 0, width + bleed * 2, height + bleed * 2);

    ctx.fillStyle = '#C9A227';
    ctx.fillRect(0, 0, width + bleed * 2, height + bleed * 2);

    const x = bleed;
    const y = bleed;
    const w = width;
    const h = height;

    const bg = ctx.createLinearGradient(x, y, x + w, y + h);
    bg.addColorStop(0, '#FFD700');
    bg.addColorStop(0.25, '#F5C842');
    bg.addColorStop(0.5, '#D4AF37');
    bg.addColorStop(0.75, '#FF9933');
    bg.addColorStop(1, '#C9A227');
    ctx.fillStyle = bg;
    ctx.fillRect(x - 3, y - 3, w + 6, h + 6);

    ctx.globalAlpha = 0.1;
    for (let i = 0; i < w + 12; i += 12) {
      for (let j = 0; j < h + 12; j += 12) {
        if ((i + j) % 24 === 0) {
          ctx.fillStyle = 'rgba(255, 193, 37, 0.45)';
          ctx.fillRect(x + i - 6, y + j - 6, 6, 6);
        }
      }
    }
    ctx.globalAlpha = 1;

    const shine = ctx.createLinearGradient(x, y, x + w * 0.55, y + h);
    shine.addColorStop(0, 'rgba(255, 215, 0, 0.22)');
    shine.addColorStop(0.45, 'rgba(255, 215, 0, 0.05)');
    shine.addColorStop(1, 'rgba(255, 215, 0, 0)');
    ctx.fillStyle = shine;
    ctx.fillRect(x - 2, y - 2, w + 4, h + 4);

    ctx.strokeStyle = 'rgba(139, 21, 56, 0.18)';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([8, 6]);
    ctx.strokeRect(x + 12, y + 12, w - 24, h - 24);
    ctx.setLineDash([]);

    coverReady = true;
  }

  function getPos(e) {
    const rect = overlay.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return { x: clientX - rect.left + bleed, y: clientY - rect.top + bleed };
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
    for (let py = 0; py < canvas.height; py += sample) {
      for (let px = 0; px < canvas.width; px += sample) {
        const i = (py * canvas.width + px) * 4 + 3;
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
    if (hint) hint.classList.add('is-hidden');

    card.classList.add('is-revealed', 'paper-bomb-pop');
    if (section) section.classList.add('is-revealed');

    const rect = card.getBoundingClientRect();
    const originX = (rect.left + rect.width / 2) / window.innerWidth;
    const originY = (rect.top + rect.height / 2) / window.innerHeight;

    firePaperBomb(originX, originY);

    if (burst) {
      burst.classList.remove('is-active');
      void burst.offsetWidth;
      burst.classList.add('is-active');
    }

    setTimeout(() => overlay.classList.add('is-revealing'), 180);
    setTimeout(() => card.classList.remove('paper-bomb-pop'), 900);
    setTimeout(() => overlay.classList.add('is-done'), 950);
  }

  function onStart(e) {
    if (revealed) return;
    e.preventDefault();
    isDrawing = true;
    if (hint) hint.classList.add('is-hidden');
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

  overlay.addEventListener('mousedown', onStart);
  overlay.addEventListener('mousemove', onMove);
  window.addEventListener('mouseup', onEnd);
  overlay.addEventListener('touchstart', onStart, { passive: false });
  overlay.addEventListener('touchmove', onMove, { passive: false });
  overlay.addEventListener('touchend', onEnd);
  overlay.addEventListener('touchcancel', onEnd);

  const ro = new ResizeObserver(() => {
    if (!revealed) resize();
  });
  ro.observe(overlay);
  requestAnimationFrame(resize);
}


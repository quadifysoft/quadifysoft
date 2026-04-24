const LEGAL_COPY = {
  privacy: {
    en: {
      page_title: 'Quadify Soft Privacy Policy',
      page_description: 'Privacy Policy for Quadify Soft website inquiries and communication.',
      og_title: 'Quadify Soft Privacy Policy',
      og_description: 'Privacy Policy for website inquiry handling and communication at Quadify Soft.',
      back: 'Back to Quadify Soft',
      updated: 'Last updated: April 24, 2026',
      h1: 'Privacy Policy',
      s1_h: '1. What we collect',
      s1_p: 'When you contact us through the website, we may collect your name, email address, company name, selected service, and message content.',
      s2_h: '2. Why we use it',
      s2_l1: 'To respond to your inquiry.',
      s2_l2: 'To evaluate project fit and prepare a relevant proposal.',
      s2_l3: 'To maintain communication related to potential collaboration.',
      s3_h: '3. Data sharing',
      s3_p: 'We do not sell your personal information. We may process contact form submissions through trusted technical service providers required to operate the website inquiry functionality.',
      s4_h: '4. Data retention',
      s4_p: 'Inquiry data is retained only for as long as necessary for communication, legal obligations, and business operations.',
      s5_h: '5. Your rights',
      s5_p: 'You may request access, correction, or deletion of your personal data by contacting office@quadifysoft.rs.',
      s6_h: '6. Contact',
      s6_p: 'For privacy questions, contact us at office@quadifysoft.rs or call +381 60 311 5955.'
    },
    sr: {
      page_title: 'Quadify Soft Privatnost',
      page_description: 'Politika privatnosti za upite i komunikaciju preko Quadify Soft sajta.',
      og_title: 'Quadify Soft Privatnost',
      og_description: 'Politika privatnosti za obradu upita i komunikaciju na Quadify Soft sajtu.',
      back: 'Nazad na Quadify Soft',
      updated: 'Poslednje ažuriranje: 24. april 2026.',
      h1: 'Politika privatnosti',
      s1_h: '1. Koje podatke prikupljamo',
      s1_p: 'Kada nas kontaktirate preko sajta, možemo prikupiti vaše ime i prezime, email adresu, naziv kompanije, odabranu uslugu i sadržaj poruke.',
      s2_h: '2. Zašto ih koristimo',
      s2_l1: 'Da odgovorimo na vaš upit.',
      s2_l2: 'Da procenimo da li projekat odgovara našem radu i pripremimo relevantan predlog.',
      s2_l3: 'Da održavamo komunikaciju u vezi sa mogućom saradnjom.',
      s3_h: '3. Deljenje podataka',
      s3_p: 'Ne prodajemo vaše lične podatke. Podatke iz kontakt forme možemo obrađivati preko pouzdanih tehničkih servisnih partnera koji su potrebni za rad funkcionalnosti upita na sajtu.',
      s4_h: '4. Čuvanje podataka',
      s4_p: 'Podaci iz upita čuvaju se samo onoliko dugo koliko je potrebno za komunikaciju, zakonske obaveze i redovno poslovanje.',
      s5_h: '5. Vaša prava',
      s5_p: 'Možete zatražiti pristup, ispravku ili brisanje svojih ličnih podataka slanjem zahteva na office@quadifysoft.rs.',
      s6_h: '6. Kontakt',
      s6_p: 'Za pitanja u vezi sa privatnošću pišite nam na office@quadifysoft.rs ili pozovite +381 60 311 5955.'
    }
  },
  terms: {
    en: {
      page_title: 'Quadify Soft Terms of Service',
      page_description: 'Terms of Service for Quadify Soft website use and project communication.',
      og_title: 'Quadify Soft Terms of Service',
      og_description: 'Terms of Service for website use and project communication at Quadify Soft.',
      back: 'Back to Quadify Soft',
      updated: 'Last updated: April 24, 2026',
      h1: 'Terms of Service',
      s1_h: '1. Website purpose',
      s1_p: 'This website provides information about Quadify Soft services and communication channels for project inquiries.',
      s2_h: '2. Inquiry communication',
      s2_p: 'Submitting a contact inquiry does not create a binding service agreement. Any project engagement is defined separately by written contract.',
      s3_h: '3. Intellectual property',
      s3_p: 'All site content, branding, and materials are owned by Quadify Soft unless explicitly stated otherwise.',
      s4_h: '4. Limitation of liability',
      s4_p: 'Website content is provided for informational purposes. Quadify Soft is not liable for indirect damages resulting from use of the website.',
      s5_h: '5. Changes',
      s5_p: 'We may update these terms at any time. The date above indicates the latest revision.',
      s6_h: '6. Contact',
      s6_p: 'Questions about these terms can be sent to office@quadifysoft.rs or discussed by phone at +381 60 311 5955.'
    },
    sr: {
      page_title: 'Quadify Soft Uslovi korišćenja',
      page_description: 'Uslovi korišćenja za Quadify Soft sajt i komunikaciju u vezi sa projektima.',
      og_title: 'Quadify Soft Uslovi korišćenja',
      og_description: 'Uslovi korišćenja za sajt i komunikaciju u vezi sa projektima na Quadify Soft sajtu.',
      back: 'Nazad na Quadify Soft',
      updated: 'Poslednje ažuriranje: 24. april 2026.',
      h1: 'Uslovi korišćenja',
      s1_h: '1. Svrha sajta',
      s1_p: 'Ovaj sajt pruža informacije o uslugama kompanije Quadify Soft i kanalima komunikacije za projektne upite.',
      s2_h: '2. Komunikacija kroz upit',
      s2_p: 'Slanje upita preko kontakt forme ne predstavlja obavezujući ugovor o usluzi. Svaki projektni angažman definiše se posebno pisanim ugovorom.',
      s3_h: '3. Intelektualna svojina',
      s3_p: 'Sav sadržaj sajta, brending i materijali pripadaju kompaniji Quadify Soft, osim ako nije izričito navedeno drugačije.',
      s4_h: '4. Ograničenje odgovornosti',
      s4_p: 'Sadržaj sajta služi isključivo u informativne svrhe. Quadify Soft ne odgovara za posrednu štetu nastalu korišćenjem sajta.',
      s5_h: '5. Izmene',
      s5_p: 'Možemo ažurirati ove uslove u bilo kom trenutku. Datum iznad označava poslednju verziju.',
      s6_h: '6. Kontakt',
      s6_p: 'Pitanja u vezi sa ovim uslovima možete poslati na office@quadifysoft.rs ili nas pozvati na +381 60 311 5955.'
    }
  }
};

function setLegalLang(lang) {
  const page = document.body.dataset.page;
  const copy = LEGAL_COPY[page]?.[lang] || LEGAL_COPY[page]?.sr;
  if (!copy) return;

  localStorage.setItem('qs_lang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-legal]').forEach((el) => {
    const key = el.getAttribute('data-legal');
    if (copy[key]) el.textContent = copy[key];
  });

  const title = document.getElementById('legalTitle');
  const desc = document.getElementById('legalDescription');
  const ogTitle = document.getElementById('legalOgTitle');
  const ogDesc = document.getElementById('legalOgDescription');
  const twTitle = document.getElementById('legalTwitterTitle');
  const twDesc = document.getElementById('legalTwitterDescription');

  if (title) document.title = copy.page_title;
  if (desc) desc.setAttribute('content', copy.page_description);
  if (ogTitle) ogTitle.setAttribute('content', copy.og_title);
  if (ogDesc) ogDesc.setAttribute('content', copy.og_description);
  if (twTitle) twTitle.setAttribute('content', copy.og_title);
  if (twDesc) twDesc.setAttribute('content', copy.og_description);

  const enBtn = document.getElementById('legalLangEn');
  const srBtn = document.getElementById('legalLangSr');
  if (enBtn) {
    enBtn.classList.toggle('active', lang === 'en');
    enBtn.setAttribute('aria-pressed', lang === 'en' ? 'true' : 'false');
  }
  if (srBtn) {
    srBtn.classList.toggle('active', lang === 'sr');
    srBtn.setAttribute('aria-pressed', lang === 'sr' ? 'true' : 'false');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const stored = localStorage.getItem('qs_lang');
  const initial = stored === 'en' || stored === 'sr' ? stored : 'sr';

  document.getElementById('legalLangEn')?.addEventListener('click', () => setLegalLang('en'));
  document.getElementById('legalLangSr')?.addEventListener('click', () => setLegalLang('sr'));

  setLegalLang(initial);
});

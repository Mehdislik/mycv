document.addEventListener('DOMContentLoaded', () => {
  const content = {
    en: {
      aboutTitle: 'About Me',
      aboutText:
        'Engineer with a strong background in Artificial Intelligence, IoT, and network systems, with research interests in AI-driven networking, edge computing, privacy, cybersecurity, and the design of next-generation intelligent networks and infrastructures.',
      cvTitle: 'My CV',
      cvFile: 'assets/cv-en.pdf',
      skillsTitle: 'Skills',
    },

    fr: {
      aboutTitle: 'À propos de moi',
      aboutText:
        "Ingénieur avec une solide expérience en intelligence artificielle, IoT et systèmes réseau, avec des intérêts de recherche portant sur les réseaux pilotés par l’IA, l’edge computing, la confidentialité, la cybersécurité et la conception des réseaux et infrastructures intelligents de nouvelle génération.",
      cvTitle: 'Mon CV',
      cvFile: 'assets/cv-fr.pdf',
      skillsTitle: 'Compétences',
    },
  };

  // Elements to update
  const aboutTitle = document.getElementById('about-title');
  const aboutText = document.getElementById('about-text');
  const cvTitle = document.getElementById('cv-title');
  const cvViewer = document.getElementById('cv-viewer');
  const skillsTitle = document.getElementById('skills-title');

  // Buttons
  const btnEn = document.getElementById('btn-en');
  const btnFr = document.getElementById('btn-fr');

  // Function to update content
  function updateContent(lang) {
    const data = content[lang];

    aboutTitle.textContent = data.aboutTitle;
    aboutText.textContent = data.aboutText;
    cvTitle.textContent = data.cvTitle;
    skillsTitle.textContent = data.skillsTitle;

    // Update CV PDF
    cvViewer.src = data.cvFile;

    // Update HTML language
    document.documentElement.lang = lang;
  }

  // Event listeners
  btnEn.addEventListener('click', () => updateContent('en'));
  btnFr.addEventListener('click', () => updateContent('fr'));

  // Default language
  updateContent('fr');
});

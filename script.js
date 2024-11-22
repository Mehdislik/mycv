document.addEventListener('DOMContentLoaded', () => {
    const content = {
      en: {
        aboutTitle: 'About Me',
        aboutText: 'I am a motivated DevOps Engineer skilled in cloud platforms, CI/CD pipelines, and automation. Passionate about creating scalable infrastructure and optimizing system performance.',
        cvTitle: 'My CV',
        skillsTitle: 'Skills',
      },
      fr: {
        aboutTitle: 'À propos de moi',
        aboutText: "Je suis un ingénieur DevOps motivé, spécialisé dans les plateformes cloud, les pipelines CI/CD et l'automatisation. Passionné par la création d'infrastructures évolutives et l'optimisation des performances des systèmes.",
        cvTitle: 'Mon CV',
        skillsTitle: 'Compétences',
      },
    };
  
    // Elements to update
    const aboutTitle = document.getElementById('about-title');
    const aboutText = document.getElementById('about-text');
    const cvTitle = document.getElementById('cv-title');
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
    }
  
    // Event listeners for buttons
    btnEn.addEventListener('click', () => updateContent('en'));
    btnFr.addEventListener('click', () => updateContent('fr'));
  
    // Default language is French
    updateContent('fr');
  });
  
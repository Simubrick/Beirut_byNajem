// Navigation mobile
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', isOpen);
    navToggle.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
  });

  // Fermer le menu quand on clique sur un lien
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Ouvrir le menu');
    });
  });
}

// Filtrage des catégories du menu
const tabs = document.querySelectorAll('.tab');
const groups = document.querySelectorAll('.menu-group');

if (tabs.length && groups.length) {
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const filter = tab.dataset.filter;

      // Active tab
      tabs.forEach((t) => t.classList.remove('is-active'));
      tab.classList.add('is-active');

      // Afficher / masquer les groupes
      groups.forEach((group) => {
        if (filter === 'tout' || group.dataset.category === filter) {
          group.hidden = false;
        } else {
          group.hidden = true;
        }
      });
    });
  });
}

// Animations de révélation au défilement
const revealElements = document.querySelectorAll('.reveal');

if (revealElements.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  revealElements.forEach((el) => observer.observe(el));
}

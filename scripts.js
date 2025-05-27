// Scroll suave para anclas internas
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Modo claro/oscuro (opcional)
const toggleTheme = () => {
  document.body.classList.toggle('dark-mode');
};

// Puedes añadir un botón en tu HTML y vincularlo a esta función

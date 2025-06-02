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

// Efecto de escritura
const text = "¡Hola! Soy Katherine Camacho, desarrolladora de software.";
let index = 0;
function typeEffect() {
  const target = document.getElementById("typing");
  if (index < text.length) {
    target.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 50);
  }
}
window.onload = typeEffect;

// Cursor interactivo con partículas
document.addEventListener("mousemove", (e) => {
  const particle = document.createElement("div");
  particle.className = "particle";
  particle.style.left = `${e.clientX}px`;
  particle.style.top = `${e.clientY}px`;
  document.body.appendChild(particle);
  setTimeout(() => particle.remove(), 500);
});

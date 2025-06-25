// Navbar oculto al hacer scroll
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-80px";
  } else {
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;
});

// Carrusel automático
let slides = document.querySelectorAll(".slide");
let index = 0;

function showNextSlide() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}

setInterval(showNextSlide, 5000);

// Validación de formulario contacto
const form = document.getElementById('formulario');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    document.querySelector('.confirmacion').style.display = 'block';
    form.reset();
  });
}

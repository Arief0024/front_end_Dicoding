let slideIndex = 0;
const slides = document.querySelector(".slider-container");

function showSlide(n) {
  if (n > slides.children.length - 1) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.children.length - 1;
  } else {
    slideIndex = n;
  }

  slides.style.transform = `translateX(${-slideIndex * 100}%)`;
}

function nextSlide() {
  showSlide(slideIndex + 1);
}

function prevSlide() {
  showSlide(slideIndex - 1);
}

function autoSlide() {
  nextSlide();
}

// Auto slide setiap 5 detik
setInterval(autoSlide, 5000);

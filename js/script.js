let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.querySelectorAll(".slides img");
  let dots = document.querySelectorAll(".dot");
  slides.forEach((slide, index) => {
    slide.classList.remove("active");
    dots[index].classList.remove("active");
    if (index === slideIndex) {
      slide.classList.add("active");
      dots[index].classList.add("active");
    }
  });
  slideIndex = (slideIndex + 1) % slides.length;
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function plusSlides(n) {
  slideIndex += n;
  if (slideIndex >= document.querySelectorAll(".slides img").length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = document.querySelectorAll(".slides img").length - 1;
  }
  showSlides();
}

function currentSlide(n) {
  slideIndex = n - 1;
  showSlides();
}

window.addEventListener("scroll", function() {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
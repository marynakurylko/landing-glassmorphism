/* ================================
   BURGER MENU TOGGLE
================================== */

const burger = document.getElementById("burger");
const navMenu = document.getElementById("nav-menu");

burger.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("active");
  burger.classList.toggle("active");
  burger.setAttribute("aria-expanded", isOpen);
});

document.querySelectorAll(".nav__link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    burger.classList.remove("active");
    burger.setAttribute("aria-expanded", false);
  });
});

/* ================================
   PROGRESS BAR ON SCROLL
================================== */

const progressBar = document.createElement("div");
progressBar.style.position = "fixed";
progressBar.style.top = "0";
progressBar.style.left = "0";
progressBar.style.height = "4px";
progressBar.style.background = "linear-gradient(90deg, #9b5cff, #ff4f81)";
progressBar.style.width = "0";
progressBar.style.zIndex = "9999";
document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;
  progressBar.style.width = progress + "%";
});

/* ================================
   RIPPLE EFFECT FOR BUTTONS
================================== */

document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", function (e) {
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");
    ripple.style.left = `${e.clientX - e.target.offsetLeft}px`;
    ripple.style.top = `${e.clientY - e.target.offsetTop}px`;
    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

/* ================================
   SCROLL UP BUTTON
================================== */

const scrollBtn = document.getElementById("scroll-up");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scrollBtn.classList.add("visible");
  } else {
    scrollBtn.classList.remove("visible");
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

/* ================================
   SLIDER 
================================== */

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".testimonials__slider");
  const testimonials = document.querySelectorAll(".testimonial");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");
  const dotsContainer = document.querySelector(".slider-dots");

  let currentIndex = 0;
  let autoplayInterval;

  // Створюємо bullets
  testimonials.forEach((_, index) => {
    const dot = document.createElement("button");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
      currentIndex = index;
      updateSliderPosition();
      resetAutoplay();
    });
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll("button");

  function getVisibleSlides() {
    if (window.innerWidth >= 1200) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  }

  function updateSliderPosition() {
    const slideWidth = testimonials[0].offsetWidth;
    const gap = parseInt(getComputedStyle(slider).gap) || 0;
    const move = (slideWidth + gap) * currentIndex;
    slider.style.transform = `translateX(-${move}px)`;
    dots.forEach((dot, i) =>
      dot.classList.toggle("active", i === currentIndex)
    );
  }

  function nextSlide() {
    const visibleSlides = getVisibleSlides();
    if (currentIndex < testimonials.length - visibleSlides) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateSliderPosition();
  }

  function prevSlide() {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = testimonials.length - getVisibleSlides();
    }
    updateSliderPosition();
  }

  function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, 4000);
  }

  function stopAutoplay() {
    clearInterval(autoplayInterval);
  }

  function resetAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  nextBtn.addEventListener("click", () => {
    nextSlide();
    resetAutoplay();
  });

  prevBtn.addEventListener("click", () => {
    prevSlide();
    resetAutoplay();
  });

  slider.addEventListener("mouseenter", stopAutoplay);
  slider.addEventListener("mouseleave", startAutoplay);

  window.addEventListener("resize", () => {
    updateSliderPosition();
  });

  updateSliderPosition();
  startAutoplay();
});

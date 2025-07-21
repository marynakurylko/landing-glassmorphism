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

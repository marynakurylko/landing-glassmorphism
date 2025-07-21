/* =============================
   Fade-in on scroll
============================= */
const sections = document.querySelectorAll("section, .footer, header");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const fadeItems = entry.target.querySelectorAll(".fade-in");
        fadeItems.forEach((el, index) => {
          el.style.transitionDelay = `${index * 200}ms`;
          el.classList.add("visible");
        });
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

sections.forEach((section) => observer.observe(section));

/* =============================
   PARALLAX
============================= */

const hero = document.querySelector(".hero");

hero.addEventListener("mousemove", (e) => {
  const y = e.clientY / window.innerHeight - 0.5;
  hero.style.setProperty("--parallax-y", `${y * 20}px`);
});

const fadeElements = document.querySelectorAll(".fade-in");

fadeElements.forEach((el, index) => {
  el.style.transitionDelay = `${index * 200}ms`;
});

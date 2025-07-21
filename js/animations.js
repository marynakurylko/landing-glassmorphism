/* Fade-in on scroll */
const sections = document.querySelectorAll("section, .footer, header"); // будь-які контейнери

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const fadeItems = entry.target.querySelectorAll(".fade-in");
        fadeItems.forEach((el, index) => {
          el.style.transitionDelay = `${index * 200}ms`; // 0.2s між елементами
          el.classList.add("visible");
        });
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

sections.forEach((section) => observer.observe(section));

// PARALLAX

const hero = document.querySelector(".hero");

hero.addEventListener("mousemove", (e) => {
  // const x = e.clientX / window.innerWidth - 0.5;
  const y = e.clientY / window.innerHeight - 0.5;
  // hero.style.setProperty("--parallax-x", `${x * 5}px`);
  hero.style.setProperty("--parallax-y", `${y * 20}px`);
});

const fadeElements = document.querySelectorAll(".fade-in");

fadeElements.forEach((el, index) => {
  // Затримка: 200ms * index
  el.style.transitionDelay = `${index * 200}ms`;
});

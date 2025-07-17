/* Fade-in on scroll */
const elements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

elements.forEach((el) => observer.observe(el));

// PARALLAX

const hero = document.querySelector(".hero");

hero.addEventListener("mousemove", (e) => {
  // const x = e.clientX / window.innerWidth - 0.5;
  const y = e.clientY / window.innerHeight - 0.5;
  // hero.style.setProperty("--parallax-x", `${x * 5}px`);
  hero.style.setProperty("--parallax-y", `${y * 20}px`);
});

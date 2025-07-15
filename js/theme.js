/* ================================
   THEME SWITCHER (Light/Dark)
================================== */
const themeToggle = document.getElementById("theme-switcher");
const root = document.documentElement;

// Load theme from localStorage
const savedTheme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";

  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
  const icon = themeToggle.querySelector("i");
  if (theme === "dark") {
    icon.className = "fas fa-sun"; // Light mode icon
  } else {
    icon.className = "fas fa-moon"; // Dark mode icon
  }
}

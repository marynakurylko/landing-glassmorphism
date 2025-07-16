const root = document.documentElement;
const desktopSwitcher = document.getElementById("theme-toggle");
const mobileSwitcher = document.getElementById("theme-toggle-mobile");

const savedTheme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", savedTheme);

if (desktopSwitcher) desktopSwitcher.checked = savedTheme === "dark";
if (mobileSwitcher) mobileSwitcher.checked = savedTheme === "dark";

function toggleTheme(isDark) {
  const newTheme = isDark ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
}

if (desktopSwitcher) {
  desktopSwitcher.addEventListener("change", () => {
    toggleTheme(desktopSwitcher.checked);
    if (mobileSwitcher) mobileSwitcher.checked = desktopSwitcher.checked;
  });
}

if (mobileSwitcher) {
  mobileSwitcher.addEventListener("change", () => {
    toggleTheme(mobileSwitcher.checked);
    if (desktopSwitcher) desktopSwitcher.checked = mobileSwitcher.checked;
  });
}

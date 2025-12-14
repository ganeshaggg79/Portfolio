// Theme toggle
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toggle.textContent =
    document.body.classList.contains("light") ? "☀️" : "🌙";
});

// Scroll animation
const sections = document.querySelectorAll("section");

const reveal = () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.classList.add("show");
    }
  });
};

window.addEventListener("scroll", reveal);
reveal();


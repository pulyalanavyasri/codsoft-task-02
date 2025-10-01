// Theme toggle: Light / Dark Mode
const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");

  if (document.body.classList.contains("light-theme")) {
    document.body.style.background = "linear-gradient(135deg, #f8f9fa, #e0e0e0)";
    document.body.style.color = "#333";
    toggleBtn.textContent = "☀";
  } else {
    document.body.style.background = "linear-gradient(135deg, #0f2027, #203a43, #2c5364)";
    document.body.style.color = "#fff";
    toggleBtn.textContent = "🌙";
  }
});
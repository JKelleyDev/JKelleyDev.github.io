import { initThreeJS } from './three-setup.js';

// Smooth scroll to sections
document.querySelectorAll("nav button").forEach(button => {
  button.addEventListener("click", (e) => {
    const sectionId = e.target.getAttribute("data-section");
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Initialize the Three.js scene
initThreeJS();

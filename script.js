// Scroll Reveal Animation
document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".scroll-reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  });

  reveals.forEach((el) => {
    el.classList.add("hidden");
    observer.observe(el);
  });
});
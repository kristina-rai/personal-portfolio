document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  const options = {
    root: null,
    rootMargin: "-30% 0px -50% 0px", // Triggers color when section fills the screen center
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");

        navLinks.forEach((link) => {
          // Check if the link's href matches the visible section's ID
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active-section");
          } else {
            link.classList.remove("active-section");
          }
        });
      }
    });
  }, options);

  sections.forEach((section) => observer.observe(section));
});
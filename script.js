document.addEventListener("DOMContentLoaded", () => {
  // 1. Grab all sections and your original nav items
  const sections = document.querySelectorAll("section[id]");
  const navItems = document.querySelectorAll("[data-nav]");

  const options = {
    root: null,
    rootMargin: "-40% 0px -40% 0px", // Triggers when the section is in the middle of the screen
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");

        navItems.forEach((item) => {
          if (item.getAttribute("data-nav") === id) {
            // Make the active one yellow
            item.style.color = "#E2A245"; 
          } else {
            // Keep the inactive ones white
            item.style.color = "#FFFFFF"; 
          }
        });
      }
    });
  }, options);

  sections.forEach((section) => observer.observe(section));
});
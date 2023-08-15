document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll(".project");
    const parallaxSections = document.querySelectorAll(".parallax");
  
    const offset = 50; // Offset for smooth scrolling
  
    projects.forEach((project, index) => {
      project.addEventListener("click", () => {
        window.scrollTo({
          top: parallaxSections[index].offsetTop - offset,
          behavior: "smooth",
        });
      });
    });
  });
  
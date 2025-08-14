document.addEventListener("DOMContentLoaded", function() {
    const aboutLink = document.getElementById("about-link");
    const aboutSection = document.getElementById("about");

    if (aboutLink && aboutSection) {
        aboutLink.addEventListener("click", function(e) {
            e.preventDefault(); // stop link navigation
            aboutSection.scrollIntoView({ behavior: "smooth" });
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
  const projectsLink = document.getElementById("projects-link");
  if (!projectsLink) return;

  projectsLink.addEventListener("click", function (e) {
    e.preventDefault();
    const currentY = window.scrollY;
    window.scrollTo({
      top: currentY + 35, // scroll down 30px
      behavior: "smooth"
    });
  });
});


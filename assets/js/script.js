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
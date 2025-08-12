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



document.addEventListener("DOMContentLoaded", () => {
  // 1) On-load header entrance
  document.documentElement.classList.add("page-ready");

  // 2) Reveal-on-scroll
  const revealEls = document.querySelectorAll(
    ".reveal, .image-grid > a, .section"
  );

  // Mark grid children & sections as reveal if not already
  revealEls.forEach(el => el.classList.add("reveal"));

  // Videos: start/stop when visible
  const handleVideo = (el, visible) => {
    const vid = el.tagName === "VIDEO" ? el : el.querySelector("video");
    if (!vid) return;
    // Only try to play if muted/inline (your markup already is)
    if (visible) {
      // Some mobile browsers require user gesture; ignore if blocked
      const p = vid.play?.();
      if (p && typeof p.catch === "function") p.catch(() => {});
    } else {
      vid.pause?.();
    }
  };

  // IntersectionObserver for reveals
  const io = "IntersectionObserver" in window
    ? new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            handleVideo(entry.target, true);
            // If you only want it once, unobserve:
            io.unobserve(entry.target);
          } else {
            // If you want to re-animate when scrolling back, comment out unobserve above
            handleVideo(entry.target, false);
          }
        });
      }, { rootMargin: "0px 0px -10% 0px", threshold: 0.1 })
    : null;

  // Observe each reveal element
  document.querySelectorAll(".reveal").forEach(el => {
    if (io) {
      io.observe(el);
    } else {
      // Fallback: just show everything
      el.classList.add("is-visible");
    }
  });
});
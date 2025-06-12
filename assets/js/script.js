document.addEventListener("DOMContentLoaded", function () {
  const fadeInElements = document.querySelectorAll('.overlay-title');
  if (fadeInElements.length) {
    const fadeInObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          fadeInObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    fadeInElements.forEach(el => fadeInObserver.observe(el));
  }
});
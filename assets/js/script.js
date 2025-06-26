document.addEventListener('DOMContentLoaded', () => {
  // Fade-in .overlay-title on scroll
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

  // Ensure all videos are muted and autoplay-compatible
  const videos = document.querySelectorAll('video');
  console.log (`Found ${videos.length} video(s) on the page.`);
  videos.forEach(video => {
    video.muted = true;
    video.autoplay = true;
    video.playsInline = true;
    video.loop = true;
    video.load();
  });
});
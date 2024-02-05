const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible-section');
    }
    else {
        entry.target.classList.remove('visible-section');
    }
  });
});

const hiddenSections = document.querySelectorAll('.hidden-section');
hiddenSections.forEach((section) => {
    observer.observe(section);
    }
);
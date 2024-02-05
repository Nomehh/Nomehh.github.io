const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
    else {
        entry.target.classList.remove('visible');
    }
  });
});

const hiddenSections = document.querySelectorAll('.hidden');
hiddenSections.forEach((section) => {
    observer.observe(section);
    }
);
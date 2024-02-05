const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible-section');
      console.log(entry.target.id,'visible');
    }
    else {
        entry.target.classList.remove('visible-section');
        console.log(entry.target.id, 'invisible');
    }
  });
});

const hiddenSections = document.querySelectorAll('.hidden-section');
hiddenSections.forEach((section) => {
    observer.observe(section);
    }
);
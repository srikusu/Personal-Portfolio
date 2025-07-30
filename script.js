// Smooth navigation highlight
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function() {
    document.querySelectorAll('nav a').forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

// Simple fade-in animation on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
});
document.querySelectorAll('section').forEach(sec => observer.observe(sec));

// Add to CSS (portfolio.css):
/*
.fade-in {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.6s, transform 0.6s;
}
section {
  opacity: 0;
  transform: translateY(30px);
  transition: none;
}
*/

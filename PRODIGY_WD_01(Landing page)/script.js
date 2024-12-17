// Select the navigation bar
const navbar = document.getElementById('navbar');

// Add an event listener for the scroll event
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled'); // Add 'scrolled' class
  } else {
    navbar.classList.remove('scrolled'); // Remove 'scrolled' class
  }
});

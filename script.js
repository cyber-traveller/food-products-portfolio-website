document.querySelectorAll('.product').forEach(product => {
    product.addEventListener('click', () => {
      alert('More product details coming soon!');
    });
  });
 // Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navIcon = hamburger.querySelector('i');
  const overlay = document.querySelector('.overlay'); // For overlay functionality

  // Function to toggle navigation menu
  const toggleMenu = () => {
      navLinks.classList.toggle('active');
      overlay.classList.toggle('active'); // Toggle overlay visibility

      // Toggle the icon between hamburger and close
      if (navLinks.classList.contains('active')) {
          navIcon.classList.remove('fa-bars');
          navIcon.classList.add('fa-times');
      } else {
          navIcon.classList.remove('fa-times');
          navIcon.classList.add('fa-bars');
      }
  };

  // Event listener for hamburger icon click
  hamburger.addEventListener('click', toggleMenu);

  // Event listeners for navigation links to close the menu upon selection
  const navItems = document.querySelectorAll('.nav-links li a');
  navItems.forEach(item => {
      item.addEventListener('click', () => {
          if (navLinks.classList.contains('active')) {
              navLinks.classList.remove('active');
              overlay.classList.remove('active');
              navIcon.classList.remove('fa-times');
              navIcon.classList.add('fa-bars');
          }
      });
  });

  // Event listener for overlay click to close the menu
  overlay.addEventListener('click', () => {
      if (navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
          overlay.classList.remove('active');
          navIcon.classList.remove('fa-times');
          navIcon.classList.add('fa-bars');
      }
  });

  // Optional: Handle keyboard accessibility (e.g., Enter key)
  hamburger.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleMenu();
      }
  });
});

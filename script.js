/**
 * PINK FLOYD WEBSITE - MAIN SCRIPT
 * Handles: 
 * - Navigation
 * - Interactive elements
 * - Album-specific behaviors
 */

/* Set the width of the side navigation to 280px */
function openNav() {
  document.getElementById("mySidenav").style.width = "280px";
  document.getElementById("main").style.marginLeft = "280px";
  document.querySelector(".menu-icon").style.opacity = "0";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.querySelector(".menu-icon").style.opacity = "1";
}

// Close nav when clicking outside on mobile
document.addEventListener('click', function(event) {
  const sidenav = document.getElementById('mySidenav');
  const menuIcon = document.querySelector('.menu-icon');
  
  if (window.innerWidth > 768) return;
  
  if (!sidenav.contains(event.target) && event.target !== menuIcon) {
      closeNav();
  }
});

// Newsletter form handling
document.querySelector('.newsletter-form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for subscribing! This is a demo form.');
  this.reset();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Highlight active navigation link based on scroll position
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.sidenav a');
  
  let current = '';
  sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
          current = section.getAttribute('id');
      }
  });
  
  navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}` || 
          link.getAttribute('href').includes(current)) {
          link.classList.add('active');
      }
  });
});
  // Close nav when clicking outside (mobile only)
  document.addEventListener('click', function(event) {
    const sidenav = document.getElementById('mySidenav');
    const menuIcon = document.querySelector('.menu-icon');
    
    if (window.innerWidth <= 1024) {
      if (!sidenav.contains(event.target) && event.target !== menuIcon) {
        closeNav();
      }
    }
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
        closeNav();
      }
    });
  });
  
  // Album-specific behaviors
  function initAlbumFeatures() {
    // Prism effect for DSOTM
    if (document.body.classList.contains('dsotm')) {
      const hero = document.querySelector('.hero');
      const prism = document.querySelector('.prism-effect');
      
      if (prism && hero) {
        hero.addEventListener('mousemove', (e) => {
          const x = e.clientX / window.innerWidth * 100;
          const y = e.clientY / window.innerHeight * 100;
          prism.style.left = `${x}%`;
          prism.style.top = `${y}%`;
        });
      }
    }
  
    // Purchase buttons
    document.querySelectorAll('.order-button').forEach(button => {
      button.addEventListener('click', function() {
        const product = this.closest('.product-option').querySelector('h3').textContent;
        alert(`Added ${product} to your cart!\n\nNote: This is a demo. Real store links go to goldendiscs.ie`);
      });
    });
  }
  
  // Initialize when DOM loads
  document.addEventListener('DOMContentLoaded', () => {
    initAlbumFeatures();
  });
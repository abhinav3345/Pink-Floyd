/**
 * PINK FLOYD WEBSITE - MAIN SCRIPT
 * Handles: 
 * - Navigation
 * - Interactive elements
 * - Album-specific behaviors
 */

// Mobile Navigation Toggle
function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
    document.body.style.overflow = "hidden";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.overflow = "auto";
  }
  
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
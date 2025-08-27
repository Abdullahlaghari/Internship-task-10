// Initialize AOS (scroll animations)
AOS.init();

// Simple contact form submission handler
document.querySelector(".contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! Your message has been submitted.");
  this.reset();
});

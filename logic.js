
const nav_buttons = document.querySelectorAll('.nav_item');
const hamburger = document.querySelector('.hamburg');
const nav_menu = document.querySelector('.nav_menu');






// HUMBURGER FUNCTION
let toggle = true; // Initial state
const hamburgAnchor = document.querySelector(".hamburg a");

// Function to update the icon
function updateIcon() {
  if (toggle) {
    hamburgAnchor.innerHTML = '<i class="fa-solid fa-bars"></i>';
    nav_menu.classList.remove('ham_active');
  } else {
    hamburgAnchor.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    nav_menu.classList.add('ham_active');
  }
}

// Initial render
updateIcon();

// Hamburger menu toggle mechanism
hamburgAnchor.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default anchor behavior
  toggle = !toggle; // Switch state
  updateIcon(); // Update the icon
});

// NAVIGATION BUTTONS
nav_buttons.forEach((button) => {
  button.addEventListener('click', function () {
    // Remove active class from all buttons and add to the clicked button
    nav_buttons.forEach((btn) => btn.classList.remove('active'));
    this.classList.add('active');

    // Close the hamburger menu and reset icon to "bars"
    toggle = true; // Reset toggle to true
    updateIcon(); // Update the icon
  });
});


// auto tuped bliker
var typed = new Typed(".auto-type",{
         strings : ["MERN STACK DEVELOPER", " JAVA PROGRAMER"],
         typeSpeed : 150,
         backSpeed : 150,
         loop: true
       })
const menuIcon = document.getElementById("menu-icon");
const cancelIcon = document.getElementById("cancel-icon");
const nav = document.getElementById("nav");

document.addEventListener("DOMContentLoaded", function () {
    // Hide nav by default on mobile
    nav.classList.remove("mobile-visible");
    nav.classList.add("mobile-hidden");
  
    // Hide cancel icon by default
    cancelIcon.style.display = "none";
  });
  
  // show-nav
  menuIcon.addEventListener("click", function () {
    nav.classList.remove("mobile-hidden");
    nav.classList.add("mobile-visible");
    cancelIcon.style.display = "block"; // show cancel icon
  })
  
  
  // hide nav
  cancelIcon.addEventListener("click", function () {
      nav.classList.remove("mobile-visible");
      nav.classList.add("mobile-hidden");
      cancelIcon.style.display = "none";
  })


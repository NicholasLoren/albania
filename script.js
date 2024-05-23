document.addEventListener("DOMContentLoaded", function() {
  var navPanel = document.getElementById("navPanel");
  var menuIcon = document.querySelector(".menu-icon");

  function toggleNav() {
    navPanel.classList.toggle("open");
    menuIcon.classList.toggle("change");
  }

  function closeNav(event) {
    if (!navPanel.contains(event.target) && navPanel.classList.contains("open")) {
      toggleNav();
    }
  }

  menuIcon.addEventListener("onclick", toggleNav);
  document.addEventListener("click", closeNav);
});

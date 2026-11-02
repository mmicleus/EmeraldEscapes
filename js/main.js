var menuToggle = document.getElementById("mobile-menu-toggle");
var menuList = document.getElementById("menu-list");
// var mobileMenu = window.matchMedia("(max-width: 768px)");

function setMenuOpen(isOpen) {
  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
  );
  menuList.classList.toggle("open", isOpen);
}

menuToggle.addEventListener("click", function () {
  setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
});

menuList.addEventListener("click", function (event) {
  if (event.target.closest("a")) setMenuOpen(false);
});

// document.addEventListener("keydown", function (event) {
//   if (event.key === "Escape" &&
//       menuToggle.getAttribute("aria-expanded") === "true") {
//     setMenuOpen(false);
//     menuToggle.focus();
//   }
// });

// mobileMenu.addEventListener("change", function (event) {
//   if (!event.matches) setMenuOpen(false);
// });
// the dark/light toggle btn
const themeBtn = document.getElementById("theme-toggle");
// when dark/light toggle btn is clicked, we toggle the 'dark-theme' attribute on the root element
themeBtn.addEventListener("click", function () {
  var next =
    document.documentElement.getAttribute("data-theme") === "dark"
      ? "light"
      : "dark";
  document.documentElement.setAttribute("data-theme", next);
});

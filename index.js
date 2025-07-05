const toggle = document.getElementById("toggle");
const nav = document.getElementById("nav");
toggle.onclick = function () {
  toggle.classList.toggle("press");
  nav.classList.toggle("dark");

  const isDark = document.body.classList.toggle("dark");

  if (!isDark) {
    document.body.classList.add("light");
  } else {
    document.body.classList.remove("light");
  }
};

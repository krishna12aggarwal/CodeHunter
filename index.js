const toggle = document.getElementById("toggle");
const nav = document.getElementById("nav");
const loginBtn = document.getElementById("login");
const log = document.getElementById("screen");
const clos = document.getElementById("close");
const a = document.getElementById("a");

toggle.onclick = function () {
  toggle.classList.toggle("press");
  nav.classList.toggle("dark");

  const isDark = document.body.classList.toggle("dark");
  document.body.classList.toggle("light", !isDark);
};
loginBtn.addEventListener("click", () => {
  log.classList.add("show"); 
});
a.addEventListener("click", () => {
  log.classList.add("show");
});
clos.addEventListener("click", () => {
  log.classList.remove("show"); 
});

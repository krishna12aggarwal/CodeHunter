const toggle = document.getElementById("toggle");
const nav = document.getElementById("nav");
toggle.onclick = function(){
  toggle.classList.toggle('press');
  nav.classList.toggle('dark');
  document.body.classList.toggle('dark');
}
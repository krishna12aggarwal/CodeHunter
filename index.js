const toggle = document.getElementById("toggle");
const nav = document.getElementById("nav");
const loginBtn = document.getElementById("login");
const log = document.getElementById("screen");
const clos = document.getElementById("close");
const a = document.getElementById("a");
const submitBtn = document.getElementById("submitUsername");
const mainContent = document.getElementById("main-content");
const loader = document.getElementById("loader");
const text = document.getElementById("ltext");

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

submitBtn.addEventListener("click", async () => {
  log.classList.remove("show");
  mainContent.classList.add("hidden");

  try {
    const res = await fetch("loading.json");
    const quotes = await res.json();
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];
    text.classList.remove("asd");
    void text.offsetWidth; 
    text.textContent = selectedQuote;
    text.classList.add("asd");
  } catch (err) {
    console.log("damn");
    text.classList.remove("asd");
    void text.offsetWidth;
    text.textContent = "Loading your destiny...";
    text.classList.add("asd");
  }

  setTimeout(() => {
    loader.classList.remove("hidden");
  }, 600);
});

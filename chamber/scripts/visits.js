const dateVisit = Date.now();
const greeting = document.querySelector("#greeting");
const closeBtn = document.querySelector("#close");
const box = document.querySelector("#box");

function greetingMessage() {
if (localStorage.getItem("lastVisit")) {
    localStorage.setItem("newVisit", dateVisit);
    const firstVisit = Number(localStorage.getItem("lastVisit"));
    const newVisit = Number(localStorage.getItem("newVisit"));
    const timeBetween = Math.floor((newVisit - firstVisit) / (1000 * 60 * 60 * 24));
    localStorage.setItem("days since visit", timeBetween);
    if (timeBetween === 1) {
        greeting.textContent = `You last visited ${timeBetween} day ago.`
    } else if (timeBetween > 1) {
        greeting.textContent = `You last visited ${timeBetween} days ago.`
    } else {
        greeting.innerHTML = "Back so soon! Awesome!"
    }
    localStorage.setItem("lastVisit", newVisit)
} else {
    localStorage.setItem("lastVisit", dateVisit);
    greeting.textContent = "Welcome! Let us know if you have any questions.";
}}

closeBtn.addEventListener("click", () => {
    box.style.display = "none";
});

greetingMessage();
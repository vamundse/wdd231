const visitDate = new Date().toLocaleDateString();
const displayVisit = document.querySelector("#last-visit");

function showLastVisit() {
    if (localStorage.getItem("lastVisit")) {
        displayVisit.innerHTML = `Your last visit was the ${localStorage.getItem("lastVisit")}`;
    } else {
        displayVisit.innerHTML = "This is your first visit to our page!";
    }
    localStorage.setItem("lastVisit", visitDate);
}

showLastVisit();
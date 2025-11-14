const form = document.querySelector("form");

form.addEventListener('submit', () => {
    document.querySelector("#timestamp").value = Date.now();
});
const year = document.querySelector("#year");
const modified = document.querySelector("#modified")
let date = new Date();

year.innerHTML = date.getFullYear();
modified.innerHTML = new Date(document.lastModified).toLocaleDateString();
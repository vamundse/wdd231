const year = document.querySelector("#currentyear");
const modified = document.querySelector("#datemodified")
let date = new Date();

year.innerHTML = date.getFullYear();
modified.innerHTML = document.lastModified;
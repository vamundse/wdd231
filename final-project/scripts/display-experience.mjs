import experience from "../data/experience.mjs";

function displayExperience() {
    const expList = document.querySelector("#exp-list");
    expList.innerHTML = experience.map(work => {
        return `<div class="flex-container-column"><p><strong>${work.title}</strong></p><p>${work.workplace}</p><p>${work.from} - ${work.to}</p><p>Responsibilities: ${work.task.join(", ")}</p></div>`
    }).join("");
}

export {displayExperience};
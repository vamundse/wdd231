import education from "../data/education.mjs";

function displayEducation() {
    const eduList = document.querySelector("#edu-list");
    eduList.innerHTML = education.map(degree => {
        return `<div class="flex-container-column"><p><strong>${degree.degree}'s Degree in ${degree.name}</strong></p><p>${degree.from} - ${degree.to}</p><p>${degree.school}</p></div>`;
    }).join("");
}

export {displayEducation};
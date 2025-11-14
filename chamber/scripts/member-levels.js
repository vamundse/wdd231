const url = 'data/levels.json';
const levelCards = document.querySelector("#membership-levels");
const dialogLevel = document.querySelector("#level-dialog");

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    const levelsData = data.levels;
    console.log('Members data:', levelsData);
    displayLevelCards(levelsData);
}

function displayLevelCards(data) {
    data.forEach((level) => {
        const div = document.createElement("div");
        const heading = document.createElement("h3");
        const button = document.createElement("button");

        div.classList.add("level-card");
        heading.innerHTML = `${level.name} Membership`;
        button.textContent = "Learn More";
        button.addEventListener('click', () => {
            displayModal(level);
            dialogLevel.showModal();
        });

        div.appendChild(heading);
        div.appendChild(button);

        levelCards.appendChild(div);
    }); 
}

getMemberData();

function displayModal(level) {
    dialogLevel.innerHTML = "";

    const heading = document.createElement("h3");
    const price = document.createElement("p");
    const description = document.createElement("p");
    const benefitHeader = document.createElement("h4");
    const serviceList = document.createElement("ul");
    const closeButton = document.createElement("button");

    level.services.forEach((service) => {
        const pointService = document.createElement("li");
        pointService.textContent = service;
        serviceList.appendChild(pointService);
    });

    heading.innerHTML = `${level.name} Membership`;
    price.innerHTML = `Price: $${level.price} per Month`;
    description.textContent = level.description;
    benefitHeader.textContent = "Benefits:";
    closeButton.setAttribute("id", "close");
    closeButton.textContent = "Close";
    closeButton.addEventListener('click', () => {
        dialogLevel.close();
        dialogLevel.innerHTML = "";
    });

    dialogLevel.appendChild(heading);
    dialogLevel.appendChild(price);
    dialogLevel.appendChild(description);
    dialogLevel.appendChild(benefitHeader);
    dialogLevel.appendChild(serviceList);
    dialogLevel.appendChild(closeButton);
}
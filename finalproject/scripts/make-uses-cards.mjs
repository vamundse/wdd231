import {displayUsesModal} from "./display-uses-modal.mjs";

function makeUsesCards(data) {
    const uses = document.querySelector("#uses");
    const usesModal = document.querySelector("#uses-modal");
    data.forEach((card) => {
        const div = document.createElement("div");
        const h3 = document.createElement("h3");
        const short = document.createElement("p");
        const picture = document.createElement("picture");
        const image = document.createElement("img");
        const source = document.createElement("source");
        const button = document.createElement("button");

        div.classList = "card shadow flex-container-column"
        h3.textContent = card.name;
        short.textContent = card.short;
        image.setAttribute("src", card["image-small"]);
        image.setAttribute("alt", card.name);
        image.setAttribute("width", 360);
        image.setAttribute("height", 240);
        source.setAttribute("srcset", card["image-medium"]);
        source.setAttribute("media", "(min-width: 600px)");
        button.textContent = `Learn more about ${card.name}`;
        button.classList = "shadow button";
        button.addEventListener('click', () => {
            displayUsesModal(card);
            usesModal.showModal();
        });

        picture.appendChild(source);
        picture.appendChild(image);
        div.appendChild(h3);
        div.appendChild(short);
        div.appendChild(picture);
        div.appendChild(button);

        uses.appendChild(div);
    });
}

export {makeUsesCards};
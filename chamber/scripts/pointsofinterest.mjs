import pointOfInterest from "../data/pointsofinterest.mjs";

const POI = document.querySelector("#poi");

function buildCards(array) {
    array.forEach((poi, index) => {
        const div = document.createElement("div");
        const h2 = document.createElement('h2');
        const address = document.createElement('p');
        const description = document.createElement('p');
        const image = document.createElement('img');
        const button = document.createElement('button');

        h2.textContent = poi.name;
        address.textContent = poi.address;
        address.setAttribute("class", "address");
        description.textContent = poi.description;
        description.setAttribute("class", "description");
        image.setAttribute("src", poi.url);
        image.setAttribute("alt", poi.name);
        if (index > 0) {
        image.setAttribute("loading", "lazy");
        }
        image.setAttribute("width", 300);
        image.setAttribute("height", 200);
        button.textContent = "Learn More";
        button.setAttribute("class", "pointer");

        div.appendChild(h2);
        div.appendChild(address);
        div.appendChild(description);
        div.appendChild(image);
        div.appendChild(button);

        POI.appendChild(div)
    });
}

buildCards(pointOfInterest);
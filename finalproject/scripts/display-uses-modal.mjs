function displayUsesModal(data) {
    const usesModal = document.querySelector("#uses-modal");
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const description = document.createElement("p");
    const h3 = document.createElement("h3");
    const features = document.createElement("ul");
    const button = document.createElement("button");

    div.classList = "flex-container-column";
    h2.textContent = data.name;
    description.textContent = data.description;
    h3.textContent = "Features";
    data.features.forEach((feat) => {
        const li = document.createElement("li");
        const link = document.createElement("a");
        link.textContent = feat;
        link.setAttribute("href", "#")
        li.appendChild(link);
        features.appendChild(li);
    });
    button.textContent = "Close window";
    button.classList = "shadow button";
    button.addEventListener('click', () => {
        usesModal.close();
        usesModal.innerHTML = "";
    });

    div.appendChild(h2);
    div.appendChild(description);
    div.appendChild(h3);
    div.appendChild(features);
    div.appendChild(button);

    usesModal.appendChild(div);
    usesModal.classList = "shadow";
}

export {displayUsesModal};
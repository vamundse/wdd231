function makeToolCards(array) {
    const toolcards = document.querySelector("#tools");
    let randomOrder = array.sort(() => Math.random() - 0.5);
    let finalOrder = randomOrder.slice(0,4);
    
    for (let i = 0; i < finalOrder.length; i++) {
        const tool = finalOrder[i];
        const div = document.createElement("div");
        const h3 = document.createElement("h3");
        const img = document.createElement("img");
        const description = document.createElement("p");
        const button = document.createElement("button");

        h3.textContent = `${tool.name} Tools`;
        img.setAttribute("src", tool.image);
        img.setAttribute("alt", tool.name);
        img.setAttribute("width", 360);
        img.setAttribute("height", 240);
        img.setAttribute("loading", "lazy");
        description.textContent = tool.description;
        button.textContent = `See my ${tool.name} Tools`;
        button.classList = "button shadow";
        div.classList = "flex-container-column shadow card";

        div.appendChild(h3);
        div.appendChild(img);
        div.appendChild(description);
        div.appendChild(button);

        toolcards.appendChild(div);
    };
}

export {makeToolCards};
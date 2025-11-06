const url = 'data/members.json';
const businesses = document.querySelector("#businesses");

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    membersData = data.members;
    console.log('Members data:', membersData);
    displayMemebersFrontPage(membersData);
};

function displayMemebersFrontPage(members) {
    let goldsilver = members.filter(member => member.level === 1 || member.level === 2);
    let randomorder = goldsilver.sort(() => Math.random() - 0.5);
    let finalorder = randomorder.slice(0,3);

    for (let i = 0; i < finalorder.length; i++) {
        const member = finalorder[i];

        let card = document.createElement("div");
        let company = document.createElement("h2");
        let tagline = document.createElement("h3");
        let logo = document.createElement("img");
        let bisinfo = document.createElement("div");
        let phone = document.createElement("p");
        let address = document.createElement("p");
        let website = document.createElement("span");
        let webadress = document.createElement("a");
        let level = document.createElement("p");

        company.textContent = member.name;
        tagline.textContent = member.tagline;
        logo.setAttribute("src", member.imageurl);
        logo.setAttribute("alt", `Logo of ${member.name}`);
        logo.setAttribute("loading", "lazy");
        address.innerHTML = `<span class="label">Address: </span>${member.address}`;
        phone.innerHTML = `<span class="label">Phone: </span> ${member.phone}`;
        webadress.setAttribute("href", member.website);
        webadress.textContent = member.website;
        website.innerHTML = `<span class="label">URL: </span>`;
        card.setAttribute("class", "business card");
        bisinfo.setAttribute("class", "bis-info");

        let bisLevel = "";
        if (member.level === 1) {
            bisLevel = "Gold";
        } else if (member.level === 2) {
            bisLevel = "Silver";
        }
        
        level.innerHTML = `<span class="label">Level: </span>${bisLevel}`;

        website.appendChild(webadress);

        bisinfo.appendChild(address);
        bisinfo.appendChild(phone);
        bisinfo.appendChild(website);
        bisinfo.appendChild(level);

        card.appendChild(company);
        card.appendChild(tagline);
        card.appendChild(logo);
        card.appendChild(bisinfo);
        
        businesses.appendChild(card);
    }
}

getMemberData();
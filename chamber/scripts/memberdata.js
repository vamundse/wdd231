const url = 'data/members.json';
const cards = document.querySelector("#membercards");
const table = document.querySelector("#membertable");

const list = document.querySelector("#list");
const grid = document.querySelector("#grid");

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    membersData = data.members;
    displayMembersGrid(membersData);
    grid.classList.add("active");
};

list.addEventListener("click", () => {
    table.innerHTML = "";
    cards.innerHTML = "";
    displayMembersList(membersData);
    list.classList.add("active");
    grid.classList.remove("active");
});

grid.addEventListener("click", () => {
    cards.innerHTML = "";
    table.innerHTML = "";
    displayMembersGrid(membersData);
    grid.classList.add("active");
    list.classList.remove("active");
});

function displayMembersGrid(members) {
    members.forEach((member) => {
        let card = document.createElement("div");
        let logo = document.createElement("img");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let website = document.createElement("a");
        
        logo.setAttribute("src", member.imageurl);
        logo.setAttribute("alt", `Logo of ${member.name}`);
        logo.setAttribute("loading", "lazy");
        address.textContent = member.address;
        phone.textContent = member.phone;
        website.setAttribute("href", member.website);
        website.textContent = member.website;

        card.appendChild(logo);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        cards.appendChild(card);
    })
};

function displayMembersList(members) {
    let memtable = document.createElement("table");
    members.forEach((member) => {
        let row = document.createElement("tr");
        let company = document.createElement("th");
        let address = document.createElement("td");
        let phone = document.createElement("td");
        let websitedata = document.createElement("td");
        let website = document.createElement("a");

        company.textContent = member.name;
        address.textContent = member.address;
        phone.textContent = member.phone;
        website.setAttribute("href", member.website);
        website.textContent = member.website;

        websitedata.appendChild(website);

        row.appendChild(company);
        row.appendChild(address);
        row.appendChild(phone);
        row.appendChild(websitedata);

        memtable.appendChild(row);
    });
    
    table.appendChild(memtable);
};

getMemberData();
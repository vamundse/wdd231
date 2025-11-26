import {makeUsesCards} from "./make-uses-cards.mjs";

async function getUsesData() {
    const url = "data/uses.json";
    try {
        const response = await fetch(url);
        const data = await response.json();
        const usesData = data.uses;
        makeUsesCards(usesData);
        console.log('Uses Data:', usesData);
    } catch(error) {
        console.error(error);
    }
}

export {getUsesData};
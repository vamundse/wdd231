import {makeUsesCards} from "./make-uses-cards.mjs";

async function getUsesData() {
    const url = "data/uses.json";
    let data;
    try {
        const response = await fetch(url);
        data = await response.json();
    } catch(error) {
        console.error(error);
    } finally {
        const usesData = data.uses;
        console.log('Uses Data:', usesData);
        makeUsesCards(usesData);
    }
}

export {getUsesData};
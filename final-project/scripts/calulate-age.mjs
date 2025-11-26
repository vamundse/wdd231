function calcAge(birthdate) {
    const bDay = new Date(birthdate);
    const today = new Date();
    const age = Math.floor((today - bDay) / (1000 * 60 * 60 * 24 * 365.25));
    return age;
}

export {calcAge};
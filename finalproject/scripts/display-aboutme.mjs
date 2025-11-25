import {displayEducation} from "./display-education.mjs";
import {displayExperience} from "./display-experience.mjs";
import {calcAge} from "./calulate-age.mjs";

displayEducation();
displayExperience();
const age = document.querySelector("#age");
age.innerHTML = `${calcAge("1984-07-08")} years`;
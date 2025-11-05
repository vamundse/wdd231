const temp = document.querySelector("#current-temp");
const icon = document.querySelector("#weather-icon");
const caption = document.querySelector("figcaption");

const myKey = "bc8e2de360d881d5353561d4d1166db4"
const myLat = "49.75"
const myLong = "6.64"
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric`

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
            console.log(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }   
}

apiFetch();

function displayResults(data) {
    temp.innerHTML = `${data.main.temp} °C`
    caption.innerHTML = `The weather right now is ${data.weather[0].description}.`
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    icon.setAttribute("src", iconsrc);
    icon.setAttribute("alt", data.weather[0].description);
}
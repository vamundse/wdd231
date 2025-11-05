const icon = document.querySelector("#weather-icon");
const tempNow = document.querySelector("#temp-now");
const weatherNow = document.querySelector("#weathernow");
const tempHigh = document.querySelector("#temphigh");
const tempLow = document.querySelector("#templow");
const humidity = document.querySelector("#humidity");
const sunrise = document.querySelector("#sunrise");
const sunset = document.querySelector("#sunset");

const myKey = "bc8e2de360d881d5353561d4d1166db4"
const myLat = "49.75"
const myLong = "6.64"
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric`

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            currentWeather(data);
            console.log(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }   
}

apiFetch();

function currentWeather(data) {
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    icon.setAttribute("src", iconsrc);
    icon.setAttribute("alt", data.weather[0].description);   
    tempNow.innerHTML = `${data.main.temp} °C`
    //weatherNow.textContent = data.weather[0].description
    //tempHigh.innerHTML = `${data.main.temp} °C`
    //tempLow.innerHTML = `${data.main.temp} °C`
}
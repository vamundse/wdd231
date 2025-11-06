const icon = document.querySelector("#weather-icon");
const tempNow = document.querySelector("#tempnow");
const weatherNow = document.querySelector("#weathernow");
const tempHigh = document.querySelector("#temphigh");
const tempLow = document.querySelector("#templow");
const humidity = document.querySelector("#humidity");
const sunrise = document.querySelector("#sunrise");
const sunset = document.querySelector("#sunset");
const tomorrow = document.querySelector("#tomorrow");
const twoDays = document.querySelector("#twodays");
const threeDays = document.querySelector("#threedays");

const myKey = "bc8e2de360d881d5353561d4d1166db4"
const myLat = "16.77019168284175"
const myLong = "-3.008194016152233"
const urlCurrent = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric`
const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric`

async function apiFetchCurrent(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const dataCurrent = await response.json();
            currentWeather(dataCurrent);
            console.log(dataCurrent);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }   
}

async function apiFetchForecast(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const dataForecast = await response.json();
            forcastWeather(dataForecast);
            console.log(dataForecast);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }   
}

apiFetchCurrent(urlCurrent);

function currentWeather(data) {
    let iconimg = document.createElement("img");
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    iconimg.setAttribute("src", iconsrc);
    iconimg.setAttribute("alt", data.weather[0].description);
    icon.appendChild(iconimg);
    tempNow.innerHTML = `${data.main.temp} °C`
    weatherNow.textContent = data.weather[0].description
    tempHigh.innerHTML = `High: ${data.main.temp_max} °C`
    tempLow.innerHTML = `Low: ${data.main.temp_min} °C`
    humidity.innerHTML = `Humidity: ${data.main.humidity}%`
    const sunriseTime = new Date(data.sys.sunrise * 1000).toLocaleTimeString(['de-DE'], {hour: '2-digit', minute: '2-digit'});
    const sunsetTime = new Date(data.sys.sunset * 1000).toLocaleTimeString(['de-DE'], {hour: '2-digit', minute: '2-digit'});
    sunrise.innerHTML = `Sunrise: ${sunriseTime}`
    sunset.innerHTML = `Sunset: ${sunsetTime}`
}

apiFetchForecast(urlForecast);

function forcastWeather(data) {
    const dayTwo = new Date();
    dayTwo.setDate(dayTwo.getDate() + 2);
    const twoName = dayTwo.toLocaleDateString('en-US', {weekday: 'long'});
    const dayThree = new Date();
    dayThree.setDate(dayThree.getDate() + 3);
    const threeName = dayThree.toLocaleDateString('en-US', {weekday: 'long'});
    tomorrow.innerHTML = `Tomorrow: <span class="temp">${data.list[1].main.temp} °C</span>`
    twoDays.innerHTML = `${twoName}: <span class="temp">${data.list[2].main.temp} °C</span>`
    threeDays.innerHTML = `${threeName}: <span class="temp">${data.list[3].main.temp} °C</span>`
}
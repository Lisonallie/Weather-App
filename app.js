const key = "00c6cccdf21220d91f2568a81e29690e";
const input = document.getElementById("input");

let motherBox = document.getElementById("mother-box");
let forecast = document.querySelectorAll(".weathertext");
let img = document.querySelectorAll(".icon");

let skiesbg = document.querySelectorAll(".skies");
let weatherBox = document.querySelectorAll(".weather-box");
let backbg = document.getElementById("weather-container");

input.addEventListener("keypress", function (e) {
    if (e.keyCode == 13 || e.which == 13) {
        motherBox.style.visibility = "visible";
        getWeather();
    }
});


async function getWeather() {
    let city = input.value;
    let api = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&mode=json&APPID=${key}`;
    let response = await axios.get(api);
    let counter = 0


    for (let i = 0; i < 40; i += 8) {
        let icon = response.data.list[i].weather[0].icon;
        let temp = Math.floor(response.data.list[i].main.temp);
        let hi = Math.floor(response.data.list[i].main.temp_max);
        let lo = Math.floor(response.data.list[i].main.temp_min);
        console.log(response.data.list[i].weather[0].main)
        
        // same as    forecast[i].innerHTML = temp + '<br>' + hi + '<br>' + lo + '<br>';
        forecast[counter].innerHTML = `${temp}<br> HI: ${hi}<br> LO: ${lo}`;

        let iconsUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
        img[counter].src = iconsUrl;

        forecast[counter].appendChild(img[counter]);
        // console.log(img[i].src)

        if (icon === "01d") {
            weatherBox[counter].style.backgroundImage = "url('img/dayimg/clearsky_small.jpg')";
        }
        if(icon === "01n") {
            weatherBox[counter].style.backgroundImage = "url('img/nightimg/clearsky_small.jpeg')";
        }
        if(icon === "02d") {
            weatherBox[counter].style.backgroundImage = "url('img/dayimg/fewclouds_small.jpeg')";
        }
        if(icon === "02n") {
            weatherBox[counter].style.backgroundImage = "url('img/nightimg/fewclouds_small.jpg')";
        }
        if(icon === "03d") {
            weatherBox[counter].style.backgroundImage = "url('img/dayimg/scatteredclouds_small.jpeg')";
        }
        if(icon === "03n") {
            weatherBox[counter].style.backgroundImage = "url('img/nightimg/scatteredclouds_small.jpeg')";
        }
        if(icon === "04d") {
            weatherBox[counter].style.backgroundImage = "url('img/dayimg/brokenclouds_small.jpeg')";
        }
        if(icon === "04n") {
            weatherBox[counter].style.backgroundImage = "url('img/nightimg/brokenclouds_small.png')";
        }
        if(icon === "09d") {
            weatherBox[counter].style.backgroundImage = "url('img/dayimg/showerrain_small.jpg')";
        }
        if(icon === "09n") {
            weatherBox[counter].style.backgroundImage = "url('img/nightimg/showerrain_small.jpg')";
        }
        if(icon === "10d") {
            weatherBox[counter].style.backgroundImage = "url('img/dayimg/rain_small.jpg')";
        }
        if(icon === "10n") {
            weatherBox[counter].style.backgroundImage = "url('img/nightimg/rain_small.jpg')";
        }
        if(icon === "11d") {
            weatherBox[counter].style.backgroundImage = "url('img/dayimg/thunderstorm_small.jpg')";
        }
        if(icon === "11n") {
            weatherBox[counter].style.backgroundImage = "url('img/nightimg/thunderstorm_small.jpg')";
        }
        if(icon === "13d") {
            weatherBox[counter].style.backgroundImage = "url('img/dayimg/snow_small.jpg')";
        }
        if(icon === "13n") {
            weatherBox[counter].style.backgroundImage = "url('img/nightimg/snow_small.jpeg')";
        }
        if(icon === "50d") {
            weatherBox[counter].style.backgroundImage = "url('img/dayimg/mist_small.jpg')";
        }
        if(icon === "50n") {
            weatherBox[counter].style.backgroundImage = "url('img/nightimg/mist_small.jpg')";
        }
        if(icon === "01n") {
            weatherBox[counter].style.backgroundImage = "url('')";
        }
        if(icon === "01n") {
            weatherBox[counter].style.backgroundImage = "url('')";
        }



        counter++
    }
}
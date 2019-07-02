const key = "00c6cccdf21220d91f2568a81e29690e";
const input = document.getElementById("input");
let motherBox = document.getElementById("mother-box");
let forecast = document.querySelectorAll(".weather-box");
let weather = [];
// let dayOne = [];
// let dayTwo = [];
// let dayThree = [];
// let dayFour = [];
// let dayFive = [];
// let week = [];


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
    console.log(response.data.list[0].main)

    for (i = 0; i < forecast.length; i++) {
        forecast[0].innerHTML = JSON.stringify(response.data.list[0].main.temp);
        // forecast[1].innerHTML = JSON.stringify(response.data.list[1].main);
        // forecast[2].innerHTML = JSON.stringify(response.data.list[2].main);
        // forecast[3].innerHTML = JSON.stringify(response.data.list[3].main);
        // forecast[4].innerHTML = JSON.stringify(response.data.list[4].main);
    }


    // for (i = 0; i < response.data.list; i += 8) {
    //     week.push(response.data.list[i].main);
    // }
    // dayOne.push(week[0]);
    // dayTwo.push(week[1]);
    // dayThree.push(week[2]);
    // dayFour.push(week[3]);
    // dayFive.push(week[4]);

}
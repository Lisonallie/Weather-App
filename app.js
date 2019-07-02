const key = "00c6cccdf21220d91f2568a81e29690e";
const input = document.getElementById("input");
let container = document.getElementById("weather-container");
let div = document.createElement('div');
let dayOne = [];
let dayTwo = [];
let dayThree = [];
let dayFour = [];
let dayFive = [];
let week = [];


input.addEventListener("keypress", function (e) {
    if (e.keyCode == 13 || e.which == 13) {
        getWeather();
    }
});


async function getWeather() {
    let city = input.value;
    let api = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&mode=json&APPID=${key}`;
    let response = await axios.get(api);

    for (i = 0; i < response.data.list; i += 8) {
        console.log(response.data.list[i])
        week.push(response.data.list[i].main);
    }
    dayOne.push(week[0]);

    // console.log(response.data.list[0].main.temp)
}
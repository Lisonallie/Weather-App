const key = "00c6cccdf21220d91f2568a81e29690e";
// const button = document.getElementById("button");
const input = document.getElementById("input");

input.addEventListener("keypress", function(e) {
    if (e.keyCode == 13 || e.which == 13) {
        getWeather();
    }
});

async function getWeather() {
        let city = input.value;
        let api = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&mode=json&APPID=${key}`;
        let response = await axios.get(api);
        console.log(response.data.list[0].main.temp)
}
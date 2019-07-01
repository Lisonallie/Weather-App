const key = "00c6cccdf21220d91f2568a81e29690e";
const submit = document.getElementById("button");
const input = document.getElementById("input");

function getWeather() {
    submit[0].addEventListener("keypress", async function() {
        let city = input.value;
        let api = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&mode=json&APPID=${key}`;
        let response = await axios.get(api);
        console.log(response.data);
    });
}
getWeather();
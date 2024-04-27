// Function to fetch weather data
async function getWeather(city) {
    cityName.innerHTML=city
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '361ab8e565msh784eb5ba3a4a562p10b4d7jsn54f745b0a87b',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const JSONres = await response.json(); // Using .json() to parse JSON directly
      console.log(JSONres);
      document.getElementById('cloud_pct').innerHTML = JSONres.cloud_pct;
      document.getElementById('temp').innerHTML = JSONres.temp;
      document.getElementById('temp2').innerHTML = JSONres.temp;
      document.getElementById('feels_like').innerHTML = JSONres.feels_like;
      document.getElementById('humidity').innerHTML = JSONres.humidity;
      document.getElementById('humidity2').innerHTML = JSONres.humidity;
      document.getElementById('min_temp').innerHTML = JSONres.min_temp;
      document.getElementById('max_temp').innerHTML = JSONres.max_temp;
      document.getElementById('wind_speed').innerHTML = JSONres.wind_speed; 
      document.getElementById('wind_speed2').innerHTML = JSONres.wind_speed;
      document.getElementById('wind_degrees').innerHTML = JSONres.wind_degrees;
      document.getElementById('sunrise').innerHTML = JSONres.sunrise;
      document.getElementById('sunset').innerHTML = JSONres.sunset;
    } catch (error) {
      console.error(error);
    }
}

// Event listener for the submit button
document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", (e) => {
        const cityInput = document.getElementById("city");
        e.preventDefault()
        getWeather(cityInput.value); // Make sure to get the value from an input field for city
    });

    // Optionally, fetch weather immediately for "Delhi" or any default city
    getWeather("Delhi");
});
document.getElementById("getWeather").addEventListener("click", async () => {
  const city = document.getElementById("city").value;
  const apiKey = "K11f1f5caf033e878fc8356873beb26ed"; // Replace with your OpenWeatherMap API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();
    const weatherDescription = `Weather in ${data.name}: ${data.weather[0].description}, Temperature: ${data.main.temp}°C`;
    document.getElementById("weatherResult").innerText = weatherDescription;
  } catch (error) {
    document.getElementById("weatherResult").innerText = error.message;
  }
});

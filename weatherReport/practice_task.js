function weatherDetails (event) {
    event.preventDefault()

    const apiKey = '7a4930438d486034d3949e85d2406f24'
    const lat = document.getElementById('latitude').value
    const lon = document.getElementById('longitude').value
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`

    fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
              const weatherInfo = document.getElementById('weatherInfo');
              weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                      <p>Temperature: ${data.main.temp} &#8451;</p>
                                      <p>Weather: ${data.weather[0].description}</p>`;
            })
}

document.getElementById('weatherForm').addEventListener('submit',weatherDetails);
//  let table = document.getElementById('highTemp td')
//  let table = document.getElementById('lowTemp td')
//  let table = document.getElementById('description td')
//  let table = document.getElementById('humid td')
//  const key= 'c97c2d8001e546fd4b5938db17fabecd'
// //  //grab Data
//  let getJson = ()=>{
//      let zipcode = document.querySelector('#zipcode').nodeValue;


//      let response = await axios.getElementById(`api.openweathermap.org/data/2.5/weather?q=${zip code},${city}&appid=${key})
// //  }

// //  functiton to complete the 2 auth docs
// //  const getWeather = async () =>{
// //      const result = await fetch('api.openweathermap.org/data/2.5/weather?q=zip={zip code},{country code}&appid=c97c2d8001e546fd4b5938db17fabecd', {
// //          method: 'POST',
// //          headers: {
// //              'Content-type': ''
// //          }
// //      })
// //  }
var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name1 = document.querySelector('.name1');
var high = document.querySelector('.high');
var low = document.querySelector('.low');
var desc = document.querySelector('.desc');
var humid = document.querySelector('.humid')

function temperatureConverter(valNum) {
    highValue = valHigh;
    valHigh = parseFloat(vaHigh);
    document.getElementById("outputFahrenheit").innerHTML = ((valHigh - 273.15) * 1.8) + 32;
    lowValue = vallow;
    vallow = parseFloat(vallow);
    document.getElementById("outputFahrenheit").innerHTML = ((vallow - 273.15) * 1.8) + 32;

};


button.addEventListener('click', function (event) {
    fetch('api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&appid=c97c2d8001e546fd4b5938db17fabecd')
        .then(response => response.json())
        .then(data => {
            var name1Value = data['name'];
            var highValue = data['main']['temp_max'];
            var lowValue = data['main']['temp_min'];
            var descValue = data['weather'][0]['description'];
            var humidcValue = data['main']['humidity'];

            name1.innerHTML = nameValue;
            high.innerHTML = highValue;
            low.innerHTML = lowValue;
            desc.innerHTML = desc.value;
            humid.innerHTML = humidcValue

        })

    nameValue

        .catch(err => alert("Wrong city name!"))
})
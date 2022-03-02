const apiKey = `2d6b2c5c6496cb1561b9a4cc0d1737de`;

const searchTemperature = () => {
  const city = document.getElementById('city-name').value ;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  //  console.log(url)
  fetch(url)
    .then(res => res.json())
    .then(data => displayTemp(data))
}
const setInnerText = (id,text) => {
  document.getElementById(id).innerText = text ;
  
}
const displayTemp = temperature => {
  setInnerText('city',temperature.name)
  setInnerText('temperature',temperature.main.temp)
  setInnerText('condition',temperature.weather[0].main)
  // set weather icon
  const url  = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`
  const imgIcon = document.getElementById('weather-icon');
  imgIcon.setAttribute('src',url)

    // diffarent way
    /* const cityLocation = document.getElementById('city')
    const cityText =cityLocation.innerText;
    cityLocation.innerText=temperature.name;

    const temp = document.getElementById('temperature')
    const tempText  = temp.innerText;
    temp.innerText = temperature.main.temp */

}
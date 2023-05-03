const apikey="f022f4b885d39500dc25464021d6db1e";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

let search = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");

const weathericn = document.querySelector('.weathericon')

async function weather(city)
{
    const response = await fetch(apiurl + city+`&appid=${apikey}`);
    var data = await response.json();

    console.log(data)

    document.querySelector('.city').innerHTML= data.name;

   document.querySelector('.temp').innerHTML = data.main.temp+"°c";

   document.querySelector('.humidity').innerHTML = data.main.humidity+"%";

   document.querySelector('.wind').innerHTML = data.wind.speed+"Km/h";

   if(data.weather[0].main == "Clouds")
   {
    weathericn.src = "media/clouds.png"
   }
    else if(data.weather[0].main == "Drizzle")
   {
    weathericn.src = "media/drizzle.png"
   }
   else if(data.weather[0].main == "Rain")
   {
    weathericn.src = "media/rain.png"
   }
   else if(data.weather[0].main == "Clear")
   {
    weathericn.src = "media/clear.png"
   }
   else if(data.weather[0].main == "Mist")
   {
    weathericn.src = "media/mist.png"
   }
}

searchbtn.addEventListener("click",()=>{
    weather(search.value);
})




  const button=document.getElementById("search");
const input=document.getElementById("city");
const cityName=document.getElementById("city-name")
const cityTime=document.getElementById("city-time")
const cityTemp=document.getElementById("city-temp")
const cityCloud=document.getElementById("city-cloud")
const cityHumidity=document.getElementById("city-humidity")
const cityDay=document.getElementById("city-day")


async function getData(cityame){
   const promise=await fetch(`http://api.weatherapi.com/v1/current.json?key=5753f321b12945b191f214635242109&q=${cityame}&aqi=yes`);
   return await promise.json();
}
button.addEventListener('click',async ()=>{
    const value=input.value;
    const result=await getData(value);
    console.log(result);
    cityName.innerHTML=`${result.location.name},${result.location.country}`;
    cityTime.innerHTML=`${result.location.localtime}`;
    cityTemp.innerHTML=`${result.current.
        temp_c}`;
        cityCloud.innerHTML=`${result.current.cloud}`;
        cityHumidity.innerHTML=`${result.current.humidity}`
        const d=new Date();
        cityDay.innerHTML=d;
});


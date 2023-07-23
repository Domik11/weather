import React from "react";
import s from "./HourlyCard.module.css";
import HourImgTemp from "./HourImgTemp/HourImgTemp";
import { useState , useEffect } from "react";

const HourlyCard = (props) => {
  const p = props.data;
  console.log(p);
  
  const [currentTime, setCurrentTime] = useState(new Date());
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  var month = currentTime.toLocaleString('en-US', { month: 'long' });
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();

  function dt() {
    return `${month} ${hours}:${minutes}`;
  }

  function gWI(cloudinessPercentage, rainPercentage) {

    // Определим тип погоды на основе процентов облачности и дождя
    let weatherDescription = "";
    let weatherCode = "";
  
    if (rainPercentage > 50) {
      weatherDescription = "Сильный дождь";
      weatherCode = "Rainfall";
    } else if (rainPercentage > 25) {
      weatherDescription = "Дождь";
      weatherCode = "Rainy";
    } else if (cloudinessPercentage > 75) {
      weatherDescription = "Облачно";
      weatherCode = "Cloudy";
    } else if (cloudinessPercentage > 50) {
      weatherDescription = "Переменная облачность";
      weatherCode = "Partly cloudy";
    } else {
      weatherDescription = "Ясно";
      weatherCode = "Sunny";
    }
    
    var imageUrl = ""; // Переменная для хранения пути к картинке

    if (weatherCode === "Rainy") {
      imageUrl = "путь_к_картинке_дождь.png";
    } else if (weatherCode === "Cloudy") {
      imageUrl = "src/assets/smallcloud.svg";
    } else if (weatherCode === "Partly cloudy") {
      imageUrl = "src/assets/smallcloudandsun.svg";
    } else if (weatherCode === "Sunny") {
      imageUrl = "src/assets/smallsun.svg";
    }
   

    return imageUrl

  }

  function incrHours(hours, int) {
    let pref = " AM"
    if (hours > 12) {
      pref = " PM";
    }
    
    if ((hours-12) + int > 12) {
      hours = (int + pref);
    } else {
      hours = (hours+int+pref);
    }
    return hours;
  }


  return (
    <div className={s.rectangle}>
      <div className={s.layer1}>
        <div className={s.square}>
          <img className={s.imgCard} src="src\assets\time.svg"></img>
        </div>
        <div className={s.mainText}>
          Hourly forecast
        </div>
      </div>
      <div className={s.layer2}>
        <HourImgTemp hours={"Now"} img={p ? gWI(p.hourly.cloudcover[hours], p.hourly.rain[hours]) : <div>--</div>} temp={p ? Math.floor(p.hourly.temperature_2m[hours]) + "°": <div>--°</div>}/>
        <HourImgTemp hours={incrHours(hours,1)} img={p ? gWI(p.hourly.cloudcover[hours+1], p.hourly.rain[hours+1]) : <div>--</div>} temp={p ? Math.floor(p.hourly.temperature_2m[hours+1]) + "°": <div>--°</div>}/>
        <HourImgTemp hours={incrHours(hours,2)} img={p ? gWI(p.hourly.cloudcover[hours+2], p.hourly.rain[hours+2]) : <div>--</div>} temp={p ? Math.floor(p.hourly.temperature_2m[hours+2]) + "°": <div>--°</div>}/>
        <HourImgTemp hours={incrHours(hours,3)} img={p ? gWI(p.hourly.cloudcover[hours+3], p.hourly.rain[hours+3]) : <div>--</div>} temp={p ? Math.floor(p.hourly.temperature_2m[hours+3]) + "°": <div>--°</div>}/>
        <HourImgTemp hours={incrHours(hours,4)} img={p ? gWI(p.hourly.cloudcover[hours+4], p.hourly.rain[hours+4]) : <div>--</div>} temp={p ? Math.floor(p.hourly.temperature_2m[hours+4]) + "°": <div>--°</div>}/>
        <HourImgTemp hours={incrHours(hours,5)} img={p ? gWI(p.hourly.cloudcover[hours+5], p.hourly.rain[hours+5]) : <div>--</div>} temp={p ? Math.floor(p.hourly.temperature_2m[hours+5]) + "°": <div>--°</div>}/>
      </div>


    </div>
  );
};

export default HourlyCard
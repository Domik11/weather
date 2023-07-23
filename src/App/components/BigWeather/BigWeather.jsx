import { useState, useEffect } from 'react'
import s from './BigWeather.module.css'



function BigWeather(props) {

  const p = props.data;

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

  function getWeatherInfo(cloudinessPercentage, rainPercentage) {

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
      imageUrl = "src/assets/cloud.svg";
    } else if (weatherCode === "Partly cloudy") {
      imageUrl = "src/assets/cloudandsun.svg";
    } else if (weatherCode === "Sunny") {
      imageUrl = "src/assets/sun.svg";
    }


    return {
      description: weatherDescription,
      weatherCode: weatherCode,
      imageUrl: imageUrl,
    };
  }


  return (
    <div className={s.rectangle}>
      <div className={s.wrapper12}>

        <div className={s.textwrapper}>
          <div>{props.name ? props.name : <div>--</div>}</div>
        </div>

        <div className={s.bigTemp}>
          {p ? Math.round(p.hourly.temperature_2m[hours]) + '°' : <div>--°</div>}
        </div>

        <div className={s.feelsLike}>
        Feels like {p ? Math.round(p.hourly.apparent_temperature[hours]) + '°' : <div>--</div>}
        </div>

        <div className={s.discrip}>
          {p ? getWeatherInfo(p.hourly.cloudcover[hours], p.hourly.rain[hours]).weatherCode : <div>--</div>}
        </div>

        <div className={s.datatime}>
          {p ? dt() : <div>--</div>}
        </div>

        <div className={s.tempDayNight}>
          Day {p ? Math.round(p.daily.temperature_2m_max[0]) + '°' : <div>--°</div>}
          <br></br>
          Night {p ? Math.round(p.daily.temperature_2m_min[0]) + '°' : <div>--°</div>}
        </div>

        <img className={s.search} src='src\assets\search.svg'></img>
        <img className={s.suncloud} src={p ? getWeatherInfo(p.hourly.cloudcover[hours], p.hourly.rain[hours]).imageUrl : <div>--</div>}></img>
      </div>
      <img className={s.img1} src='src\assets\imgBack2.png'></img>

    </div>

  )
}

export default BigWeather

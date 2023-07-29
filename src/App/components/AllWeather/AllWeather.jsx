import React from "react";
import s from "./AllWeather.module.css";
import SmallCard from "./SmallCards/SmallCard";
import { useState, useEffect } from 'react'
import HourlyCard from "./HourlyCard/HourlyCard";
import { Grid } from '@mui/material';
import DayForecast from "./DayForecast/DayForecast";
import ChanceOfRain from "./ChanceOfRain/ChanceOfRain";

const AllWeather = (props) => {


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

  const p = props.data;

  return (
    <div className={s.box}>
      <div className={s.layer}>
        <SmallCard className={s.windspeed} name="Wind speed" main={p ? Math.round(p.hourly.windspeed_10m[hours]) + " m/s" : <div>-- m/s</div>} imgsrc="src\assets\wind.svg" />
        <SmallCard className={s.rainchance} name="Rain chance" main={p ? Math.round(p.hourly.rain[hours]) + " %" : <div>--%</div>} imgsrc="src\assets\tuchka.svg" />
      </div>
      <div className={s.layer}>
        <SmallCard className={s.pressure} name="Pressure" main={p ? Math.round(p.hourly.surface_pressure[hours]) + "hpa" : <div>--hpa</div>} imgsrc="src\assets\Pressure.svg" />
        <SmallCard className={s.uvindex} name="UV index" main={p ? p.hourly.uv_index[hours] : <div>--</div>} imgsrc="src/assets/UV.svg" />
      </div>
      <div className={s.layer}>
        <HourlyCard className={s.hourlycard} data={p} />
      </div>
      <div className={s.layer}>
        <DayForecast data={p}/>
      </div>
      <div className={s.layer}>
        <ChanceOfRain data={p}/>
      </div>
      

      
    </div>
  );
};

export default AllWeather
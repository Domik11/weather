import React from "react";
import s from "./DayForecast.module.css";
import { useState, useEffect } from "react";
import { LineChart, XAxis, YAxis, CartesianGrid, Line } from "recharts";


const DayForecast = (props) => {
  const p = props.data;
  console.log(p)

  const data = [
    {
      name: 'Mon',
      uv: p ? p.daily.temperature_2m_max[0] : null,
    },
    {
      name: 'Tue',
      uv: p ? p.daily.temperature_2m_max[1] : null,
    },
    {
      name: 'Wed',
      uv: p ? p.daily.temperature_2m_max[2] : null,
    },
    {
      name: 'Thu',
      uv: p ? p.daily.temperature_2m_max[3] : null,
    },
    {
      name: 'Fri',
      uv: p ? p.daily.temperature_2m_max[4] : null,
    },
    {
      name: 'Sat',
      uv: p ? p.daily.temperature_2m_max[5] : null,
    },
    {
      name: 'Sun',
      uv: p ? p.daily.temperature_2m_max[6] : null,
    },
  ];
  return (
    <div className={s.rectangle}>
      <div className={s.layer1}>
        <div className={s.square}>
          <img className={s.imgCard} src="src\assets\calendar.svg"></img>
        </div>
        <div className={s.mainText}>
          Day forecast
        </div>
      </div>
      <div className={s.layer2}>
        <LineChart width={350} height={150} data={data}>
          <XAxis className={s.daytext} dataKey="name" />
          <YAxis className={s.daytext}/>
          <CartesianGrid stroke="gray" strokeDasharray="0 0" />
          <Line type="monotone" dataKey="uv" stroke="black" />
        </LineChart>
      </div>

    </div>
  );
};

export default DayForecast
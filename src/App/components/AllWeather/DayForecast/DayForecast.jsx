import React from "react";
import s from "./DayForecast.module.css";
import { useState, useEffect } from "react";
import { LineChart, XAxis, YAxis, CartesianGrid, Line } from "recharts";


const DayForecast = (props) => {
  const p = props.data;

  let daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  let toDay = new Date();
  // let n = toDay.getDay();
  let n = 3;
  let newDaysOfWeek = daysOfWeek.splice(n).concat(daysOfWeek);
  // for (let i=0;i<8-n;i++) {
  //   newDaysOfWeek.unshift(newDaysOfWeek.pop())
  // }
  console.log(newDaysOfWeek)

  const data = [
    {
      name: newDaysOfWeek[0],
      uv: p ? p.daily.temperature_2m_max[0] : null,
      ux: p ? p.daily.temperature_2m_min[0] : null,      
    },
    {
      name: newDaysOfWeek[1],
      uv: p ? p.daily.temperature_2m_max[1] : null,
      ux: p ? p.daily.temperature_2m_min[1] : null,
    },
    {
      name: newDaysOfWeek[2],
      uv: p ? p.daily.temperature_2m_max[2] : null,
      ux: p ? p.daily.temperature_2m_min[2] : null,

    },
    {
      name: newDaysOfWeek[3],
      uv: p ? p.daily.temperature_2m_max[3] : null,
      ux: p ? p.daily.temperature_2m_min[3] : null,
    },
    {
      name: newDaysOfWeek[4],
      uv: p ? p.daily.temperature_2m_max[4] : null,
      ux: p ? p.daily.temperature_2m_min[4] : null,
    },
    {
      name: newDaysOfWeek[5],
      uv: p ? p.daily.temperature_2m_max[5] : null,
      ux: p ? p.daily.temperature_2m_min[5] : null,
    },
    {
      name: newDaysOfWeek[6],
      uv: p ? p.daily.temperature_2m_max[6] : null,
      ux: p ? p.daily.temperature_2m_min[6] : null,
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
          <CartesianGrid stroke="gray" strokeDasharray="8" />
          <Line type="monotone" dataKey="uv" stroke="red" />
          <Line type="monotone" dataKey="ux" stroke="blue" />
        </LineChart>
      </div>
 
    </div>
  );
};

export default DayForecast
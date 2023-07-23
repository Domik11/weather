import React from "react";
import s from "./DayForecast.module.css";
import { useState, useEffect } from "react";
import { LineChart, XAxis, YAxis, CartesianGrid, Line } from "recharts";

const DayForecast = (props) => {
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 500,
      amt: 20000,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2300,
    },
  ];
  return (
    <div className={s.rectangle}>
      <div className={s.layer1}>
        <div className={s.square}>
          <img className={s.imgCard} src="src\assets\calendar.svg"></img>
        </div>
        <div className={s.mainText}>
          Hourly forecast
        </div>
      </div>
      <div className={s.layer2}>
        <LineChart width={350} height={150} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
        </LineChart>
      </div>

    </div>
  );
};

export default DayForecast
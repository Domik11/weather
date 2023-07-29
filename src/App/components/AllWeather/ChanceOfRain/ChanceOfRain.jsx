import React from "react";
import s from "./ChanceOfRain.module.css";
import { useState, useEffect } from "react";
import { LineChart, XAxis, YAxis, CartesianGrid, Line } from "recharts";


const ChanceOfRain = (props) => {
  const p = props.data;

  return (
    <div className={s.rectangle}>
      <div className={s.layer1}>
        <div className={s.square}>
          <img className={s.imgCard} src="src\assets\tuchka.svg"></img>
        </div>
        <div className={s.mainText}>
          Chance of rain
        </div>
      </div>
      <div className={s.layer2}>
        <div className="dopLayer">

        </div>
        <div className="dopLayer"> 
        
        </div>
        <div className="dopLayer">

        </div>
        <div className="dopLayer">
          
        </div>
      </div>
 
    </div>
  );
};

export default ChanceOfRain
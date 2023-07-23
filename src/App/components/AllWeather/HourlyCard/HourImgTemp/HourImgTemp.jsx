import React from "react";
import s from "./HourImgTemp.module.css";

const HourImgTemp = (props) => {

  return (
    <div className={s.box}>
      <div className={s.hours}>{props.hours}</div>
      <div className={s.img}><img src={props.img}/></div>
      <div className={s.temp}>{props.temp}</div>
    </div>
  );
};

export default HourImgTemp
import React from "react";
import s from "./SmallCard.module.css";

const SmallCard = (props) => {


  return (
    <div className={s.rectangle}>
      <div className={s.square}>
        <img className={s.imgCard} src={props.imgsrc}></img>
      </div>

      <div className={s.main}>
        <div className={s.mainText}>
          {props.name}
        </div>

        <div className={s.mainInfo}>
          {props.main}
        </div>
      </div>



    </div>
  );
};

export default SmallCard
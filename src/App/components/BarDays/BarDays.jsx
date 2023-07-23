import { useState } from 'react'
import s from './BarDays.module.css'

function BarDays() {

  return (
    <div className={s.wrapper}>
      <div className={s.rectangle}>
        <div className={s.text}>Today</div>
      </div>
      <div className={s.rectangle}>
        <div className={s.text}>Tomorrow</div>
      </div>
      <div className={s.rectangle}>
        <div className={s.text}>10 days</div>
      </div>
    </div>
  )
}

export default BarDays

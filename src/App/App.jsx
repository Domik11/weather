import { useEffect, useState } from 'react'
import s from './App.module.css'
import BigWeather from './components/BigWeather/BigWeather'
import BarDays from './components/BarDays/BarDays'
import AllWeather from './components/AllWeather/AllWeather'
import p from '../../data/state'

function App() {
  const [data, setData] = useState()
  const [cityName, setCityName] = useState()

  useEffect(() => {
    p.then(({ cityName , data })=> {
      setData(data);
      setCityName(cityName)
    });

  }, []);



  return (
    <div className={s.container}>
      <BigWeather data={data} name={cityName}/>
      <BarDays />
      <AllWeather data={data} />

    </div>
  )
}

export default App

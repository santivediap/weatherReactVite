import { useState } from 'react'
import './App.css'
import WeatherList from './components/WeatherList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WeatherList />
    </>
  )
}

export default App

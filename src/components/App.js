import { useState } from 'react';

import Header from './Header'
import Game from './Game'
import Startscreen from './Startscreen'
import Endscreen from './Endscreen'

import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDe7-lXTx2osvPNAbzXcRgcJWYfXBZi3vU",
  authDomain: "where-s-waldo-1fb9a.firebaseapp.com",
  projectId: "where-s-waldo-1fb9a",
  storageBucket: "where-s-waldo-1fb9a.appspot.com",
  messagingSenderId: "177249307466",
  appId: "1:177249307466:web:fb08cafbdce58755290fb3"
};

initializeApp(firebaseConfig)

function App() {
  const [gameStarted, setGameStarted] = useState(false)
  const [elapsedTime, setElapsedTime] = useState(0)
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const [foundChars, setFoundChars] = useState([])

  const addFoundChar = (charName) => {
    setFoundChars((prevFoundChars) => {
      const newFoundChars = [...prevFoundChars, charName]
      return newFoundChars
    })
  }

  const countUp = () => {
    setElapsedTime((prevElapsedTime) => prevElapsedTime + 1)
  }

  const padTo2Digits = (num) => {
    return num.toString().padStart(2, '0')
  }

  const parseTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600)
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60

    const result = `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`

    return result
  }

  const start = () => {
    setGameStarted(true)
    setIsTimeRunning(true)
  }

  const restart = () => {
    setFoundChars([])
    setElapsedTime(0)
    setIsTimeRunning(true)
  }

  return (
    <div className="app">
      {(!gameStarted) ? <Startscreen start={start} /> : null}
      <Header foundChars={foundChars} elapsedTime={elapsedTime} parseTime={parseTime} countUp={countUp} isTimeRunning={isTimeRunning} />
      <Game foundChars={foundChars} addFoundChar={addFoundChar} />
      {(foundChars.length === 3) ? <Endscreen restart={restart} elapsedTime={elapsedTime} parseTime={parseTime} stopCounting={() => setIsTimeRunning(false)} /> : null}
    </div>
  );
}

export default App;

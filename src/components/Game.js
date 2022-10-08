import { useState } from 'react'
import Targetbox from './Targetbox'

function Game({ foundChars, addFoundChar }) {
  const [ isSelecting, setIsSelecting ] = useState(false)
  const [ clickCoords, setClickCoords ] = useState(null)

  const handleClick = (event) => {
    console.log(event.nativeEvent.offsetX)
    console.log(event.nativeEvent.offsetY)
    setClickCoords([event.nativeEvent.offsetX, event.nativeEvent.offsetY])
    setIsSelecting(true)
  }

  return (
      <main>
        <img src="https://external-preview.redd.it/TcvOxrPyiJw-emtRJRGZrERu2Cy-2zP-fYgPtyxG5Iw.jpg?auto=webp&s=fd5c2125a1a188b87d6534a0f39f59f6f7c97868" alt="Crowded room with Rick and Morty cast" onClick={handleClick}/>
        {(isSelecting) ? <Targetbox foundChars={foundChars} addFoundChar={addFoundChar} coords={clickCoords} closeSelection={() => setIsSelecting(false)} /> : null}
      </main>
    );
  }

export default Game
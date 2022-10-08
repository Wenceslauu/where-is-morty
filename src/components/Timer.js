import { useEffect } from 'react'

function Timer({ elapsedTime, parseTime, countUp }) {
    useEffect(() => {
        const intervalID = setInterval(countUp, 1000)
      
        return () => {
          clearInterval(intervalID)
        }
    }, [countUp])

    return ( 
        <p>{parseTime(elapsedTime)}</p>
    );
  }

  export default Timer
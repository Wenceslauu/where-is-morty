function Targetbox({ foundChars, addFoundChar, coords, closeSelection }) {
    const screenCoords = [coords[0], coords[1] + 111]
    const boxStyle = {
        left: `${screenCoords[0]}px`,
        top: `${screenCoords[1]}px`
    }
    const selectionStyle = {
        marginLeft: (coords[0] < 750) ? '200px' : '-200px'
    }

    const notFoundChars = ['Morty', 'Mariachi', 'Summer'].filter((item) => !foundChars.includes(item))
    const targetCoords = {
        Morty: [[800, 270], [860, 330]],
        Mariachi: [[270, 70], [330, 130]],
        Summer: [[1070, 660], [1130, 730]]
    }

    const isOnTarget = (charName, coords) => {
        if ((coords[0] > targetCoords[charName][0][0] && coords[0] < targetCoords[charName][1][0]) 
            && (coords[1] > targetCoords[charName][0][1] && coords[1] < targetCoords[charName][1][1])) {
            return true
        } else {
            return false
        }
    }

    const handleClick = (event) => {
        const charName = event.target.textContent
        if (isOnTarget(charName, coords)) {
            addFoundChar(charName)
            closeSelection()
            alert(`You found ${charName}!`)
        } else {
            closeSelection()
            console.log('not found')
        }
    }

    return (
        <div>
            <div className="modal target-box" style={boxStyle}>
                <ul style={selectionStyle}>
                    {notFoundChars.map((notFoundChar, index) => {
                        return <button key={index} onClick={handleClick}>{notFoundChar}</button>
                    })}
                </ul>
            </div>
            <div className="overlay target-background" onClick={() => closeSelection()}></div>
        </div>
    );
  }

  export default Targetbox
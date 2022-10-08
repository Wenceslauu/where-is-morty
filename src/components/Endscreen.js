import { useState, useEffect } from 'react'
import {
    getFirestore,
    collection,
    addDoc,
    query,
    orderBy,
    limit,
    serverTimestamp,
    getDocs,
  } from 'firebase/firestore';

function Endscreen({ restart, elapsedTime, parseTime, stopCounting }) {
    const [nickname, setNickname] = useState('')
    const [highscores, setHighscores] = useState([])
    const [hasSubmitted, setHasSubmitted] = useState(false)

    // Stops the timer on mount  
    useEffect(() => {
        stopCounting()
    }, [stopCounting])

    // Fetch scores on mount
    useEffect(() => {
        loadScores()
    }, [] )
    
    const saveScore = async (nickname, score) => {
        try {
            await addDoc(collection(getFirestore(), 'scores'), {
              name: nickname,
              time: score,
              timestamp: serverTimestamp()
            });
        } catch(error) {
            console.error('Error writing new message to Firebase Database', error);
        }
    }
    
    const loadScores = async () => {
        const highestScoresQuery = query(collection(getFirestore(), 'scores'), orderBy('time', 'asc'), limit(10));

        const querySnapshot = await getDocs(highestScoresQuery)
        setHighscores(() => {
            const newHighscores = []
            querySnapshot.forEach((document) => {
                newHighscores.push({name: document.data().name, time: document.data().time })
            })

            return newHighscores
        })
    }

    const handleChange = (event) => {
        setNickname(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        saveScore(nickname.toUpperCase(), elapsedTime)
        loadScores()
        setNickname('')
        setHasSubmitted(true)
    }

    return (
        <div>
            <div className="modal end-screen">
                <div className='high-scores'>
                    <h2>High scores</h2>
                    <ol>
                        {highscores.map((score, index) => {
                            return (
                                <li key={index}>{score.name} {parseTime(score.time)}</li>
                            )
                        })}
                    </ol>
                </div>
                <div className='player-score'>
                    <h2>Time</h2>
                    <p>{parseTime(elapsedTime)}</p>
                    {(!hasSubmitted) ? <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor='nickname'>Nickname</label>
                            <input type='text' id='nickname' name='nickname' value={nickname} maxLength='3' placeholder='AAA' onChange={handleChange}/>
                        </div>
                        <button type='submit'>Submit</button>
                    </form> : null}
                    <button onClick={restart}>Play again</button>
                </div>
            </div>
            <div className="overlay"></div>
        </div>
    );
  }

export default Endscreen
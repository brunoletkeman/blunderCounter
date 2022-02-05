import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import moment, { Moment } from 'moment';
import data from './data.json';
// const {firebaseHelper, firestoreHelper} = require('firebase-functions-helper');
const now = moment();

function App() {
  const [playerOne, setPlayerOne] = useState(now)
  const [playerTwo, setPlayerTwo] = useState(now)

  useEffect(() => {
    setPlayerOne(moment(data.javier))
    setPlayerTwo(moment(data.ana))
  }, [])

  const displayInfo = (date: Moment) => {
    //Difference in number of days
    const days = moment.duration(now.diff(date, 'days'), 'days').asDays();

    //Difference in number of weeks
    const weeks = moment.duration(now.diff(date, 'weeks'), 'weeks').asWeeks();

    return `${days} Days since`;
  }

  const updatePlayer = (playerOne: boolean) => {
    if (playerOne) {
      setPlayerOne(now);
    } else {
      setPlayerTwo(now);
    }
  }

  return (
    <div className="App">
      <header className="container">
        <h2>days since blunder the Queen</h2>

        <div className='playerContainer'>
          <p>{displayInfo(playerOne)} Days since Javier screw up</p>
          <button onClick={() => updatePlayer(true)}>reset</button>
        </div>

        <div className='playerContainer'>
          <p>{displayInfo(playerTwo)} Days since Anaí screw up</p>
          <button onClick={() => updatePlayer(false)}>reset</button>
        </div>

      </header>
    </div>
  );
}

export default App;

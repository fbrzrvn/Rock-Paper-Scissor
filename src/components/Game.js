import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Game = ({ userChoice, score, setScore }) => {

  const [houseChoice, setHouseChoice] = useState('');
  const [playerWin, setPlayerWin] = useState('');

  const [counter, setCounter] = useState(3);

  const randomHouseChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return setHouseChoice(choices[randomIndex]);
  }

  useEffect(() => {
    randomHouseChoice();
  }, [])

  const result = () => {
    if (userChoice === 'rock' && houseChoice === 'paper') {
      setPlayerWin('lose');
    } else if (userChoice === 'rock' && houseChoice === 'scissors') {
      setPlayerWin('win');
      setScore(score +1);
    } else if (userChoice === 'paper' && houseChoice === 'rock') {
      setPlayerWin('win');
      setScore(score +1);
    } else if (userChoice === 'paper' && houseChoice === 'scissors') {
      setPlayerWin('lose');
    } else if (userChoice === 'scissors' && houseChoice === 'rock') {
      setPlayerWin('lose');
    } else if (userChoice === 'scissors' && houseChoice === 'paper') {
      setPlayerWin('win');
      setScore(score +1);
    } else {
      setPlayerWin("draw");
    }
  }

  useEffect(() => {
    const timer = counter > 0 ?
      setInterval(() => {
        setCounter(counter - 1);
      }, 1000) :
    result();

    return () => {
      clearInterval(timer);
    };
  }, [counter, houseChoice]);

  return (
    <div className="game">
      <div className="game__user">
        <span className="text">You Picked</span>
        <div
          className={
            `icon icon--${userChoice} ${playerWin === "win" ?
            `icon icon--${userChoice}--winner` : ""}`
          }
        ></div>
      </div>

      { counter === 0 ? (
        <div className="game__play">
          { playerWin === 'draw' ? <span className="text">Draw</span> :
            playerWin === 'win' ? <span className="text">You Win</span> :
            <span className="text">You Lose</span>
          }
          <Link to="/" className="play-again" onClick={() => setHouseChoice()}>
            Play Again
          </Link>
        </div>
      ) : '' }

      <div className="game__house">
        <span className="text">The House Picked</span>
        {counter === 0 ? (
          <div
            className={`icon icon--${houseChoice} ${playerWin === "lose" ?
              `icon icon--${houseChoice}--winner` : ""}`
            }
          ></div> ) :
          <div className="counter">{counter}</div>
        }
      </div>
    </div>
  )
}

export default Game;
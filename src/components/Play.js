import React from 'react';
import { Link } from 'react-router-dom';
import Triangle from '../images/bg-triangle.svg';

const Play = ({ setUserChoice }) => {
  const handleClick = e => {
    setUserChoice(e.target.dataset.id);
  };

  return (
    <div className="play">
      <img src={Triangle} alt="traingle-bg" className="triangle" />
      <div className="items">
        <Link to="/game">
          <div
            data-id="rock"
            className="icon icon--rock"
            onClick={handleClick}
          />
        </Link>
      </div>
      <div className="items">
        <Link to="/game">
          <div
            data-id="paper"
            className="icon icon--paper"
            onClick={handleClick}
          />
        </Link>
      </div>
      <div className="items">
        <Link to="/game">
          <div
            data-id="scissors"
            className="icon icon--scissors"
            onClick={handleClick}
          />
        </Link>
      </div>
    </div>
  );
};

export default Play;

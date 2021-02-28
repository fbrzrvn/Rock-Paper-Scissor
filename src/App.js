import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Play from './components/Play';
import Game from './components/Game';
import Footer from './components/Footer';

function App() {

  const [userChoice, setUserChoice] = useState("");
  const [score, setScore] = useState(0);

  return (
    <>
      <div className="container">
        <Header score={score} />
        <Switch>
          <Route path="/" exact>
            <Play setUserChoice={setUserChoice} />
          </Route>
        </Switch>
        <Switch>
          <Route path="/game" exact>
            <Game userChoice={userChoice} score={score} setScore={setScore} />
          </Route>
        </Switch>
        <Footer />
      </div>
    </>
  );
}

export default App;
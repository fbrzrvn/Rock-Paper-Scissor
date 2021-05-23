import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Game from './components/Game';
import Header from './components/Header';
import Play from './components/Play';

function App() {
  const [userChoice, setUserChoice] = useState('');
  const [score, setScore] = useState(0);

  return (
    <div className="container">
      <Header score={score} />
      <Switch>
        <Route path="/game" exact>
          <Game userChoice={userChoice} score={score} setScore={setScore} />
        </Route>
        <Route path="/" exact>
          <Play setUserChoice={setUserChoice} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

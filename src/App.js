import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Play from './components/Play';
import Game from './components/Game';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Switch>
          <Route path="/" exact>
            <Play />
          </Route>
        </Switch>
        <Switch>
          <Route path="/game" exact>
            <Game />
          </Route>
        </Switch>
        <Footer />
      </div>
    </>
  );
}

export default App;
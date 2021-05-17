import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import LandingPage from './Screens/LandingPage/LandingPage';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MovieScreen from './Screens/MovieScreen/MovieScreen';
import AuthScreen from './Screens/AuthScreen/AuthScreen';

function App() {
  const [login, setLogin] = useState(false);
  return (
    <div className="App">
      <Router>    
        <Header login={login} setLogin={setLogin} />
        <Switch>
          <Route path="/auth">
            <AuthScreen />
          </Route>
          <Route path="/detail">
            <MovieScreen />
          </Route>
          <Route path="/">
            {login ? <LandingPage /> : <AuthScreen />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

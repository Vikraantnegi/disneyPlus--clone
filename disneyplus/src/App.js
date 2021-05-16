import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import LandingPage from './Screens/LandingPage/LandingPage';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MovieScreen from './Screens/MovieScreen/MovieScreen';

function App() {
  return (
    <Router>      
      <div className="App">
        <Header />
        <Switch>
          <Route path="/home">
            <LandingPage />
          </Route>
          <Route path="/detail">
            <MovieScreen />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

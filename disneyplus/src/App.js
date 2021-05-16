import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import LandingPage from './Screens/LandingPage/LandingPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MovieScreen from './Screens/MovieScreen/MovieScreen';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/">
            <LandingPage />
          </Route>
          <Route path="/content">
            <MovieScreen />
          </Route>
        </Switch>
      </Router>
      <LandingPage />
    </div>
  );
}

export default App;

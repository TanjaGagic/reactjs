import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Reviews from './components/pages/Reviews';
import Offers from './components/pages/Offers';
import SignUp from './components/pages/SignUp';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/reviews' component={Reviews} />
          <Route path='/offers' component={Offers} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
      
    </>
  );
}

export default App;
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import './App.css';
import Wallet from './pages/Wallet';
// import image from './images/image.jpg';

function App() {
  return (
    <>
      <div className="container">
        <Switch>
          <Route path="/carteira" component={ Wallet } />
          <Route path="/" component={ Login } />
        </Switch>
      </div>
      <footer />
    </>);
}

export default App;

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
        <img id="wallet-image" alt="wallet" src="https://images.pexels.com/photos/6777563/pexels-photo-6777563.jpeg?cs=srgb&dl=pexels-alesia-kozik-6777563.jpg&fm=jpg" />
        <Switch>
          <Route path="/carteira" component={ Wallet } />
          <Route path="/" component={ Login } />
        </Switch>
      </div>
      <footer />
    </>);
}

export default App;

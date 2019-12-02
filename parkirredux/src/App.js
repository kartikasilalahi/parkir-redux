import React from 'react';
import './App.css';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Hitungkata from './pages/Hitungkata';
import {BrowserRouter as Router , Route} from 'react-router-dom'


function App() {
  return (
      <Router>
        <div className="App">
          <Header/>
          <Route path='/Homepage' component={Homepage} />
          <Route path='/Hitungkata' component={Hitungkata} />
        </div>
      </Router>
  );
}

export default App;

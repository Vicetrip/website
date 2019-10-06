import React from 'react';
import { BrowserRouter,  Switch, Route } from 'react-router-dom';

import './App.css';
import HomeModule from './Modules/Home/home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomeModule} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

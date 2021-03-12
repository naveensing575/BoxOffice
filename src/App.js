import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Starred from './Pages/Starred';
import Home from './Pages/Home';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/starred">
        <Starred/>
      </Route>
      <Route>
        <div>Page not found!</div>
      </Route>
    </Switch>
  );
}

export default App;

import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Navs from './components/Navs'; 
import Starred from './Pages/Starred';
import Home from './Pages/Home';

function App() {
  return (
    <div>
    <Navs/>
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
    </div>
  );
}

export default App;

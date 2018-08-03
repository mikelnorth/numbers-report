import React, {Component} from "react";
import { Switch, Route } from "react-router-dom";
import './App.css';

//routes
import Landing from './components/landing/Landing.js';
import Form from './components/athlete/Form.js';
import NotFound from './utils/404.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route component={Landing} exact path='/' />
          <Route component={Form} exact  path='/form' />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;

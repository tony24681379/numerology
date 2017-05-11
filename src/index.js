import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Menu from './components/Menu';
import Home from './components/Home';
import Load from './components/Load';
import DataInput from './components/DataInput';

// import react router deps
import { BrowserRouter as Router,Route } from 'react-router-dom'

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

const router = (
  <Router>
    <MuiThemeProvider>
      <div>
        <Menu/>
        <Route exact path="/" component={DataInput}/>
        <Route path="/Home" component={Home}/>
        <Route path="/Load" component={Load}/>
      </div>
    </MuiThemeProvider>
  </Router>
)

ReactDOM.render(
  router,
  document.getElementById('root')
);

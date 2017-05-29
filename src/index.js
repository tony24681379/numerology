import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DataTab from './components/DataTab';

// import react router deps
import { BrowserRouter as Router,Route } from 'react-router-dom'

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

const router = (
  <Router>
    <MuiThemeProvider>
      <div>
        {/*<DataTab/>*/}
        <Route exact path="/" component={DataTab}/>
      </div>
    </MuiThemeProvider>
  </Router>
)

ReactDOM.render(
  router,
  document.getElementById('root')
);

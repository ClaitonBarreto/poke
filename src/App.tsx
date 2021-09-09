import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GlobalStyle from './globalStyle';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

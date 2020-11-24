import React from 'react';
import { Root, Routes, addPrefetchExcludes } from 'react-static';
import { Switch, Route, Link } from 'react-router-dom';
import Dynamic from 'containers/Dynamic';

import './app.css';

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic']);

function App() {
  return (
    <Root>
      <div>
        <React.Suspense fallback={<em>Loading...</em>}>
          <Switch>
            <Route path="/dynamic" component={Dynamic} />
            <Route render={() => <Routes />} />
          </Switch>
        </React.Suspense>
      </div>
    </Root>
  );
}

export default App;

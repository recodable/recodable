import React from 'react';
import { Root, Routes, addPrefetchExcludes } from 'react-static';
import { Switch, Route, Link } from 'react-router-dom';
import { Head, useSiteData } from 'react-static';

import './app.css';

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic']);

function Header() {
  const { title } = useSiteData();

  return (
    <Head>
      <meta charSet="UTF-8" />
      <title>{title}</title>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
}

function App() {
  return (
    <Root>
      <div>
        <React.Suspense fallback={<em>Loading...</em>}>
          <Header />

          <Switch>
            {/* <Route path="/dynamic" component={Dynamic} /> */}
            <Route render={() => <Routes />} />
          </Switch>
        </React.Suspense>
      </div>
    </Root>
  );
}

export default App;

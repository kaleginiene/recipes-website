import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header, Loader, Footer } from "./components";
const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));

function Routes() {
  const current = window.location.pathname;

  return (
    <Router>
      <Header
        color={() => {
          if (current === "/") {
            return "#fff";
          } else {
            return "#222";
          }
        }}
      />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default Routes;

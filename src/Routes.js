import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header, Loader, Footer } from "./components";
const Home = lazy(() => import("./pages/Home/Home"));
const Login = lazy(() => import("./pages/Auth/Login/Login"));
const Register = lazy(() => import("./pages/Auth/Register/Register"));
const AddRecipe = lazy(() => import("./pages/AddRecipe/AddRecipe"));
const MyRecipes = lazy(() => import("./pages/MyRecipes/MyRecipes"));
const Recipe = lazy(() => import("./pages/Recipe/Recipe"));

function Routes() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/recipe" component={Recipe} />
          <Route exact path="/add-recipe" component={AddRecipe} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/my-recipes" component={MyRecipes} />
        </Switch>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default Routes;

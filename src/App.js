import React from 'react';
import './App.css';
import Cards from "./Cards";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, Redirect } from "react-router-dom";
import CardDetails from './CardsDetail';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/cards" component={Cards}/>
        <Route exact path="/card/:id/details" component={CardDetails}/>
        <Redirect to="cards"/>
      </Switch>
    </>
  );
}

export default App;

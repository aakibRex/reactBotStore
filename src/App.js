
import { Header } from "./components/header";
import { BotList } from "./components/BotList";
import React, { useState } from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import { Bot_details } from "./components/bot-details";
import { useSelector } from "react-redux";


function App() {

  // const data = useSelector(state => state.bots_data);
  return (
    <div className="App">
          <Header/>
        <main>
        <Switch>
          <Route path='/Bots' exact>
              <BotList/>
          </Route>
          <Route path='/Bots/:id' exact>
              <Bot_details />
          </Route>
        </Switch>
      </main>


    </div>
  );
}

export default App;

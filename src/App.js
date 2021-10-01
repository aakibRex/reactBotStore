
import { Header } from "./components/header";
import { BotList } from "./components/BotList";
import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { Bot_details } from "./components/bot-details";



function App() {
  return (
    <div className="App">
          <Header/>
        <main>
        <Switch>
        <Route path='/' exact>
            <Redirect to="/Bots" /> : <BotList/>
          </Route>
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

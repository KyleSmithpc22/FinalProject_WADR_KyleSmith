import React from 'react';

import './App.css';

import LogIn from './components/logIn';
import SignUp from './components/Sign-Up';
import Upgrade from './components/Upgrade';
import TeamMaker from './components/TeamMaker';
import PokeNavbar from './components/Navbar';
import FormsPage from './components/FormsPage';
import Pokédex from './components/Pokédex';
import MainPage from './components/MainPage';

import { HousesList } from './components/Houses-List';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {

  return (
    <div id="background-pokemon">
      <div> 
        <div id="background-white" className="container">

          
          <PokeNavbar />

          <Router>
          <div>
            

            <Switch>

              <Route path="/Pokédex">
                <Pokédex />
              </Route>

              <Route path="/pay2Win">
                <Upgrade />
              </Route>

              <Route path="/Forms">
                <FormsPage />
              </Route>

              <Route path="/TeamMaker">
                <HousesList />
              </Route>

              <Route path="/SignUp">
                <SignUp />
              </Route>

              <Route path="/SignIn">
                <LogIn />
              </Route>

              

              

              <Route exact path="/">
                <MainPage />
              </Route>

              

            </Switch>

            

          </div>
        </Router>

        

          
        </div>

        

        
      </div>
    </div>

    
  )
}

function Main() {
  return <h2>Welcome To Pokemon Team Maker!</h2>
}


export default App
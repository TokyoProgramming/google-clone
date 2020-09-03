import React from 'react';
import './App.css';
import Home from "./Pages/Home";
import { BrowserRouter as Router,  Switch, Route, Link } from "react-router-dom";
import Search from "./Components/Search/Search";
import SearchPage from "./Components/SearchPage/SearchPage";

function App() {
  return (
    <div className="app">
        <Router>
            <Switch>
                <Route path="/search">
                    {/* Search Page */}
                    {/*<SearchPage />*/}
                    <SearchPage />
                </Route>
                <Route path="">
                    {/*  Home   */}
                    <Home />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;


// After
// <Router>
//      <Switch>
//             <Route>
//                    <Components />
//              </Route>
//      </Switch>
// </Router>


//Inside of the Components , we are able to use "Link"

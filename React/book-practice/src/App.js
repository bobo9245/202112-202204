import React from 'react';
import { Route, Link } from "react-router-dom";
import "./App.css";
import Main from "./pages/main";
import One from "./pages/1";

const App = () => {
  return (
    <div>
      <button><Link to="/1"></Link></button>
      <Route path="/" component={Main} exact={true}/>
      <Route path="/1" component={One} exact={true}/>
    </div>
  );
};

export default App;

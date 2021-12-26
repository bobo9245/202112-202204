import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch, Link,Redirect} from "react-router-dom";
import Main from './inc/main.js';
import one from './inc/1.js';

function App() {
  const name = "서윤하";

  return(
    <div className="div_first">{name}</div> 
  ) ;
}

export default App;

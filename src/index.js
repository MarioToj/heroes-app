import React from 'react';
import ReactDOM from 'react-dom';


import { HeroesApp } from './HeroesApp';
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
 
  <BrowserRouter>
     <HeroesApp />
  </BrowserRouter>,
document.getElementById("root")
);


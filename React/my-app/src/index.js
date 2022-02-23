import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Curry from './App.js';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router,Route ,Switch,Link} from 'react-router-dom'
import Home from './mycomponent/Home';
import Product from './mycomponent/Product';
import About from  './mycomponent/About';
import Notfound from './mycomponent/Notfound'
import ReactTable from "react-table";  
//import "react-table/react-table.css"; 
import add from './mycomponent/About'
//import React, { useState, useEffect } from 'react';


class Ref extends React.Component
{
   render(){
   return <h>Anser is :{add(10,10)}</h>


   }
  
   }
   
ReactDOM.render(   
    <Curry />,   
    document.getElementById('root')   
);
reportWebVitals();

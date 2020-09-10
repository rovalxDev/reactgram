import React from 'react';
import ReactDOM from 'react-dom';
import Rutas from './components/Rutas';
import $ from 'jquery'; // necesita de jquery
import Popper from 'popper.js'; // necesita de popper
import 'bootstrap/dist/js/bootstrap.bundle.min'; // importa el empaquetado de bootstrap js
import 'bootstrap/dist/css/bootstrap.min.css'; // css base de bootstrap css
import './css/reactgram.css'

const PUBLIC_PATH = __dirname + "src/";
process.env.PUBLIC_PATH = PUBLIC_PATH;

// import { BrowserRouter as Router, HashRouter as RouterHash} from 'react-router-dom';
import { Router } from 'react-router';
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

// ReactDOM.render(<RouterHash history={history}><Rutas /></RouterHash>, document.getElementById("App"));
ReactDOM.render(<Router history={history}><Rutas /></Router>, document.getElementById("App"));
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import AppYt from './CursoYouTube/index';
//import Api from './PruebaApiLocal/api';

import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

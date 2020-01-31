import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import AppYt from './CursoYouTube/index';

import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router } from 'react-router-dom'

//ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
ReactDOM.render(<AppYt />, document.getElementById('root'));

serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TreeBase from './tree/index'
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<div style={{height:'100%'}}><TreeBase /></div>, document.getElementById('root'));
registerServiceWorker();

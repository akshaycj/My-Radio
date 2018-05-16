import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TreeExample from './tree/index'
import {Icon} from 'antd'

import registerServiceWorker from './registerServiceWorker';
import Home from './Home'
import Recieve from './Recieve'
import Background from './background.jpg'

ReactDOM.render(<div style={{height:'100%'}}><TreeExample /></div>, document.getElementById('root'));
registerServiceWorker();

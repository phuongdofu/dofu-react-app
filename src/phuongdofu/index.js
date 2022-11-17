import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskView from './TaskView';

ReactDOM.render(
  <React.StrictMode>
    <TaskView />
  </React.StrictMode>,
  document.getElementById('root'),
);

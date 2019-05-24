import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css'
import './styles/styles.scss';
  
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
  // WAY TO GIVE DEFAULT VALS TO OPTIONS : ReactDOM.render(<IndecisionApp options={['one','two']}/>, document.getElementById('app'));

  

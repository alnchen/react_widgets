import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './components/Calculator';

document.addEventListener('DOMContentLoaded', () => {
  var button = document.getElementById('alert');

  ReactDOM.render(<Calculator/>, button);
});

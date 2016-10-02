import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', (t) => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  t.end()
});

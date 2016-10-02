import React from 'react'
import ReactDOM from 'react-dom'
import Voting from './components/Voting'
import './index.css'

const pair = ['Better Call Saul', 'Breaking Bad']

ReactDOM.render(
  <Voting pair={pair} />,
  document.getElementById('root')
)

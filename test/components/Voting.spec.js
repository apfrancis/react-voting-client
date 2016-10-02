import test from 'tape'
import React from 'react'
import ReactDOM from 'react-dom'
import {mount} from 'enzyme'
import Voting from './../../src/components/Voting'

import jsdom from 'jsdom'

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
const win = doc.defaultView

global.document = doc
global.window = win

Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key]
  }
})

test('trying to mount', t => {
  const testPair = ['fooby doo', 'and you too']
  const wrapper = mount(<Voting pair={testPair}/>)
  const buttons = wrapper.find('button')
  t.equal(buttons.length, 2)
  const texts = buttons.map((button) => button.find('h1').text())
  t.deepEqual(texts, testPair)
  t.end()
})

test('invokes a callback when the a button is clicked', t => {
  const testPair = ['fooby doo', 'and you too']
  let votedWith
  const vote = (entry) => votedWith = entry
  const wrapper = mount(<Voting pair={testPair} vote={vote}/>)
  wrapper.find('button').first().simulate('click')
  t.equal('fooby doo', votedWith)
  t.end()
})

test('disables buttons when user has voted', t => {
  const testPair = ['uno', 'dos']
  const wrapper = mount(<Voting pair={testPair} hasVoted={testPair[0]}/>)
  console.log(wrapper.find('button').first().html())
  t.equal(wrapper.find('button[disabled]').length, 2)
  t.end()
})

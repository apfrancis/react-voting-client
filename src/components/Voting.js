import React from 'react'
import Vote from './Vote'
import Winner from './Winner'

export default React.createClass({
  render: function () {
    return <div className='voting'>
      {this.props.winner ? <Winner winner={this.props.winner} /> : <Vote {...this.props} />}
    </div>
  }
})

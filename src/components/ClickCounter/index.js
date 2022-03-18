import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => {
      console.log(`Previous state button is clicked ${prevState.count} times!`)
      return {count: prevState.count + 1}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The Button has been clicked <br />
          <span className="count">{count}</span> times
        </h1>
        <p>Click the button to increase the count!</p>
        <div>
          <button type="button" className="button" onClick={this.onIncrement}>
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter

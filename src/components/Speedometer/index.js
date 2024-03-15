import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state: {speed: 0}
  onAcceleration = () => {
    if (this.speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    } else if (this.speed === 200) {
      this.setState(prevState => ({speed: prevState.speed + 0}))
    }
  }

  onBrake = () => {
    if (this.speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    } else if (this.speed === 0) {
      this.setState(prevState => ({speed: prevState.speed - 0}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="image"
        />
        <p className="text"> Speed Is {speed}mph </p>
        <div class="buttons-container">
          <button class="button-1" onClick={this.onAcceleration}>
            Accelerate
          </button>
          <button class="button-2" onClick={this.onBrake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer

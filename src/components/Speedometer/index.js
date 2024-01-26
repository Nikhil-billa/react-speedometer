// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  applyBrake = () => {
    const {speed} = this.state
    if (speed > 0) {
       this.setState(prevState => {
      return {speed: prevState.speed - 10}
    })
    }
    
  }

  accelerate = () => {
    const {speed} = this.state

    if (speed < 200 ) {
        this.setState(prevState => {
      return {speed: prevState.speed + 10}
    })
    }
    
  
  }

  render() {
    const {speed} = this.state

    return (
      <div className="container">
        <h1 className="heading"> SPEEDOMETER </h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="image"
        />
        <h1 className="speed"> Speed Is {speed}mph</h1>
        <p className="paragraph"> Min limit is 0mph, Max limit is 200mph </p>
        <div className="button-container">
          <button onClick={this.accelerate} className="button1"> Accelerate </button>
          <button onClick={this.applyBrake} className="button2"> Apply Brake </button>
        </div>
      </div>
    )
  }
}

export default Speedometer

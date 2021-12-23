import { Component } from "react";

class EventPractice extends Component {

  state = {
    message: ''
  }

  handleChange = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  handleClick = () => {
    alert(this.state.message)
    this.setState({
      message: ''
    })
  }

  render() {
    return (
      <div>
        <h1>이벤트 헨들링</h1>
        <input
          type="text"
          placeholder="아무거나 입력"
          name="message"
          value={this.state.message}
          onChange={
            this.handleChange
          } />

        <button
          onClick={
            this.handleClick
          }>
        </button>
      </div >
    )
  }
}

export default EventPractice;

import { Component } from "react";

class EventPractice extends Component {

  state = {
    message: '',
    username: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick = () => {
    alert(this.state.username + ': ' + this.state.message)
    this.setState({
      message: '',
      username: '',
    })
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  }

  render() {
    return (
      <div>
        <h1>이벤트 헨들링</h1>
        <span>이름입력</span>
        <input
          type="text"
          placeholder="이름 입력"
          name="username"
          value={this.state.username}
          onChange={
            this.handleChange
          } />
        <br />
        <span>텍스트 입력</span>
        <input
          type="text"
          placeholder="텍스트 입력"
          name="message"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress} />
        <br />


        <button
          onClick={
            this.handleClick
          }>
          확인</button>
      </div >
    )
  }
}

export default EventPractice;

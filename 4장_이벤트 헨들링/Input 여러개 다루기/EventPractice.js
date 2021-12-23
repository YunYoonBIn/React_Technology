import { Component } from "react";

class EventPractice extends Component {

  state = {
    message: '',
    username: '',
    number: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick = () => {
    alert(this.state.username + ': ' + this.state.number + ' + ' + this.state.message)
    this.setState({
      message: '',
      username: '',
      number: '',
    })
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
          onChange={
            this.handleChange
          } />
        <br />

        <span>전화번호 입력</span>
        <input
          type="number"
          placeholder="전화번호 입력"
          name="number"
          value={this.state.number}
          onChange={
            this.handleChange
          } />

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

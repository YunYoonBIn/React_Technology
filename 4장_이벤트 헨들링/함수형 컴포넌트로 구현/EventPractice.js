import { useState } from "react";

const EventPractice = () => {

  const [form, setForm] = useState({
    username: '',
    message: '',
  });
  const { username, message } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value
    };
    setForm(nextForm)
  }
  const onClick = () => {
    alert(username + ':   ' + message);
    setForm({
      username: '',
      message: '',
    })
  }
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  }
  return (
    <div>
      <h1>이벤트 연습</h1>

      <input
        type="text"
        placeholder="이름 입력"
        name="username"
        value={username}
        onChange={onChange} />

      <br />

      <input type="text"
        placeholder="텍스트 입력"
        name="message"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress} />

      <br />

      <button onClick={onClick}>
        확인
      </button>
    </div>
  )
}

export default EventPractice;
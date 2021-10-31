import { useState } from "react";

const Say = () => {
  const [text, setText] = useState("");
  const onClickEnter = () => setText("안녕");
  const onClickLeave = () => setText("잘가");
  const [color, setColor] = useState("black");

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{text}</h1>
      <button
        style={{ color: "red" }}
        onClick={() => {
          setColor("red");
        }}
      >
        빨강
      </button>
      <button
        style={{ color: "blue" }}
        onClick={() => {
          setColor("blue");
        }}
      >
        파랑
      </button>
      <button
        style={{ color: "green" }}
        onClick={() => {
          setColor("green");
        }}
      >
        초록
      </button>
    </div>
    /*
   1. 이벤트 이름은 카멜 표기법으로 작성
   2. 이벤트에 실행할 자바스크립트 코드를 전달하는 것이 아니라, 함수 형태의 값을 전달
   3. DOM 요소에만 이벤트 설정 가능
   */
  );
};

export default Say;

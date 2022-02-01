import { useState } from "react";
import "./App.css";
import Hooks from "./Hooks";

const App = () => {
  const [visible, setVisible] = useState(false)

  return (
    <div>
      <button onClick={() => {
        setVisible(!visible);
      }}>
        {visible ? '숨기기' : '보이기'}
      </button>
      <hr />
      {visible && <Hooks />}
    </div >
  )
}

export default App;

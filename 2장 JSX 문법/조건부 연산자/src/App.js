
import './App.css';

function App() {
  const name = "조건부 연산자"
  return (
    <div className="App">
      {name === "조건부 연산자"} (
      ? <h1>참</h1>
      : <h1>거짓</h1>
      )

    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

function App() {

  function getData() {
    fetch("http://localhost:2511/test")
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
  }

  return (
    <div className="App">

      <h1>Mano puslapis</h1>
      <button onClick={getData}>GET DATA</button>

    </div>
  );
}

export default App;

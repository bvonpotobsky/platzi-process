import logo from "./logo.svg";
import "./App.css";
import Stateful from "./components/Stateful";
import Presentational from "./components/Presentational";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Stateful />
      <Presentational />
      <Button text="Add apple" />
    </div>
  );
}

export default App;

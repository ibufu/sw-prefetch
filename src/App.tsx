import "./App.css";
import List from "./List";
import { getData1, getData2 } from "./api";

function App() {
  return (
    <div className="App">
      <h3>Without Prefetch</h3>
      <List api={getData2} />
      <h3>Prefetch</h3>
      <List api={getData1} />
    </div>
  );
}

export default App;

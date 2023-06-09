import "./App.css";
import List from "./List";
import { getData1, getData2 } from "./api";

function App() {
  return (
    <div className="App">
      <div>
        <h3>Without Prefetch</h3>
        <List api={getData2} />
      </div>
      <div>
        <h3>Prefetch</h3>
        <List api={getData1} />
      </div>
    </div>
  );
}

export default App;

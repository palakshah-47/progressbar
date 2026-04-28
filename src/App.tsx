import ProgressBar from "./ProgressBar";

import "./App.css";

function App() {
  return (
    <div style={{ width: "600px" }}>
      <ProgressBar value={5} />
      <ProgressBar value={10} />
      <ProgressBar value={40} />
    </div>
  );
}

export default App;


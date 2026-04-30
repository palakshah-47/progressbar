import { useState } from "react";
import ProgressBar from "./ProgressBar";

import "./App.css";
import ProgressBarWithDiv from "./ProgressBarwithDiv";

interface ProgressDiv {
  id: number;
  transition: boolean;
  progress: number;
}

function App() {
  const [divs, setDivs] = useState<ProgressDiv[]>([]);

  const addDiv = () => {
    const newDiv = {
      id: divs.length + 1,
      transition: true,
      progress: 0
    };
    const newId = divs.length + 1;
    setDivs((prev) => [...prev, newDiv]);

    const interval = setInterval(() => {
      setDivs((prev) => {
        const updatedDivs = [...prev];
        const divToUpdate = updatedDivs.find((d) => d.id === newId);

        if (!divToUpdate) {
          clearInterval(interval);
          return prev;
        }

        if (divToUpdate.progress >= 100) {
          clearInterval(interval);
          divToUpdate.transition = false;
          return prev;
        }

        divToUpdate.progress += 1;
        return updatedDivs;
      });
    }, 100);
  };
  return (
    <div style={{ width: "600px" }}>
      <ProgressBar value={5} />
      <ProgressBar value={10} />
      <ProgressBar value={40} />
      <button onClick={addDiv} style={{ backgroundColor: "lightblue" }}>
        add
      </button>
      {divs.map((div) => (
        <ProgressBarWithDiv key={div.id} div={div} />
      ))}
    </div>
  );
}

export default App;


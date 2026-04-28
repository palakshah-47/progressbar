import "./App.css";
import { useState, useEffect } from "react";

const MIN = 0,
  MAX = 100;

function ProgressBar({ value }: { value: number }) {
  const percentValue = Math.min(Math.max(0, value), 100);

  const [progressVal, setProgressVal] = useState(0);

  useEffect(() => {
    setTimeout(() => setProgressVal(percentValue), 100);
  }, [percentValue]);

  return (
    <div className="outer">
      <div
        className="inner"
        style={{
          transform: `translateX(${progressVal - 100}% )`,
          transformOrigin: "left",
          color: progressVal < 5 ? "black" : "white"
        }}
        role="progressbar"
        aria-valuenow={progressVal}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        {percentValue}%
      </div>
    </div>
  );
}

export default ProgressBar;

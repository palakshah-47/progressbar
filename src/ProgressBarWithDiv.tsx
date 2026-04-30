import "./App.css";

interface ProgressDiv {
  id: number;
  transition: boolean;
  progress: number;
}

function ProgressBarWithDiv({ div }: { div: ProgressDiv }) {
  return (
    <div className="outer">
      <div
        className="inner"
        style={{
          transform: `translateX(${div.progress - 100}%)`,
          //   transition: div.transition ? "transform 0.2s ease-in" : "none",
          color: "white"
        }}
        role="progressbar"
        aria-valuenow={div.progress}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        {div.progress}%
      </div>
    </div>
  );
}

export default ProgressBarWithDiv;

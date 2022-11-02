import { useRef, useState } from "react";

function App() {
  let startTime = 0.25;
  let time = startTime * 60;
  const [countdown, setCountdown] = useState<{
    [key: string]: string | number;
  }>({ min: "10", sec: "00" });

  const updateCountDown = () => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    if (time >= 0) {
      setCountdown({
        min: minutes > 9 ? minutes : `0${minutes}`,
        sec: seconds > 9 ? seconds : `0${seconds}`,
      });
      time--;
    }
  };

  const startCountdown = () => {
    setInterval(updateCountDown, 1000);
  };

  return (
    <div className="App">
      <h2>Count down</h2>
      {/* <p ref={countdown}>{countdown.current}</p> */}
      <p>
        {countdown.min}:{countdown.sec}
      </p>
      <button onClick={startCountdown}>start</button>
    </div>
  );
}

export default App;

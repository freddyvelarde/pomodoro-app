import { MainStyles } from "./styles/App.styles";
import { useEffect } from "react";
import useCountdown from "./hooks/useCountdown";
import Menu from "./views/Menu/Menu";
import useTimer from "./hooks/useTimer";

function App() {
  const { timer, setTimerData } = useTimer();
  const { countdown, pauseCountdown, startCountdown, cdBlocked } =
    useCountdown();

  // storing timers settings in localstorage
  useEffect(() => {
    if (cdBlocked) {
      window.document.title = `${countdown.min}:${countdown.sec} - RUNNING`;
    }
  }, [countdown]);

  useEffect(() => {
    const data = localStorage.getItem("timer");
    if (data !== null) {
      setTimerData(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("timer", JSON.stringify(timer));
  }, [timer]);

  return (
    <MainStyles>
      <h2>Count down</h2>
      <Menu />
      <p>
        {countdown.min}:{countdown.sec}
      </p>
      <p>{timer.pomodoro.time}</p>
      <p>{timer.shortBreak.time}</p>
      <p>{timer.longBreak.time}</p>
      <button onClick={startCountdown}>start</button>
      <button onClick={pauseCountdown}>pause</button>
      <br />
      <button
        onClick={() =>
          setTimerData({ ...timer, pomodoro: { ...timer.pomodoro, time: 21 } })
        }
      >
        change pomodorp
      </button>
    </MainStyles>
  );
}

export default App;

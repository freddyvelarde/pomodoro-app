import useCountdown from "./hooks/useCountdown";

function App() {
  const { countdown, pauseCountdown, startCountdown } = useCountdown();

  return (
    <div className="App">
      <h2>Count down</h2>
      <p>
        {countdown.min}:{countdown.sec}
      </p>
      <button onClick={startCountdown}>start</button>
      <button onClick={pauseCountdown}>pause</button>

      {/* <button onClick={getPermissionToShowNotifications}>noti</button> */}
    </div>
  );
}

export default App;

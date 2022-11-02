import useCountdown from "./hooks/useCountdown";
import { MainStyles } from "./styles/App.styles";
import Menu from "./views/Menu/Menu";

function App() {
  const { countdown, pauseCountdown, startCountdown } = useCountdown();

  return (
    <MainStyles>
      <h2>Count down</h2>
      <Menu />
      <p>
        {countdown.min}:{countdown.sec}
      </p>
      <button onClick={startCountdown}>start</button>
      <button onClick={pauseCountdown}>pause</button>
    </MainStyles>
  );
}

export default App;

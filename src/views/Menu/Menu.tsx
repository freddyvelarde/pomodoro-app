import useCountdown from "../../hooks/useCountdown";
import useTimer from "../../hooks/useTimer";
import { MenuStyles } from "./Menu.styles";

export default function Menu() {
  const { timer, setTimerData } = useTimer();
  const { pomodoro, shortBreak, longBreak } = timer;
  const { cdBlocked } = useCountdown();

  const activatePomodoroTimer = () => {
    setTimerData({
      pomodoro: {
        time: 20,
        activate: true,
      },
      shortBreak: {
        time: 5,
        activate: false,
      },
      longBreak: {
        time: 15,
        activate: false,
      },
    });
  };
  const activateShortTimer = () => {
    setTimerData({
      pomodoro: {
        time: 20,
        activate: false,
      },
      shortBreak: {
        time: 5,
        activate: true,
      },
      longBreak: {
        time: 15,
        activate: false,
      },
    });
  };
  const activateLongTimer = () => {
    setTimerData({
      pomodoro: {
        time: 20,
        activate: false,
      },
      shortBreak: {
        time: 5,
        activate: false,
      },
      longBreak: {
        time: 15,
        activate: true,
      },
    });
  };

  return (
    <MenuStyles
      pomo={pomodoro.activate}
      short={shortBreak.activate}
      long={longBreak.activate}
    >
      <div className="box pomo" onClick={activatePomodoroTimer}>
        <span>pomodoro</span>
      </div>
      <div className="box short" onClick={activateShortTimer}>
        <span>short break</span>
      </div>
      <div className="box long" onClick={activateLongTimer}>
        <span>long break</span>
      </div>
    </MenuStyles>
  );
}

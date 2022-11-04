import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import {
  setTimer,
  // setPomodoro,
  // setLongBreak,
  // setShortBreak,
} from "../redux/slices/timers";

export default function useTimer() {
  const timer = useSelector((state: RootState) => state.timers.value);
  const dispatch = useDispatch();
  const setTimerData = (data: Object) => {
    dispatch(setTimer(data));
  };
  // const setPomodoroTimer = (value: object) => {
  //   dispatch(setPomodoro(value));
  // };
  // const setShortBreakTimer = (value: object) => {
  //   dispatch(setShortBreak(value));
  // };
  // const setLongBreakTimer = (value: object) => {
  //   dispatch(setLongBreak(value));
  // };

  // return { timer, setPomodoroTimer, setLongBreakTimer, setShortBreakTimer };
  return { timer, setTimerData };
}

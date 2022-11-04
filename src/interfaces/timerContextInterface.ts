export interface timerContextData {
  pomodoro: number;
  shortBreak: number;
  longBreak: number;
}

export interface timerGlobalContext {
  timer: timerContextData;
  setTimer?: Function;
}

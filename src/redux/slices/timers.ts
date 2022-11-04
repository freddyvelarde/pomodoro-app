import { createSlice } from "@reduxjs/toolkit";

interface timerProps {
  pomodoro: {
    time: number;
    activate: boolean;
  };
  shortBreak: {
    time: number;
    activate: boolean;
  };
  longBreak: {
    time: number;
    activate: boolean;
  };
}

const initialState: timerProps = {
  pomodoro: {
    time: 20,
    activate: true,
  },
  shortBreak: {
    time: 5,
    activate: true,
  },
  longBreak: {
    time: 15,
    activate: true,
  },
};

const timerSlice = createSlice({
  name: "timer",
  initialState: { value: initialState },
  reducers: {
    setTimer: (state, actions) => {
      state.value = actions.payload;
    },
    // setPomodoro: (state, actions) => {
    //   state.value.pomodoro = actions.payload;
    // },
    // setShortBreak: (state, actions) => {
    //   state.value.shortBreak = actions.payload;
    // },
    // setLongBreak: (state, actions) => {
    //   state.value.longBreak = actions.payload;
    // },
  },
});

// export const { setLongBreak, setPomodoro, setShortBreak } = timerSlice.actions;
export const { setTimer } = timerSlice.actions;
export default timerSlice.reducer;

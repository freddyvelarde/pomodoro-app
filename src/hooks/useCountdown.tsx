import { useState, useEffect } from "react";
import notification from "./notification";

interface ICountdown {
  min: string | number;
  sec: string | number;
}

export default function useCountdown() {
  const { getPermissionToShowNotifications } = notification();
  const [startTime, setStartTime] = useState(1.2);
  const [cdBlocked, setCdblocked] = useState(false);
  const [intervalId, setIntervalId] = useState<number>();
  const [countdown, setCountdown] = useState<ICountdown>({
    min: startTime > 9 ? startTime : `0${startTime}`,
    sec: "00",
  });
  let time = startTime * 60;

  const updateCountDown = () => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    console.log("time:", minutes, seconds);
    if (time >= 0) {
      setCountdown({
        min: minutes > 9 ? minutes : `0${minutes}`,
        sec: seconds > 9 ? seconds : `0${seconds}`,
      });
      time--;
      setStartTime(time / 60);
    }
  };

  const startCountdown = () => {
    if (!cdBlocked) {
      const id = setInterval(updateCountDown, 1000);
      setIntervalId(id);
      setCdblocked(true);
      getPermissionToShowNotifications();
    }
  };

  const pauseCountdown = () => {
    clearInterval(intervalId);
    setCdblocked(false);
  };
  useEffect(() => {
    if (countdown.min === "00" && countdown.sec === "00") {
      pauseCountdown();
      setCdblocked(false);
      setStartTime(1);
    }
  }, [countdown]);

  return { countdown, setStartTime, pauseCountdown, startCountdown, cdBlocked };
}

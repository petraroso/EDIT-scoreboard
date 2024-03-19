import React, { useEffect } from "react";

interface DateClockProps {
  clock: string;
  setClock: (arg0: string) => void;
  intervalId: number | undefined;
  setIntervalId: React.Dispatch<React.SetStateAction<number | undefined>>; // Add setIntervalId prop
  buttonLabel: string;
  setButtonLabel: React.Dispatch<React.SetStateAction<string>>;
  startTime: Date | undefined;
  setStartTime: React.Dispatch<React.SetStateAction<Date | undefined>>;
  elapsedTime: number;
  setElapsedTime: React.Dispatch<React.SetStateAction<number>>;
}

const DateClock: React.FC<DateClockProps> = (props) => {
  const gameDate = new Date();
  const formattedDate = `${gameDate.getDate()}/${
    gameDate.getMonth() + 1
  }/${gameDate.getFullYear()}`;

  useEffect(() => {
    if (props.startTime && !props.intervalId) {
      const id = setInterval(updateClock, 1000);
      props.setIntervalId(id);
    } else if (!props.startTime && props.intervalId) {
      clearInterval(props.intervalId);
      props.setIntervalId(undefined);
    }
  }, [props.startTime, props.intervalId]);

  function handleClockStartPauseResume() {
    if (!props.startTime) {
      const start = new Date();
      props.setStartTime(start);
      props.setButtonLabel("Pauziraj ⏱️");
    } else {
      const now = new Date();
      const difference = now.getTime() - props.startTime.getTime();
      props.setElapsedTime(props.elapsedTime + Math.floor(difference / 1000));
      props.setStartTime(undefined); // Clear the interval when stopping the clock
      props.setButtonLabel("Nastavi ⏱️"); // Set startTime to undefined to prevent further updates
    }
  }

  function updateClock(): void {
    if (props.startTime) {
      const now: Date = new Date();
      const difference: number =
        now.getTime() - props.startTime.getTime() + props.elapsedTime * 1000;
      const elapsedSeconds: number = Math.floor(difference / 1000);
      const minutes: number = Math.floor(elapsedSeconds / 60);
      const seconds: number = elapsedSeconds % 60;
      props.setClock(`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`);
    }
  }

  return (
    <>
      <p>{formattedDate}</p>
      <p>
        <b>{props.clock}</b>
      </p>
      <button onClick={handleClockStartPauseResume}>{props.buttonLabel}</button>
    </>
  );
};

export default DateClock;

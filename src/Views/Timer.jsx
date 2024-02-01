import { useRef, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  const intervalRef = useRef();
  const hourRef = useRef();
  const minRef = useRef();
  const secRef = useRef();

  const setTimeFromInput = () => {
    const hours = parseInt(hourRef.current.value, 10) || 0;
    const minutes = parseInt(minRef.current.value, 10) || 0;
    const seconds = parseInt(secRef.current.value, 10) || 0;
    setTime(hours * 3600 + minutes * 60 + seconds);
  };

  const handleStart = () => {
    setRunning(true);
    setTimeFromInput();

    intervalRef.current = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(intervalRef.current);
          setRunning(false);
          return 0;
        }
      });
    }, 1000);
  };

  const handlePause = () => {
    setRunning(false);
    clearInterval(intervalRef.current);
  };

  const handleReset = () => {
    setRunning(false);
    setTime(0);
    hourRef.current.value = 0;
    minRef.current.value = 0;
    secRef.current.value = 0;
  };

  const timeFormat = (time) => {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = time % 60;

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="border shadow-md p-5">
      <h2 className="font-bold text-center text-xl mb-2">Timer</h2>
      <div className="flex justify-center mb-3">
        <input
          type="number"
          name="hours"
          min="0" max="23"
          ref={hourRef}
          id="hours-input"
          className="block w-12 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800 text-center"
        />
        <span className="text-xl font-light px-2"> h</span>
        <input
          type="number"
          name="minutes"
          min="0" max="59"
          ref={minRef}
          id="minutes-input"
          className="block w-12 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
        />
        <span className="text-xl font-light px-2"> m</span>
        <input
          type="number"
          name="seconds"
          min="0" max="59"
          ref={secRef}
          id="seconds-input"
          className="block w-12 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
        />
        <span className="text-xl font-light px-2"> s</span>
      </div>
      <h3 className="text-2xl text-center font-semibold">{timeFormat(time)}</h3>
      <div className="flex justify-center">
        <button
          onClick={running ? handlePause : handleStart}
          type="submit"
          className="justify-self-start mt-2 w-28 bg-neutral-950 text-neutral-300 border border-neutral-300 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
        >
          <span className="bg-neutral-300 shadow-neutral-300 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
          {running ? "Pause" : "Start"}
        </button>
        <button
          onClick={handleReset}
          type="submit"
          className="justify-self-start mt-2 w-28 bg-red-700 text-neutral-100 border border-neutral-300 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
        >
          <span className="bg-neutral-300 shadow-neutral-300 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;

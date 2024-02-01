import { useRef, useState } from "react";

const Chronometer = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef();

  const handleStart = () => {
    setRunning(true);

    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const handlePause = () => {
    setRunning(false);
    clearInterval(intervalRef.current);
  };

  const handleReset = () => {
    setRunning(false);
    setTime(0);
    clearInterval(intervalRef.current);
  };


  const timeFormat = (time) => {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = time % 60;

    hours = hours < 10? '0' + hours : hours;
    minutes = minutes < 10? '0' + minutes :  minutes;
    seconds = seconds < 10? '0' + seconds : seconds;

    return `${hours}:${minutes}:${seconds}`
  };

  return (
    <div className="border shadow-md p-5">
      <h2 className="font-bold text-center text-xl">Chronometer</h2>
      <h3 className="text-2xl text-center font-semibold">{timeFormat(time)}</h3>
      <div className="flex justify-center">
        <button
          onClick={running ? handlePause : handleStart}
          type="submit"
          className="justify-self-start mt-2 w-28 bg-neutral-950 text-neutral-300 border border-neutral-300 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
        >
          <span className="bg-neutral-300 shadow-neutral-300 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]">
          </span>
          {running ? "Pause" : "Start"}
        </button>
        <button
        onClick={handleReset}
          type="submit"
          className="justify-self-start mt-2 w-28 bg-neutral-950 text-neutral-300 border border-neutral-300 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
        >
          <span className="bg-neutral-300 shadow-neutral-300 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Chronometer;
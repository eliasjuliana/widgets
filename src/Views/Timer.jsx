const Timer = () => {
  return (
    <div className="border shadow-md p-5">
        <h2 className="text-xl font-bold">Timer</h2>
        <h3 className="text-2xl">00:00:00</h3>
        <h3 className="text-2xl">00:00:00</h3>
        <div className="flex">
        <button
          type="submit"
          className="justify-self-start mt-2 w-28 bg-neutral-950 text-neutral-300 border border-neutral-300 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
        >
          <span className="bg-neutral-300 shadow-neutral-300 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
          Start
        </button>
        <button
          type="submit"
          className="justify-self-start mt-2 w-28 bg-neutral-950 text-neutral-300 border border-neutral-300 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
        >
          <span className="bg-neutral-300 shadow-neutral-300 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
          Reset
        </button>
        </div>
    </div>
  )
}

export default Timer
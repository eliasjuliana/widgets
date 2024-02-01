import { useRef, useState } from "react";
import { getRandomNumber } from "../helpers.js";
import List from "../Components/ToDo/List.jsx";

const ToDo = () => {
  const [tasks, setTasks] = useState([]);

  const taskRef = useRef();

  const isValid = (task) => {
    if (task.trim().length < 2) {
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const task = taskRef.current.value;

    if (isValid(task)) {
      setTasks([
        ...tasks,
        {
          id: getRandomNumber(0, 1000),
          content: task,
        },
      ]);
    } else {
      alert("No se agrego la tarea");
    }
  };

  return (
    <div className="py-3 px-5 border shadow-md mb-2 min-h-96">
      <h2 className="font-bold text-center text-xl">To do list...</h2>

      <form onSubmit={handleSubmit} className="flex flex-col xl:flex-row gap-2 items-center">
        <fieldset>
          <label
            htmlFor="task-input"
            className="block text-gray-800 font-semibold text-sm"
          >
            Add task
          </label>
          <div className="mt-2 flex gap-3">
            <input
              type="text"
              ref={taskRef}
              id="task-input"
              name="task"
              className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
            />
          </div>
        </fieldset>
        <div className="flex-grow"></div>
        <button
          type="submit"
          className="justify-self-start mt-2 w-28 bg-neutral-950 text-neutral-300 border border-neutral-300 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
        >
          <span className="bg-neutral-300 shadow-neutral-300 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
          Add
        </button>
      </form>
      <List tasks={tasks} setTasks={setTasks}/>
    </div>
  );
};

export default ToDo;

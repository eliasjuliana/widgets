import { useRef } from "react";
import { getRandomNumber } from "../../helpers";

const NotesForm = (props) => {
  const { setNote } = props;

  const titleRef = useRef();
  const contentRef = useRef();

  const isValidData = (title, content) => {
    // title
    if (title.trim().length < 2) {
      return false;
    }

    // content
    if (content.trim().length < 2) {
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const title = titleRef.current.value;
    const content = contentRef.current.value;

    if (isValidData(title, content)) {
      alert("Note saved");
      setNote((notes) => [
        ...notes,
        {
          id: getRandomNumber(0, 5000),
          title: title,
          content: content,
        },
      ]);
    } else {
      alert("Complete the note");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="title-input" className="block text-gray-800 font-semibold text-sm">
          Title
        </label>
        <input
          type="text"
          ref={titleRef}
          id="title-input"
          name="title"
          className="block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
        />
      </fieldset>
      <fieldset>
        <label htmlFor="description-input" className="block text-gray-800 font-semibold text-sm">
          Content
        </label>
        <input
          type="text"
          ref={contentRef}
          id="content-input"
          name="content"
          className="block w-full h-36 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
        />
      </fieldset>
      
      <button
          type="submit"
          className="mt-2 bg-neutral-950 text-neutral-400 border border-neutral-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
        >
          <span className="bg-neutral-400 shadow-neutral-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
          Add Note
        </button>
    </form>
  );
};

export default NotesForm;

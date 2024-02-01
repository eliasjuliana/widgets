const NoteCard = (props) => {
  const { note, handleDelete } = props;

  return (
    <article className="bg-gray-200 border shadow-md p-2 text-wrap rounded">
      <div>
        <div className="flex justify-between">
        <h3>{note.title}</h3>
        <button onClick={()=>handleDelete(note.id)}>
        <span className="material-symbols-outlined">close</span>
        </button>

        </div>

        <p className="font-light whitespace-">{note.content}</p>
      </div>
    </article>
  );
};

export default NoteCard;

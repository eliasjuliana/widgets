const NoteCard = (props) => {
  const { note } = props;

  return (
    <article className="bg-gray-200 border shadow-md p-2 text-wrap rounded">
      <div>
        <div className="flex justify-between">
        <h3>{note.title}</h3>
        <span className="material-symbols-outlined">close</span>
        </div>

        <p className="font-light whitespace-">{note.content}</p>
      </div>
    </article>
  );
};

export default NoteCard;

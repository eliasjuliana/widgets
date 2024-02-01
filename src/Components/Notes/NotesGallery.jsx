import NoteCard from "./NoteCard";

const NotesGallery = (props) => {

    const {notes, setNotes} = props;

    const handleDelete = (id) =>{
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
    };

    return (
        <section className="mt-2 grid grid-cols-1 lg:grid-cols-2 grid-flow-row gap-4">
            {notes.length === 0? <p>Notes block is empty</p> : null}
            {notes.map((note)=>{
                return <NoteCard key={note.id} note = {note} handleDelete={handleDelete}/>
            })}
        </section>
    )
}

export default NotesGallery
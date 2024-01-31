import NoteCard from "./NoteCard";

const NotesGallery = (props) => {

    const {notes} = props;

    return (
        <section className="mt-2 grid grid-cols-1 lg:grid-cols-2 grid-flow-row gap-4">
            {notes.length === 0? <p>Notes block is empty</p> : null}
            {notes.map((note)=>{
                return <NoteCard key={note.id} note = {note}/>
            })}
        </section>
    )
}

export default NotesGallery
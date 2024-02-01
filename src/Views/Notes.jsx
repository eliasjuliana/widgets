import { useEffect, useState } from "react";
import NotesForm from "../Components/Notes/NotesForm";
import NotesGallery from "../Components/Notes/NotesGallery";

const notesLS =  JSON.parse(localStorage.getItem('notes')) || [];

const Notes = () => {

  const [notes, setNotes] = useState(notesLS);

  useEffect(()=>{
      localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

  return (
    <div className="border shadow-md p-5">
        <h2 className="font-bold text-xl">Add a note</h2>
        <NotesForm setNotes={setNotes}/>
        <NotesGallery notes={notes} setNotes={setNotes}/>
    </div>
  )
}

export default Notes
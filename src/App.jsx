import React, { useState } from "react";
import TodoButton from "./TodoButton";
import "./App.css";
import SearchPanel from "./SearchPanel";
import Note from "./Note";
import NoteList from "./NoteList";

function App() {
  const [modalActive, setModalActive] = useState(false);
  const [noteTitle, setNoteTitle] = useState("");
  const [noteDescription, setNoteDescription] = useState("");
  const [id, setId] = useState(0);
  const [savedNote, setSavedNote] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleSubmit = () => {
    if (
      (noteTitle.trim() === "" || noteTitle.length > 30) &&
      noteDescription.trim() === ""
    ) {
      setWarning(true);
      return null;
    }
    setSavedNote([{ id, noteTitle, noteDescription }, ...savedNote]);
    setId(id + 1);
    setModalActive(false);
    setNoteTitle("");
    setNoteDescription("");
  };

  const handleDescriptionChange = (e) => {
    setNoteDescription(e.target.value);
    setWarning(false);
  };

  const handleTitleOnChange = (e) => {
    setNoteTitle(e.target.value);
    setWarning(false);
  };

  return (
    <div className="todo__wrapper">
      <SearchPanel />
      <NoteList savedNote={savedNote} />

      <TodoButton buttonName="+" handleClick={() => setModalActive(true)} />

      <Note
        active={modalActive}
        setActive={setModalActive}
        handleCloseButton={() => setModalActive(false)}
        handleDescriptionChange={handleDescriptionChange}
        handleTitleOnChange={handleTitleOnChange}
        descriptionValue={noteDescription}
        noteTitle={noteTitle}
        handleSubmit={handleSubmit}
        warning={warning}
      />
    </div>
  );
}

export default App;

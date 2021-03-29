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

  // useEffect(() => {
  //   setSavedNote({ ...savedNote, key: { id }, noteTitle, descriptionValue });
  // }, [noteTitle, descriptionValue]);

  const handleSubmit = () => {
    console.log("im here");
    setSavedNote([...savedNote, {id, noteTitle, noteDescription}]);
    setId(id + 1);
    console.log(id);
    console.log(savedNote, 'savedNote');
    setModalActive(false);
    setNoteTitle("");
    setNoteDescription("");
    // e.preventDefault();
  };
//  console.log(savedNote, 'all notes')
  const handleDescriptionChange = (e) => {
    setNoteDescription(e.target.value);
    // console.log(e.target.value);
  };

  const handleTitleOnChange = (e) => {
    setNoteTitle(e.target.value);
    // console.log(e.target.value);
  };

  return (
    <div className="todo__wrapper">
      <SearchPanel />
      <NoteList savedNote={savedNote}/>

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
      />
    </div>
  );
}

export default App;

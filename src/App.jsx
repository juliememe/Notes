import React, { useState } from "react";
import TodoButton from "./TodoButton";
import "./App.css";
import Note from "./Note";
import NoteList from "./NoteList";
import SearchPanel from "./SearchPanel";

function App() {
  const [modalActive, setModalActive] = useState(false);
  const [noteTitle, setNoteTitle] = useState("");
  const [noteDescription, setNoteDescription] = useState("");
  const [id, setId] = useState(0);
  const [savedNote, setSavedNote] = useState([]);
  const [warning, setWarning] = useState(false);
  const [confirmWindow, setConfirmWindow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  // const [searchedNotes, setSearchedNotes] = useState([]);

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


  const handleSearchClick = () => {
    if (searchValue === "") return null;
    if (savedNote.length === 0) return setSearchValue("");
    let currentList = savedNote.slice();

   let   newAr =currentList.filter(({noteTitle, noteDescription}) => 
     noteTitle.toLowerCase().includes(searchValue.toLowerCase()) 
     ||noteDescription.toLowerCase().includes(searchValue.toLowerCase()) );

    setSearchValue("");
  };

  return (
    <div className="note-wrapper">
      <SearchPanel
        handleSearchClick={handleSearchClick}
        searchValue={searchValue}
        onChange={(e) => setSearchValue((e.target.value).toLowerCase())}
      />
      <NoteList
        savedNote={savedNote}
        handleDeleteClick={() => setConfirmWindow(true)}
      />

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

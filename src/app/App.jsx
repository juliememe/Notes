import React, { useState } from 'react';
import NoteAddButton from '../note-add-button/NoteAddButton';
import './App.css';
import Note from '../note/Note';
import NoteList from '../note-list/NoteList';
import SearchPanel from '../search-panel/SearchPanel';
import DeleteModalWindow from '../delete-modal-window/DeleteModalWindow';


function App() {
  const [modalActive, setModalActive] = useState(false);
  const [noteTitle, setNoteTitle] = useState('');
  const [noteDescription, setNoteDescription] = useState('');
  const [id, setId] = useState(0);
  const [savedNote, setSavedNote] = useState([]);
  const [warning, setWarning] = useState(false);
  const [confirmWindow, setConfirmWindow] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [tempData, setTempData] = useState([]);
  const [currentItem, setCurrentItem] = useState(null);

  const handleSubmit = () => {
    if (
      (noteTitle.trim() === '' || noteTitle.length > 30) &&
      noteDescription.trim() === ''
    ) {
      setWarning(true);
      return null;
    }
    setSavedNote([{ id, noteTitle, noteDescription }, ...savedNote]);
    setId(id + 1);
    setModalActive(false);
    setNoteTitle('');
    setNoteDescription('');
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
    if (searchValue === '') return null;
    if (savedNote.length === 0) return setSearchValue('');
    let currentList = savedNote.slice();
    let newAr = currentList.filter(
      ({ noteTitle, noteDescription }) =>
        noteTitle.toLowerCase().includes(searchValue.toLowerCase()) ||
        noteDescription.toLowerCase().includes(searchValue.toLowerCase())
    );
    let tempArr = savedNote.slice();
    setTempData(tempArr);
    setSavedNote(newAr);
  };

  const handleCloseButton = () => {
    setSearchValue('');
    setSavedNote(tempData);
  };

  const handleDeleteConfirm = () => {
    let newAr = savedNote.slice();
    const filteredArray = newAr.filter(({ id }) => id !== currentItem);
    setSavedNote(filteredArray);
  };

  const handleDeleteClick = (itemId) => {
    setConfirmWindow(true);
    setCurrentItem(itemId);
  };

  return (
    <div className='note-wrapper'>
      <SearchPanel
        handleSearchClick={handleSearchClick}
        searchValue={searchValue}
        onChange={(e) => setSearchValue(e.target.value.toLowerCase())}
        handleCloseButton={handleCloseButton}
      />
      <NoteList savedNote={savedNote} handleDeleteClick={handleDeleteClick} />

      <NoteAddButton buttonName='+' handleClick={() => setModalActive(true)} />

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
      <DeleteModalWindow
        confirmWindow={confirmWindow}
        handleCancelDelete={() => setConfirmWindow(false)}
        handleDeleteConfirm={handleDeleteConfirm}
      />
    </div>
  );
}

export default App;

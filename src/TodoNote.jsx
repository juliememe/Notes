import React, { useState } from "react";
import "./todoNote.scss";

export default function TodoNote({active, setActive, handleCloseButton}) {
  const [noteTitle, setNoteTitle] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");

  return (
      <div className={ active ?  'overlay active' :'overlay' } onClick={() => setActive(false)}>
    <form className="note__form" onClick={e =>  e.stopPropagation()}>
      <input
        type="text"
        placeholder="Введите заголовок"
        value={noteTitle}
        className="note__title"
      />
      <input
        type="text"
        placeholder="Текст заметки"
        className="note__description"
        value={descriptionValue}
      />
      <div className="note__buttons">
        <input type="submit" className="button__create" value="Создать" />
        <input type="button" className="button__close" value="Закрыть" onClick={handleCloseButton}/>
      </div>
    </form>
    </div>
  );
}

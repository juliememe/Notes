import React from "react";
import "./note.scss";

export default function Note({
  active,
  setActive,
  handleCloseButton,
  handleDescriptionChange,
  handleTitleOnChange,
  noteTitle,
  descriptionValue,
  handleSubmit,
}) {
  return (
    <div
      className={active ? "overlay active" : "overlay"}
      onClick={() => setActive(false)}
    >
      <form className="note__form" onClick={(e) => e.stopPropagation()}>
        <input
          type="text"
          placeholder="Введите заголовок"
          value={noteTitle}
          className="note__title"
          name="title"
          onChange={handleTitleOnChange}
        />
        <textarea
          placeholder="Текст заметки"
          className="note__description"
          value={descriptionValue}
          name="description"
          onChange={handleDescriptionChange}
          width="200px"
          resize="none"
        />
        <div className="note__buttons">
          <input
            type="button"
            className="button__create"
            value="Создать"
            onClick={handleSubmit}
          />
          <input
            type="button"
            className="button__close"
            value="Закрыть"
            onClick={handleCloseButton}
          />
        </div>
      </form>
    </div>
  );
}

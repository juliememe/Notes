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
  warning,
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
          className={
            noteTitle.length > 30 || warning === true
              ? "note__title warning"
              : "note__title"
          }
          name="title"
          onChange={handleTitleOnChange}
        />
        {noteTitle.length > 30 ? (
          <div style={{ fontSize: "12px", color: "red", paddingLeft: "10px" }}>
            Длина заголовка не должна превышать 30 символов!
          </div>
        ) : null}
        <textarea
          placeholder="Текст заметки"
          className={
            warning ? "note__description  warning" : "note__description"
          }
          value={descriptionValue}
          name="description"
          onChange={handleDescriptionChange}
          width="200px"
          resize="none"
        />
        {warning === true ? (
          <div style={{ fontSize: "12px", color: "red", paddingLeft: "10px" }}>
            Оба поля не могут быть пустыми!
          </div>
        ) : null}
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

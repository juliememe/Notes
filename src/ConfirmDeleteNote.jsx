import React from "react";
import "./note.scss";

export default function ConfirmDeleteNote({ confirmWindow, setConfirmWindow }) {
  return (
    <div
      className={confirmWindow ? "overlay active" : "overlay"}
      onClick={() => setConfirmWindow(false)}
    >
      <div className="confirm__wrapper">
        <div className="confirm__title">
          Вы точно хотите удалить эту заметку?
        </div>
        <div className="confirm__buttons">
          <input className="confirm__buttons-yes" type="button">
            Подтвердить
          </input>
          <input className="confirm__buttons-no" type="button">
            Отменить
          </input>
        </div>
      </div>
    </div>
  );
}

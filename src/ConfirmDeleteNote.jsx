import React from "react";
import "./note.scss";
import './confirm-delete-note.scss';

export default function ConfirmDeleteNote({ confirmWindow, handleCancelDelete, handleDeleteConfirm, itemId}) {
  return (
    <div
      className={confirmWindow ? "overlay active" : "overlay"}
      onClick={handleCancelDelete}
    >
      <div className="confirm__wrapper">
        <div className="confirm__title">
          Вы точно хотите удалить эту заметку?
        </div>
        <div className="confirm__buttons">
          <button className="confirm__buttons-yes" type="button" onClick={()=>handleDeleteConfirm({itemId})}>
            Подтвердить
          </button>
          <button className="confirm__buttons-no" type="button" onClick={handleCancelDelete}>
            Отменить
          </button>
        </div>
      </div>
    </div>
  );
}

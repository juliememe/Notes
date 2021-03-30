import React from "react";
import "./note-list.scss";

import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { Button } from "@material-ui/core";

export default function NoteList({ savedNote, handleDeleteClick }) {

  return (
    <div className="notes__wrapper">
      {savedNote.map((elem) => (
        <div className="notes" key={elem.id}>
          {elem.noteTitle !== "" ? (
            <div className="notes__title">{elem.noteTitle}</div>
          ) : null}
          {elem.noteDescription !== "" ? (
            <div className="notes__description">{elem.noteDescription}</div>
          ) : null}
          <div className="delete-button__wrapper">
            <Button onClick={handleDeleteClick}>
              <DeleteForeverIcon className="delete-button" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

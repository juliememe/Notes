import React from "react";
import "./note-list.scss";

import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { Button } from "@material-ui/core";

export default function NoteList({ savedNote, handleDeleteClick }) {



  return (
    <ul className="notes__wrapper">
      {savedNote.map((elem) => (
        <li className="notes" key={elem.id} id={elem.id}>
          {elem.noteTitle !== "" ? (
            <div className="notes__title">{elem.noteTitle}</div>
          ) : null}
          {elem.noteDescription !== "" ? (
            <div className="notes__description">{elem.noteDescription}</div>
          ) : null}
          <div className="delete-button__wrapper">
            <Button onClick={()=>handleDeleteClick(elem.id)} id={elem.id} >
              <DeleteForeverIcon className="delete-button" />
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
}

import React from "react";
import Button from "@material-ui/core/Button";
import "./note-add-button.css";

export default function NoteAddButton({ handleClick, buttonName }) {
  return (
    <Button variant="contained" color="secondary" onClick={handleClick}>
      {buttonName}
    </Button>
  );
}

import React from "react";
import Button from "@material-ui/core/Button";
import './todoButton.css';

export default function TodoButton({handleClick, buttonName}) {

  return (
    <Button variant="contained" color="secondary" onclick={handleClick}>
     {buttonName}
    </Button>
  );
}

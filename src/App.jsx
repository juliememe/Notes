import React, {useState} from 'react';
import Button from "./TodoButton";
import "./App.css";
import SearchPanel from "./SearchPanel";
import TodoNote from "./TodoNote";
import { Tooltip } from "@material-ui/core";

function App() {

  const [modalActive, setModalActive] = useState(false);
  return (
    <div className="todo__wrapper">
      <SearchPanel />
      <Tooltip title="Добавить заметку" arrow>
        <Button buttonName="+" handleClick={() => setModalActive(true)} />
      </Tooltip>
      <TodoNote active = {modalActive} setActive={setModalActive} handleCloseButton={() => setModalActive(false)}/>
    </div>
  );
}

export default App;

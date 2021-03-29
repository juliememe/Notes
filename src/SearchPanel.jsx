import React, { useState } from "react";
import SearchBar from "material-ui-search-bar";
import './searchPanel.css';

export default function SearchPanel() {
  const [value, setValue] = useState("");

  const doSomethingWith = () => console.log(value);

  return (
    <SearchBar
      value={value}
      onChange={(newValue) => setValue(newValue)}
      onRequestSearch={() => doSomethingWith(value)}
      cancelOnEscape={true}
    />
  );
}

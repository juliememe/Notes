import React from "react";
import "./search-panel.scss";
import Search from "@material-ui/icons/Search";
import Close from "@material-ui/icons/Close";

export default function SearchPanel({
  handleSearchClick,
  onChange,
  searchValue,
  handleCloseButton,
}) {
  return (
    <div className="search-panel">
      <form className="search-form">
        <button
          type="button"
          className="search-button"
          onClick={handleSearchClick}
        >
          <Search className="search-icon" onClick={handleSearchClick} />
        </button>
        <input
          type="text"
          className="search-input"
          placeholder="Поиск"
          onChange={onChange}
          value={searchValue}
        />
        <button
          type="button"
          className="close-button"
          onClick={handleCloseButton}
        >
          <Close />
        </button>
      </form>
    </div>
  );
}

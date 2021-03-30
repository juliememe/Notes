import React from "react";
import "./search-panel.scss";

export default function SearchPanel({ handleSearchClick, onChange, searchValue }) {
  // const [searchValue, setSearchValue] = useState("");
  return (
    <div className="search__panel">
      <form>
        <input
          type="text"
          className="input-search"
          placeholder="Search..."
          onChange={onChange}
          value={searchValue}
        />
        <button type="button" onClick={handleSearchClick}>push to search</button>
      </form>
    </div>
  );
}

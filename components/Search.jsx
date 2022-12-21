import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";

const Search = () => {
  // Search input
  const [search, setSearch] = useState("");

  return (
    <form className="header_search">
      <input
        className="header_search-input"
        type="search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Link href={`/search/${search}`}>
        <button className="header_search-btn">
          <SearchIcon />
        </button>
      </Link>
    </form>
  );
};

export default Search;

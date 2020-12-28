import React from "react";
import { useGlobalContext } from "../context";

const Search = () => {
  const { search, setSearch } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="search">Search</label>
          <input
            type="text"
            id="search"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </form>
    </section>
  );
};

export default Search;

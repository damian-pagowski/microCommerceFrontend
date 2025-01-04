import React, { useState } from 'react';

const Search = ({ onSearch }) => {
    const [search, setSearch] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(search);
    };

    return (
        <form className="d-flex mt-3 mb-3">
            <input className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                id='search-input'
            />
            <button className="btn btn-outline-success" onClick={handleSubmit} type="submit" id='search-submit'>Search</button>
        </form>
    );
};

export default Search;
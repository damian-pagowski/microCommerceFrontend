'use client';

const SearchBar = () => {
  const handleSearch = (e) => {
    e.preventDefault();
    const searchQuery = e.target.search.value;
    console.log('Search Query:', searchQuery);
    // Add search logic here
  };

  return (
    <div className="py-4 bg-gray-100">
      <form className="d-flex" role="search" onSubmit={handleSearch}>
        <input
          name="search"
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
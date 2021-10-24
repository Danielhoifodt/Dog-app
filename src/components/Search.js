import { useState } from 'react';
import { Alert } from 'react-bootstrap';

const Search = ({ setSearchTerm }) => {
  const [search, setSearch] = useState();
  const [error, setError] = useState();

  const onlyText = (input) => {
    const letterRegex = /^[a-zA-Z]+$/;
    return letterRegex.test(input);
  };

  const submitSearch = (event) => {
    event.preventDefault();
    // Check if the input has text and only contains text
    if (search.length !== 0 && onlyText(search)) {
      setSearchTerm(search);
      setError();
    } else {
      setSearchTerm('');
      setError('Search input can only be text');
    }
  };

  const resetSearch = () =>{
    setSearchTerm('');
  };

  return (
    <>
      <div className="mt-4" id="navbarSupportedContent">
        {error && (
          <div className="mt-4">
            <Alert variant="danger">{error}</Alert>
          </div>
        )}
        <form className="d-flex">
          <input
            onChange={(input) => setSearch(input.target.value)}
            className="form-control me-2"
            id="search"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            disabled={!search}
            className="btn btn-outline-success me-2"
            type="submit"
            onClick={submitSearch}
          >
            Search
          </button>
          <button
            className="btn btn-outline-danger"
            type="button"
            onClick={resetSearch}
          >
            Reset
          </button>
        </form>
      </div>
    </>
  );
};

export default Search;

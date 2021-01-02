import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { searchProducts } from '../store/deals';

const SearchBar = (props) => {
  const [search, setSearch] = useState('');
  const [count, setCount] = useState(0);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  useEffect(() => {
    props.searchProducts(search);
  }, [search]);

  return (
    <div className="pa4-l">
      <h1> {count}</h1>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
      <form
        onSubmit={handleSearch}
        className="mw7 center pa0 br2-ns ba b--black-10"
      >
        <fieldset className="cf bn ma0 pa0">
          <div className="cf">
            <input
              className="f6 f5-l input-reset bn fl black-80 
                bg-white pa3 lh-solid w-100 w-75-m w-80-l 
                br2-ns br--left-ns"
              placeholder="Search for Products"
              type="text"
              value={search}
              onChange={handleSearch}
            />
            <input
              className="f6 f5-l button-reset fl pv3 tc 
                 bn bg-animate bg-black-70 hover-bg-black white 
                 pointer w-100 w-25-m w-20-l br2-ns br--right-ns"
              type="submit"
              value="Search"
            />
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default connect(null, { searchProducts })(SearchBar);

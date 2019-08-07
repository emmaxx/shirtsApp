import React from 'react';

const Search = ({handleChange, query}) => {
  const queryHandler = query !== '' ? <p>Showing results for "{query}"</p> : <p></p>;

  return (
    <div className='main-search'>
      <div className='input-icon-wrap'>
        <span className="input-icon"><span className="fa fa-search fa-2x"></span></span>
        <input type="text" onChange={handleChange} placeholder="Search" />
      </div>
      {queryHandler}
    </div>
  );
}

export default Search
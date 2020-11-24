import React from 'react';

const SearchForm = ({ searchValue, changeHandler }) => {
    return(
        <div className="container">
            <form className="add-toy-form">
                <input className="input-text" type="text" value={searchValue} onChange={changeHandler} placeholder="search by name" />
            </form>
        </div>
    ) 

}

export default SearchForm
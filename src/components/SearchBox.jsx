import React, { useState } from 'react'

const SearchBox = ({handleChange, search}) => {

    return (
        <div>
            <form>
            <input type="text" onChange={ handleChange } value={search} />
            </form>
            <p>{search}</p>
        </div>
    )
}

export default SearchBox

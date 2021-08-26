import React from "react"

const Search = () => {
    const handleChange = (event) => {
        console.log(event.target.value);
    }

    return (
        <div>
            <label className="exerc02" htmlFor="search">Search</label>
            <input className="exerc02" id="search" type="text" onChange={handleChange}></input>
        </div>
    )
}

export default Search;
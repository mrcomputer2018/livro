import React from "react"
import List from "../List/List"
import Search from "../Search/Search"
import "./exerc02.css"

class Exerc02 extends React.Component {
    render(){
        return(
            <div>
                <h1 className="exerc02">My Hacker Stories</h1>
                <Search />
                <hr/>
                <List />
            </div>
        )
    }
}

export default Exerc02
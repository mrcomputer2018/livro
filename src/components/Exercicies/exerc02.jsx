import React from "react"
import "./exerc02.css"

const list = [
    {
        title: 'React',
        url: 'https://reactjs.org/',
        author: 'Jordan Walke',
        num_comments: 3,
        points: 4,
        objectID: 0
    },
    {
        title: 'Redux',
        url: 'https://redux.js.org/',
        author: 'Dan Abramov, Andrew Clark',
        num_comments: 2,
        points: 5,
        objectID: 1,
    }
]
class Exerc02 extends React.Component {
    render(){
        return(
            <div>
                <h1 className="exerc02">My Hacker Stories</h1>
                <label className="exerc02" htmlFor="search">Search</label>
                <input className="exerc02" id="search" type="text"></input>
                <hr/>
                <ul>
                    {list.map((item) => {
                        return <li className="exerc02" key={item.objectID}>
                                    <span><a href={item.url}>{item.title}</a></span>
                                    <span>{item.author}</span>
                                    <span>{item.num_comments}</span>
                                    <span>{item.points}</span>
                                </li>
                    })}
                </ul>

            </div>
        )
    }
}

export default Exerc02
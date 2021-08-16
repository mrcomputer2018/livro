import React from "react"
import "./exerc02.css"

const initialList = [
    { id: 'a', name: 'Learn React' },
    { id: 'b', name: 'Learn GraphQL' },
]

const Exerc04 = () => {
    const [list, setList] = React.useState(initialList);

    const handleClick = event => {
        setList(list.slice().reverse());
    };

    return (
        <div>
            <ul>
                {list.map(item => {
                   return  <li key={item.id}>
                        <label>
                            <input type="checkbox"/>
                            {item.name}
                        </label>
                    </li>
                })}
            </ul>

            <button type="button" onClick={handleClick}>Lista Reversa</button>
        </div>
    )
}

export default Exerc04;
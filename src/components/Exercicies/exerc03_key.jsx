import React from "react"
import "./exerc02.css"

const joshs = [{  Name: "Josh" }, { Name: "Joshina" }, {  Name: "Notjosh" }]

class Exerc03 extends React.Component {
    render() {
        return <div>
                    {joshs.map((item) => {
                        return <li key={`Key-${item.Name}`}>{item.Name}</li>
                    })}
                </div>
    }
}

export default Exerc03;
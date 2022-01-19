import React from "react";

class Laptop extends React.Component {

    onClicked = () => {
        this.color = 'blue'
        console.log(this.color)
    }

    constructor() {
        super()

        this.color = 'red'
        this.type = 'dotted'
    }

    render() {
        return (
            <>
                <h1>Hello Laptop - {this.color}, {this.type} </h1>
                <div>
                    <input type='button' value='Change' onClick={this.onClicked} />
                </div>
            </>
        )
    }
}

export default Laptop
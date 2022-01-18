import React from "react";

class Laptop extends React.Component {

    constructor() {
        super()

        this.color = 'red'
        this.type = 'dotted'
    }

    render() {
        return (
            <>
                <h1>Hello Laptop - {this.color}, {this.type} </h1>
            </>
        )
    }
}

export default Laptop
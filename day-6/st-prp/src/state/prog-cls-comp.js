
import React from "react";

export default class PrgCls extends React.Component {

    constructor(props) {
        super(props)
        this.state = { prg: 0 }
    }

    onNegClkd = () => this.setState({ prg: this.state.prg - 2 })
    onPosClkd = () => this.setState({ prg: this.state.prg + 2 })

    render() {
        return (
            <main >
                <div>
                    <input type='button' value='-' onClick={this.onNegClkd} />
                    <progress value={this.state.prg} max='100'> {this.state.prg} </progress>
                    <input type='button' value='+' onClick={this.onPosClkd} />
                </div>
            </main >
        )
    }
}
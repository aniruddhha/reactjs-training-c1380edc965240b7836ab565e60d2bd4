
import React from "react";

export class Mobile extends React.Component {

    constructor(props) {
        super(props)

        console.log('constructor')
        this.state = { password: '' }

        this.ttl = React.createRef()
    }

    // lg = console.log

    onChangePassword = () => this.setState(st => ({ password: 'hello' }))
    // onChangePassword = () => this.setState({ password: 'hello' })
    // onChangePassword = () => this.setState(st => st.password = 'hi')

    render() {
        console.log('render')
        // this.setState({ password: 'hi' }) // it makes trouble

        return (
            <>
                <h1 ref={this.ttl}> Hello World </h1>
                <div>
                    <input type='button' value='Change Password' onClick={this.onChangePassword} />
                </div>
                <hr />
            </>
        )
    }

    componentDidMount() {
        // this.setState({ password: 'hi' }) // it is okay
        console.log('componentDidMount')

        this.ttl.current.style.border = '1px solid red'
    }

    componentDidUpdate() {
        // this.setState({ password: 'hi' }) // it makes troble
        console.log('componentDidUpdate')

        try {
            throw new Error('Sample Error')
        } catch (error) {
            console.log(error)
        }
    }

    componentWillUnmount() {
        // this.setState({ password: 'hi' }) // it is okay
        console.log('componentWillUnmount')
    }
}
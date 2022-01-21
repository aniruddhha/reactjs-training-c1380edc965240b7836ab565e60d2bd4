import React from "react";

export class MobileContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = { error: undefined, errorInfo: undefined }
    }

    render() {
        return this.state.error ? <h2>I got an error </h2> : this.props.children
    }

    componentDidCatch(error, errorInfo) {
        console.log('componentDidCatch')
        console.log(error)
        console.log(errorInfo)

        this.setState({ error, errorInfo })
    }

    componentDidUpdate() {
        try {
            const a = 10
        } catch (error) {

        }
    }
}
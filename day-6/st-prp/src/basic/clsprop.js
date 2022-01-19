import React from 'react'

export default class Doctor extends React.Component {

    render() {
        const { id, name } = this.props
        return (
            <section>
                <p>Name : {name}</p>
                <p>Id : {id}</p>
            </section>
        )
    }
}
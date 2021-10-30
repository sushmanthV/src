import React, { Component } from 'react'

export default class Corporationbank extends Component {
    render(props) {
        return (
            <div>
                <h1>Corporationbank for {this.props.info.lastName}</h1>
            </div>
        )
    }
}

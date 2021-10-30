import React, { Component } from 'react'

export default class States extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:"varshu"
             
        }
    }
    
    render() {
        setTimeout(()=>{
            this.setState({Name:"Varshu vallepalli"})
        },3000)
        return (
            <div>
                <h1>{this.state.name}</h1>
            </div>
        )
    }
}

import React, { Component } from 'react'

export default class Error extends Component {

    constructor(props){
        super(props);
        this.state = {
            id : this.props.match.params.id
        }
        console.log(this.state.id)
    }

    render() {
        return (
            <div>
                <h1>Logement</h1>
            </div>
        )
    }
}

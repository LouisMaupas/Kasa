import React, { Component } from 'react'
// style sheet

export default class Equipments extends Component {
    render() {
        const equipmentsArray = this.props.equipments
        return (
            <div>
                {equipmentsArray}
            </div>
        )
    }
}

